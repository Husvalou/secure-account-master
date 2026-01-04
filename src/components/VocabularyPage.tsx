import { Header } from './Layout';
import { vocabularyTerms } from '../data/vocabulary';

const base = import.meta.env.BASE_URL;

export function VocabularyPage() {
  const categories = Array.from(new Set(vocabularyTerms.map(term => term.category)));
  
  return (
    <div className="vocabulary-page">
      <div className="vocabulary-hero">
        <img 
          src={`${base}icons/vocab.png`}
          alt="Vocabulary Icon"
          className="vocabulary-icon"
        />
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

