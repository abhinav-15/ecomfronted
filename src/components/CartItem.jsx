import {MdOutlineDeleteOutline} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id))
    toast.success('Item removed successfully')
  }
  return (
    <div className='w-11/12 max-w-[630px] mx-auto border-b mt-7 py-2 border-b-black'>
      <div className='flex flex-row gap-x-7'>
        <div className='max-w-[120px]'>
          <img className=' h-full' src={item.image}/>
        </div>
        <div>
          <div>
            <p
            className="text-gray-700 font-semibold text-lg   my-1"
            >{item.title}</p>
            <p
            className=" text-gray-400 font-normal text-[12px] text-left"
            >{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
            <div className='flex justify-between mt-5'>
              <p>{item.price}</p>
             <div onClick={removeFromCart}>
             <MdOutlineDeleteOutline
              className='rounded-full text-red-600 bg-red-400 h-[30px] w-[30px] text-sm flex items-center justify-center cursor-pointer'
             />
             </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
