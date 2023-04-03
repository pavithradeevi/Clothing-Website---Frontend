// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import Error from '../components/Error'
// import Loading from '../components/Loading'
// import Sucess from '../components/Success';
// import {addDress }from "../actions/dressActions"

// export default function Adddress() {
//     const [title, settitle] = useState("");
//   const [Sprice, setSprice] = useState();
//   const [Mprice, setMprice] = useState();
//   const [Lprice, setLprice] = useState();
//   const [XLprice, setXLprice] = useState();
//   const [XXLprice, setXXLprice] = useState();
//   const [img, setimg] = useState("");
//   const [desc, setdesc] = useState("");
//   const [category, setcategory] = useState("");

//   const dispatch = useDispatch();

//   const adddressstate = useSelector((state)=>state.addDressReducer);
//   const {sucess,error,loading}=adddressstate;

//   function formHandler(e) {
//     e.preventDefault();
//     const dress = {
//       title,
//       img,
//       desc,
//       category,
//       prices: {
//         S:Sprice,
//         L:Lprice,
//         M:Mprice,
//         XL:XLprice,
//         XXL:XXLprice
//       },
//     };
//     console.log(dress);
//     dispatch(addDress(dress));
//   }

//   return (
//     <div>
//       <hr/>
//       <h1>Add Dress</h1>
//       <hr/>
//       <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
//       {loading && <Loading/>}
//       {error && <Error error="Something went wrong" />}
//       {sucess && <Sucess sucess="New Dress Added Successfully"/>}


//       <form onSubmit={formHandler}>

//           <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="dress name"
//             value={title}
//             onChange={(e) => {
//               settitle(e.target.value);
//             }}
//           />

//         <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="S size Price"
//             value={Sprice}
//             onChange={(e) => {
//               setSprice(e.target.value);
//             }}
//           />

//         <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="M size Price"
//             value={Mprice}
//             onChange={(e) => {
//               setMprice(e.target.value);
//             }}
//           />

//         <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="L size Price"
//             value={Lprice}
//             onChange={(e) => {
//               setLprice(e.target.value);
//             }}
//           />

//         <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="XL size Price"
//             value={Lprice}
//             onChange={(e) => {
//               setXLprice(e.target.value);
//             }}
//           />

//         <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="XXL size Price"
//             value={XXLprice}
//             onChange={(e) => {
//               setXXLprice(e.target.value);
//             }}
//           />

//         <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="category"
//             value={category}
//             onChange={(e) => {
//               setcategory(e.target.value);
//             }}
//           />

//         <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="desc"
//             value={desc}
//             onChange={(e) => {
//               setdesc(e.target.value);
//             }}
//           />
//           <input
//             className="form-control mt-2"
//             type="text"
//             placeholder="image url"
//             value={img}
//             onChange={(e) => {
//               setimg(e.target.value);
//             }}
//           />

//           <button className="btn mt-3" type="submit">Submit</button>


//         </form>

//       </div>
//     </div>
//   )
// }


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDress } from "../actions/dressActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Adddress() {
  const [title, settitle] = useState("");
  const [Sprice, setSprice] = useState();
  const [Mprice, setMprice] = useState();
  const [Lprice, setLprice] = useState();
  const [XLprice, setXLprice] = useState();
  const [XXLprice, setXXLprice] = useState();
  const [img, setimg] = useState("");
  const [desc, setdesc] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const adddressstate = useSelector((state) => state.addDressReducer);
  const { success, error, loading } = adddressstate;

  function formHandler(e) {
    e.preventDefault();
       const dress = {
            title,
            img,
            desc,
            category,
            prices: {
              S:Sprice,
              L:Lprice,
              M:Mprice,
              XL:XLprice,
              XXL:XXLprice
            },
          };
          console.log(dress);
          dispatch(addDress(dress));
        }

  return (
    <div>
      <hr/>
      <h2>Add Dress</h2>
      <hr/>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Pizza added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control mt-2"
            type="text"
            placeholder="name"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        <input
            className="form-control mt-2"
            type="text"
            placeholder="S size Price"
            value={Sprice}
            onChange={(e) => {
              setSprice(e.target.value);
            }}
          />

        <input
            className="form-control mt-2"
            type="text"
            placeholder="M size Price"
            value={Mprice}
            onChange={(e) => {
              setMprice(e.target.value);
            }}
          />

        <input
            className="form-control mt-2"
            type="text"
            placeholder="L size Price"
            value={Lprice}
            onChange={(e) => {
              setLprice(e.target.value);
            }}
          />

        <input
            className="form-control mt-2"
            type="text"
            placeholder="XL size Price"
            value={Lprice}
            onChange={(e) => {
              setXLprice(e.target.value);
            }}
          />

        <input
            className="form-control mt-2"
            type="text"
            placeholder="XXL size Price"
            value={XXLprice}
            onChange={(e) => {
              setXXLprice(e.target.value);
            }}
          />

        <input
            className="form-control mt-2"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />

        <input
            className="form-control mt-2"
            type="text"
            placeholder="desc"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="image url"
            value={img}
            onChange={(e) => {
              setimg(e.target.value);
            }}
          />

          <button className="btn mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}