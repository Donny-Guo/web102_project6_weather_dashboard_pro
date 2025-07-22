import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import Layout from './components/Layout.jsx';
import DetailView from './components/DetailView.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<App />} />
        <Route path="/:date" element={<DetailView />} />
      </Route>

    </Routes>
  </BrowserRouter>
    
  
)
