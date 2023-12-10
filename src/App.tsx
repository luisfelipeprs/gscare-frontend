import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Theme>
          <Router />
        </Theme>
      </BrowserRouter>
    </>
  )
}
export default App
