import React, { useEffect } from 'react'
import Filter from '../components/Filter';
import Error from '../components/Error';
import Dress from "../components/Dress";
import Loading from "../components/Loading";
import { getAlldresses } from "../actions/dressActions";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const dispatch = useDispatch();

  const dressesstate=useSelector((state)=>state.getAllDressesReducer);
  const {dresses,error,loading} = dressesstate;

  useEffect(()=>{
    dispatch(getAlldresses());
  },[]);



  return (
    <div>

    <Filter/>
    <div className="row justify-content-center">
    {loading?(

    <Loading/>
    ):error ? (
      <Error error="Something Wrong"/>
    ):(
      dresses.map((dress)=>(
        <div className='col-md-4' key={dress._id}>
        <div>
        <Dress dress={dress}/>
        </div>
        </div>

      ))
    
    )}
    </div>
    </div>
  );
}



