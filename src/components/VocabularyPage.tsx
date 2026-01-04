import { Header } from './Layout';
import { vocabularyTerms } from '../data/vocabulary';

function BookWithMagnifierIcon() {
  return (
    <svg 
      className="vocabulary-icon-svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Book - left page */}
      <path d="M3 5h9v14H3z" fill="none" />
      <path d="M3 5h9v14H3z" stroke="currentColor" />
      
      {/* Book - right page */}
      <path d="M12 5h9v14h-9z" fill="none" />
      <path d="M12 5h9v14h-9z" stroke="currentColor" />
      
      {/* Book binding/spine (center line) */}
      <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1.5" />
      
      {/* Magnifying glass circle */}
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      
      {/* Magnifying glass handle */}
      <line x1="16" y1="16" x2="19" y2="19" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function VocabularyPage() {
  const categories = Array.from(new Set(vocabularyTerms.map(term => term.category)));
  
  return (
    <div className="vocabulary-page">
      <div className="vocabulary-hero">
        <BookWithMagnifierIcon />
        <span className="vocabulary-title">Technical Glossary</span>
      </div>
      
      <Header subtitle="vocabulary" />
      
      <div className="vocabulary-intro">
        <p>Definitions of technical terms used in the security guides</p>
      </div>

      {categories.map((category) => {
        const termsInCategory = vocabularyTerms.filter(term => term.category === category);
        return (
          <div key={category} className="vocabulary-category">
            <div className="category-header">
              <h3>{category}</h3>
              <span className="category-count">{termsInCategory.length} term{termsInCategory.length > 1 ? 's' : ''}</span>
            </div>
            <div className="terms-list">
              {termsInCategory.map((term, index) => (
                <div key={term.term} className="term-card" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="term-header">
                    <span className="term-name">{term.term}</span>
                  </div>
                  <div className="term-definition">
                    {term.definition}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      
      <div className="vocabulary-footer">
        <span className="book-icon">📖</span>
        <span>Understand to better secure</span>
      </div>
    </div>
  );
}

