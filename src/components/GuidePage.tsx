import { useEffect, useState, useCallback } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from './Layout';
import { guides } from '../data/guides';
import { vocabularyTerms } from '../data/vocabulary';

function VocabularyTooltip({ term, definition }: { term: string; definition: string }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="vocab-term"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {term}
      <span className="vocab-icon">🔍</span>
      {isVisible && (
        <div className="vocab-tooltip">
          <div className="vocab-tooltip-title">{term}</div>
          <div className="vocab-tooltip-definition">{definition}</div>
        </div>
      )}
    </span>
  );
}

function parseMarkdownLinks(text: string): React.ReactNode {
  // Create a map of vocabulary terms for quick lookup (by main term name)
  const vocabMap = new Map<string, typeof vocabularyTerms[0]>();
  vocabularyTerms.forEach(term => {
    const mainTerm = term.term.split('(')[0].trim().toLowerCase();
    vocabMap.set(mainTerm.toLowerCase(), term);
    vocabMap.set(term.term.toLowerCase(), term);
  });

  // First, parse markdown links and store text segments
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const segments: Array<{ type: 'text' | 'link'; content: string; url?: string }> = [];
  let lastIndex = 0;
  let match;
  let keyCounter = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: text.substring(lastIndex, match.index) });
    }
    const [, linkText, url] = match;
    segments.push({ type: 'link', content: linkText, url });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', content: text.substring(lastIndex) });
  }

  // Process segments
  const result: React.ReactNode[] = [];
  
  segments.forEach((segment) => {
    if (segment.type === 'link') {
      const isExternal = segment.url!.startsWith('http');
      result.push(
        <a
          key={`link-${keyCounter++}`}
          href={segment.url}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="guide-link"
        >
          {segment.content}
          {isExternal && <span className="external-icon">↗</span>}
        </a>
      );
    } else {
      // Process text for vocabulary terms
      const processedText = processTextForVocabulary(segment.content, keyCounter);
      result.push(...processedText);
      keyCounter += 100; // Increment to avoid key conflicts
    }
  });

  return result.length > 0 ? result : text;
}

function processTextForVocabulary(text: string, baseKey: number): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyIndex = baseKey;

  // Sort terms by length (longest first) to match longer terms first
  const sortedTerms = [...vocabularyTerms].sort((a, b) => {
    const aMain = a.term.split('(')[0].trim();
    const bMain = b.term.split('(')[0].trim();
    return bMain.length - aMain.length;
  });

  const matches: Array<{ term: typeof vocabularyTerms[0]; index: number; length: number; matchedText: string }> = [];
  const usedRanges: Array<{ start: number; end: number }> = [];

  // Find all matches
  sortedTerms.forEach((vocabTerm) => {
    const variations = [
      vocabTerm.term,
      vocabTerm.term.split('(')[0].trim()
    ];

    variations.forEach((variation) => {
      const escaped = variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        
        // Check if this range overlaps with existing matches
        const overlaps = usedRanges.some(range => 
          (start < range.end && end > range.start)
        );
        
        if (!overlaps) {
          matches.push({ 
            term: vocabTerm, 
            index: start, 
            length: match[0].length,
            matchedText: match[0]
          });
          usedRanges.push({ start, end });
        }
      }
    });
  });

  // Sort matches by index
  matches.sort((a, b) => a.index - b.index);

  // Build result
  matches.forEach((match) => {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <VocabularyTooltip
        key={`vocab-${keyIndex++}`}
        term={match.matchedText}
        definition={match.term.definition}
      />
    );
    lastIndex = match.index + match.length;
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export function GuidePage() {
  const { guideId } = useParams<{ guideId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const guide = guideId ? guides[guideId] : null;

  const stepParam = parseInt(searchParams.get('step') || '1', 10);
  const [currentPage, setCurrentPage] = useState(Math.max(0, stepParam - 1));
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (guide) {
      const maxPage = guide.steps.length - 1;
      const validPage = Math.max(0, Math.min(stepParam - 1, maxPage));
      if (validPage !== currentPage) {
        setCurrentPage(validPage);
      }
    }
  }, [stepParam, guide, currentPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const goToPage = useCallback(
    (page: number) => {
      if (!guide || isTransitioning) return;

      setIsTransitioning(true);
      
      setTimeout(() => {
        const newUrl = page === 0 ? `/${guideId}` : `/${guideId}?step=${page + 1}`;
        navigate(newUrl, { replace: true });
        setCurrentPage(page);
        
        setTimeout(() => setIsTransitioning(false), 100);
      }, 150);
    },
    [guide, guideId, navigate, isTransitioning]
  );

  const nextPage = useCallback(() => {
    if (guide && currentPage < guide.steps.length - 1) {
      goToPage(currentPage + 1);
    }
  }, [guide, currentPage, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  if (!guide) {
    return (
      <>
        <Header />
        <h3>Guide not found</h3>
      </>
    );
  }

  const currentStep = guide.steps[currentPage];
  const progress = ((currentPage + 1) / guide.steps.length) * 100;
  const isLastStep = currentPage === guide.steps.length - 1;
  const isFirstStep = currentPage === 0;

  // Security tips based on progress
  const getSecurityTip = () => {
    if (isLastStep) return { icon: '🎉', text: 'Account secured!' };
    if (progress < 25) return { icon: '🔓', text: 'Starting security check...' };
    if (progress < 50) return { icon: '🔒', text: 'Making progress...' };
    if (progress < 75) return { icon: '🛡️', text: 'Almost there...' };
    return { icon: '✨', text: 'Final steps!' };
  };

  const tip = getSecurityTip();

  return (
    <div className="guide-page">
      <Header subtitle={guideId} />
      
      {/* Security status badge */}
      <div className={`security-badge ${isLastStep ? 'complete' : ''}`}>
        <span className="security-icon">{tip.icon}</span>
        <span className="security-text">{tip.text}</span>
        <span className="security-progress">{Math.round(progress)}%</span>
      </div>
      
      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="progress-dots">
          {guide.steps.map((_, index) => (
            <button
              key={index}
              className={`progress-dot ${index === currentPage ? 'active' : ''} ${index < currentPage ? 'completed' : ''}`}
              onClick={() => goToPage(index)}
              title={`Step ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Step card */}
      <div className={`step-card ${isTransitioning ? 'transitioning' : ''} ${isLastStep ? 'complete' : ''}`}>
        {/* Corner decorations */}
        <div className="card-decoration top-left">◢</div>
        <div className="card-decoration top-right">◣</div>
        
        <div className="step-header">
          <div className="icon-wrapper">
            <img
              src={guide.icon}
              width={40}
              alt={`${guide.name} Icon`}
              title={guide.name}
              className="step-icon"
            />
            {isLastStep && <span className="checkmark">✓</span>}
          </div>
          <div className="step-info">
            <span className="step-number">Step {currentPage + 1}</span>
            <span className="step-total">of {guide.steps.length}</span>
          </div>
          <div className="step-badge">
            {isFirstStep && <span className="badge start">START</span>}
            {isLastStep && <span className="badge finish">DONE</span>}
            {!isFirstStep && !isLastStep && <span className="badge progress">IN PROGRESS</span>}
          </div>
        </div>
        
        <div className="step-content">
          <ul className="step-list">
            {currentStep.points.map((point, index) => (
              <li key={`${currentPage}-${index}`} className="step-item">
                <span className="step-bullet">{index + 1}</span>
                <span className="step-text">{parseMarkdownLinks(point)}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Bottom decoration */}
        <div className="card-footer-deco">
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="guide-nav">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="nav-btn prev"
        >
          <span className="nav-arrow">←</span>
          <span className="nav-text">Previous</span>
        </button>
        
        <div className="nav-indicator">
          <span className="nav-current">{currentPage + 1}</span>
          <span className="nav-sep">/</span>
          <span className="nav-total">{guide.steps.length}</span>
        </div>
        
        <button
          onClick={nextPage}
          disabled={currentPage === guide.steps.length - 1}
          className="nav-btn next"
        >
          <span className="nav-text">{isLastStep ? 'Complete' : 'Next'}</span>
          <span className="nav-arrow">{isLastStep ? '✓' : '→'}</span>
        </button>
      </div>
      
      <p className="keyboard-hint">
        <span className="key">←</span>
        <span className="key">→</span>
        <span>to navigate</span>
      </p>
    </div>
  );
}
