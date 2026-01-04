import { Link } from 'react-router-dom';
import { platforms } from '../data/guides';

const base = import.meta.env.BASE_URL;

export function HomePage() {
  return (
    <>
      <div className="hero-badge">
        <span className="badge-icon">🛡️</span>
        <span className="badge-text">Security First</span>
      </div>
      <h1 className="main-title">
        <span className="title-icon">🔐</span>
        <span>Account Security Hub</span>
      </h1>
      <h3>Protect your social media accounts step by step</h3>
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-number">12</span>
          <span className="stat-label">Platforms</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">50+</span>
          <span className="stat-label">Steps</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Secure</span>
        </div>
      </div>
      <div className="pages">
        {platforms.map((platform) => (
          <Link key={platform.id} to={`/${platform.id}`}>
            <div>
              <img
                src={platform.icon}
                alt={`${platform.name} Icon`}
                title={platform.name}
              />
            </div>
          </Link>
        ))}
        <Link to="/2fa">
          <div>2FA</div>
        </Link>
        <Link to="/vocabulaire">
          <div>
            <img
              src={`${base}icons/vocab.png`}
              alt="Vocabulary Icon"
              title="Vocabulary"
            />
          </div>
        </Link>
      </div>
      <div className="home-footer">
        <span className="footer-icon">🔒</span>
        <span>Keep your accounts safe</span>
      </div>
    </>
  );
}

