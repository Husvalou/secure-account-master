import { Link, Outlet } from 'react-router-dom';

function FloatingElements() {
  return (
    <div className="floating-elements">
      <span className="float-icon float-1">🔒</span>
      <span className="float-icon float-2">🛡️</span>
      <span className="float-icon float-3">🔑</span>
      <span className="float-icon float-4">✓</span>
      <span className="float-icon float-5">🔐</span>
      <span className="float-icon float-6">⚡</span>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg 
      className="home-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function Layout() {
  return (
    <div className="app-wrapper">
      <FloatingElements />
      <Link to="/" className="home-btn" title="Home">
        <HomeIcon />
      </Link>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export function Header({ subtitle, showTitle = true }: { subtitle?: string; showTitle?: boolean }) {
  if (!showTitle && !subtitle) return null;
  
  return (
    <h1>
      {subtitle ? (
        <>
          <Link to="/">{subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}</Link>
          <i> Guide</i>
        </>
      ) : (
        <Link to="/">Account Security</Link>
      )}
    </h1>
  );
}

