import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from "./pages/start.js"
import About from "./pages/about.js"
import Nav from "./components/nav.js"

function App() {
    return (
        <div className="app">
            <Nav/>
            <BrowserRouter>
                <div className="pages">
                        <Routes>
                            <Route
                                path="/"
                                element={<Start/>}
                            />
                            <Route
                                path="/about"
                                element={<About/>}
                            />
                        </Routes>
                    </div>
            </BrowserRouter>
        </div>

    )
}

export default App;