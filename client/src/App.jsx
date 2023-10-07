import { BrowserRouter as Router, Link } from "react-router-dom";

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
      </div>
    </Router>
  );
}

export default App
