import { Toaster } from 'react-hot-toast';

import logo from '../logo.svg';
import Products from './Products';
import WishList from './Wishlist';

import '../styles/App.css';


function App() {
  return (
    <div className="container-fluid m-0 p-0 text-white">
      <header className="App-header">
        <h2 className='my-4'>Swag Shop Frontend</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>your code</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="row m-0 p-0">
        <h3 className='text-center'>All Products</h3>
        <div className="row m-0 p-0">
          <div className='col-8'>
            <Products />
          </div>
          <div className='col-4'>
            <WishList />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
