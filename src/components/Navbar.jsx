import {BsFillCartCheckFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div>
      <div className="flex flex-row justify-between h-20 max-w-6xl mx-auto items-center">
        <NavLink to='/'>
          <div className='ml-5 '>
          <img src="../logo.png" width='200px' />
          </div>
        </NavLink>
       
        <div className='flex items-center font-semibold text-slate-100 space-x-6'> 
        <NavLink to='/'>
          <p>Home</p>
        </NavLink>
        <NavLink to='/contactus'>
          <p>Contact</p>
        </NavLink>
        <NavLink to='/cart'>
        <div className='relative'>
            <BsFillCartCheckFill/>
            {
              cart.length>0 && 
              <span
              className='absolute  -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
              >{cart.length}</span>
            }
            
        </div>
            
        </NavLink>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
