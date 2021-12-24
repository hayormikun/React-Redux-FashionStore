import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductInfo from './components/ProductInfo';
import Error from './components/Error';

function App() {
  return (
    <div className="app">
      <Router>          
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:prodId" element={<ProductInfo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
