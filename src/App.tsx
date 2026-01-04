import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { GuidePage } from './components/GuidePage';
import { TwoFAPage } from './components/TwoFAPage';
import { SteamIdPage } from './components/SteamIdPage';
import { VocabularyPage } from './components/VocabularyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="2fa" element={<TwoFAPage />} />
          <Route path="steam-id" element={<SteamIdPage />} />
          <Route path="vocabulaire" element={<VocabularyPage />} />
          <Route path=":guideId" element={<GuidePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

