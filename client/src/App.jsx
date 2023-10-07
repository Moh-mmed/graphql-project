import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-4">
          <ul className="flex items-center justify-center">
            <li className="mr-6">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
