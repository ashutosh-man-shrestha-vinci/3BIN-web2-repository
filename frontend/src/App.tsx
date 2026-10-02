
import './App.css'
import Home from './pages/home'
import type { ComponentType } from 'react'



function App() {
    const HomePage = Home as unknown as ComponentType

    return <HomePage />
}

export default App
