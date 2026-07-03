import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import EmployeeList from "./EmployeeList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <h2>Product Management</h2>

        <div>
          <Link to="/">Products</Link>
          <Link to="/employees">Employees</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;