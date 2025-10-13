import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books books={books} />}/>
        {/* <Route path="/books" element={() => <Books books=
        {books} />} /> */}
        <Route path="/books/:id" element={<BookInfo books={books}
        addToCart={addToCart} cart={cart} /> }/>
        <Route path="/cart" element={<Cart books={books} cart={cart}
        changeQuantity={changeQuantity} /> }/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;