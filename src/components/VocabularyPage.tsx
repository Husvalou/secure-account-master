import { Header } from './Layout';
import { vocabularyTerms } from '../data/vocabulary';

export function VocabularyPage() {
  const categories = Array.from(new Set(vocabularyTerms.map(term => term.category)));
  
  return (
    <div className="vocabulary-page">
      <div className="vocabulary-hero">
        <span className="vocabulary-icon">📚</span>
        <span className="vocabulary-title">Glossaire Technique</span>
      </div>
      
      <Header subtitle="vocabulaire" />
      
      <div className="vocabulary-intro">
        <p>Définitions des termes techniques utilisés dans les guides de sécurisation</p>
      </div>

      {categories.map((category) => {
        const termsInCategory = vocabularyTerms.filter(term => term.category === category);
        return (
          <div key={category} className="vocabulary-category">
            <div className="category-header">
              <h3>{category}</h3>
              <span className="category-count">{termsInCategory.length} terme{termsInCategory.length > 1 ? 's' : ''}</span>
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
        <span>Comprendre pour mieux sécuriser</span>
      </div>
    </div>
  );
}

