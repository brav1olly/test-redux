'use server'

import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './App.server'


createRoot(document.getElementById('root')!).render(
  <Counter />
  
  // <StrictMode>
    // {/* <Provider store={store}> */}
    
    // {/* </Provider> */}
  // </StrictMode>,
)
