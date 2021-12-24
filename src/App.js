import './App.css';
import CakeHook from './components/CakeHook';
import IceCreamShop from './components/IceCreamShop';
import MultiCakes from './components/MultiCakes';
import Users from './components/Users';

function App() {
  return (
      <div className='App'>
        <MultiCakes />
        <CakeHook />
        <IceCreamShop />            
        <Users/>
      </div>   
  );
}

export default App;
