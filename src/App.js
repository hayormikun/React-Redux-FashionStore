import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
// import CakeHook from './components/CakeHook';
// import IceCreamShop from './components/IceCreamShop';
// import MultiCakes from './components/MultiCakes';
import Users from './components/Users';

function App() {
  return (
    <Provider store = {store}>
      <div className='App'>
        <Users/>
        {/* <MultiCakes />
        <CakeHook />
        <IceCreamShop /> */}
      </div>
    </Provider>
  );
}

export default App;
