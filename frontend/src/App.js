import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from "./pages/Start.jsx"
import Header from "./components/Header.jsx"

function App() {
    return (
        <div className="app">
            <Header />
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Start />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>

    )
}

export default App;