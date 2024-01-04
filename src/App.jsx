import { Route ,Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contactus from './pages/Contactus';

const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </div>
  );
};

export default App;
