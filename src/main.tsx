import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<BrowserRouter>
			{/* <StrictMode> */}
			<App />
			<Toaster />
			{/* </StrictMode> */}
		</BrowserRouter>
	</Provider>
)
