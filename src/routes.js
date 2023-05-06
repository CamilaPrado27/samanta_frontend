import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Plantinha from "./pages/Plantinha"

export default function AppRoute(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/plantinha' element = {<Plantinha />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    )
}