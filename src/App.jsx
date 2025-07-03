import Topbar from './components/Topbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Single from './pages/Single'
import Write from './pages/Write'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeBtn from './components/ThemeBtn'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'

function App() {
	const [themeMode, setThemeMode] = useState('light')

	const lightMode = () => {
		setThemeMode('light')
	}

	const darkMode = () => {
		setThemeMode('dark')
	}

	useEffect(() => {
		document.querySelector('html').classList.remove('light', 'dark')
		document.querySelector('html').classList.add(themeMode)
	}, [themeMode])

	return (
		<Router>
			<ThemeProvider value={{ themeMode, lightMode, darkMode }}>
				<Topbar />
				<ThemeBtn />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/posts' element={<Homepage />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/post/:id' element={<Single />} />
					<Route path='/write' element={<Write />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</ThemeProvider>
		</Router>
	)
}

export default App
