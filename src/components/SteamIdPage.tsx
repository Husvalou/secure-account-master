import { useState, useCallback, useRef, useEffect } from 'react';
import { Header } from './Layout';

const NONE = '00000000000000000';

export function SteamIdPage() {
  const [vanity, setVanity] = useState('');
  const [steamId, setSteamId] = useState(NONE);
  const [isValid, setIsValid] = useState(false);
  const [copied, setCopied] = useState(false);
  const checkRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  const updateSteamID = useCallback(async (value: string) => {
    try {
      const prevCheck = ++checkRef.current;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(async () => {
        if (prevCheck !== checkRef.current) return;

        try {
          const response = await fetch(
            `https://cors.faav.top/steam/${encodeURIComponent(value)}`
          );
          if (response.ok) {
            const steamData = await response.json();
            const newId = steamData?.id || NONE;
            setSteamId(newId);
            setIsValid(!steamData.error && newId !== NONE);
          }
        } catch {
          setSteamId(NONE);
          setIsValid(false);
        }
      }, 275);
    } catch {
      setSteamId(NONE);
      setIsValid(false);
    }
  }, []);

  const detectSteam = useCallback((value: string, path: string): string => {
    const detected = value.split(path).pop()?.split('/')[0] || '';
    return detected;
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      if (value.includes('profiles/')) {
        value = detectSteam(value, 'profiles/');
      } else if (value.includes('id/')) {
        value = detectSteam(value, 'id/');
      }

      value = value.replace(/\s/g, '');
      setVanity(value);

      if (value.length > 0) {
        updateSteamID(value);
      } else {
        setSteamId(NONE);
        setIsValid(false);
      }
    },
    [detectSteam, updateSteamID]
  );

  const copyToClipboard = useCallback(async () => {
    if (steamId === NONE) return;

    try {
      await navigator.clipboard.writeText(steamId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = steamId;
      Object.assign(textArea.style, { top: '0', left: '0', position: 'fixed' });
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        console.error('Fallback: Unable to copy', err);
      }
      document.body.removeChild(textArea);
    }
  }, [steamId]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="steamid-page">
      <div className="steamid-hero">
        <span className="steam-logo">🎮</span>
        <span className="hero-title">Steam ID Finder</span>
      </div>
      
      <Header subtitle="steam-id" />
      
      <div className="steamid-description">
        <p>Find your SteamID64 from your profile URL or vanity name</p>
      </div>
      
      <div className="steamOuter">
        <div className="input-wrapper">
          <span className="input-icon">🔍</span>
          <input
            type="text"
            autoFocus
            autoComplete="off"
            id="vanity"
            placeholder="paste your vanity id or profile URL"
            value={vanity}
            onChange={handleInputChange}
          />
          {vanity && (
            <button 
              className="clear-btn" 
              onClick={() => { setVanity(''); setSteamId(NONE); setIsValid(false); }}
            >
              ✕
            </button>
          )}
        </div>
        
        <div className="result-card">
          <div className="result-label">
            <span className="label-icon">🆔</span>
            <span>SteamID64</span>
          </div>
          <div
            className={`steam-id-display ${isValid ? 'valid' : ''} ${copied ? 'copied' : ''}`}
            onClick={copyToClipboard}
            style={{
              cursor: isValid ? 'pointer' : 'default',
            }}
            title={isValid ? 'Click to copy' : ''}
          >
            {steamId}
          </div>
          <div className="result-status">
            {isValid ? (
              <span className="status-valid">
                <span className="status-icon">✓</span>
                {copied ? 'Copied to clipboard!' : 'Click to copy'}
              </span>
            ) : (
              <span className="status-waiting">
                <span className="status-icon">⏳</span>
                Enter a Steam profile
              </span>
            )}
          </div>
        </div>
        
        <div className="steamid-tips">
          <div className="tip">
            <span className="tip-icon">💡</span>
            <span>Tip: Paste your full Steam profile URL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

