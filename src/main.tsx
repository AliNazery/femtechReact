import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/index.css"
import ScrollToTop from './Util/routes/ScrollToTop.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Lib/store.ts'
import Announcement from './components/announcement/Announcement.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <ScrollToTop />
        <Announcement/>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
