import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterDresses } from "../actions/dressActions";

export default function Filter() {

    const dispatch = useDispatch();

    const [searchkey,setsearchkey]=useState("");
    const [category,setcategory]=useState("Traditional ")
  return (
    <div className='container' >
    <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
    <div className='col-md-3 w-100' class="input-group w-auto">
    <input type="text"
        placeholder="What are you looking for?"
        className="form-control w-100 mt-2"
        value={searchkey}
        onChange={(e) => {
              setsearchkey(e.target.value);
            }}
        
        
    />

    </div>
    <div className='col-md-3 w-100' class="input-group w-auto">
    <select
        className="form-control w-100 mt-2"
        value={category}
            onChange={(e) => setcategory(e.target.value)}
    >
    <option value="all">All</option>
    <option value="new arrivals">New Arrivals</option>
    <option>Western Outfit</option>
    <option value="Traditional">Traditional</option>
    <option>Sleep Wear</option>
    <option>Accessories</option>
    </select>
    

    </div>
    <div className="col-md-3 w-100" class="input-group w-auto">
    <button className="btn w-100 mt-2" 
    class="btn"
    onClick={() => {
    dispatch(filterDresses(searchkey, category));
    }}
    
    >Search</button>

    </div>

    </div>
      
    </div>
  )
}
