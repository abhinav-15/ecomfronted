import { useEffect, useState } from "react";
import Product from '../components/Product'
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([])
  async function fetchProductData(){
    setLoading(true);
    try{
        const result=await fetch(API_URL);
        const data=await result.json();
        setPosts(data);
    }
    catch(error){
        console.log('error');
        setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
      fetchProductData();
  },[])

  return (
    <div>
      {
        loading?(<Spinner/>):
        posts.length > 0?
        (
          <div className="grid md:grid-col-3 sm:grid-cols-2 xs:grid-col-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[180vh]">{
            posts.map((post)=>(
              <Product key={posts.id} post={post}/>
            ))
          }
           
          </div>
        ):
        <div>
            <p>No DATA found</p>
        </div>
      }
    </div>
  );
};

export default Home;
