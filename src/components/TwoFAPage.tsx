import { Header } from './Layout';
import { twoFaApps } from '../data/guides';

export function TwoFAPage() {
  return (
    <div className="twofa-page">
      <div className="twofa-hero">
        <span className="twofa-icon">🔐</span>
        <span className="twofa-title">Two-Factor Authentication</span>
      </div>
      
      <Header subtitle="2fa" />
      
      <div className="twofa-intro">
        <p>Add an extra layer of security to your accounts</p>
      </div>

      <div className="option-section">
        <div className="option-header">
          <span className="option-number">1</span>
          <h3>use an authenticator app</h3>
          <span className="option-badge recommended">Recommended</span>
        </div>
        <div className="options">
          <ul>
            {twoFaApps.map((app, index) => (
              <li key={app.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="app-icon">📱</span>
                <a href={app.url} target="_blank" rel="noopener noreferrer">
                  {app.name}
                </a>
                <span className="arrow">→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="option-divider">
        <span>OR</span>
      </div>

      <div className="option-section">
        <div className="option-header">
          <span className="option-number">2</span>
          <h3>use a 2fa secret</h3>
          <span className="option-badge">Advanced</span>
        </div>
        <div className="options">
          <ul>
            <li>
              <span className="step-icon">🔑</span>
              Look for a 16/32 digit code (secret key)
            </li>
            <li>
              <span className="step-icon">📋</span>
              Paste the secret key into{' '}
              <a href="https://totp.codes/" target="_blank" rel="noopener noreferrer">
                totp.codes
              </a>
            </li>
            <li>
              <span className="step-icon">🔒</span>
              Keep your secret key in a safe place
            </li>
          </ul>
        </div>
      </div>
      
      <div className="twofa-footer">
        <span className="shield">🛡️</span>
        <span>Stay protected with 2FA</span>
      </div>
    </div>
  );
}

