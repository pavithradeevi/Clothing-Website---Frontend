import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDress, getDressById } from "../actions/dressActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editdress({ match }) {
  const dispatch = useDispatch();

    const [title, settitle] = useState("");
    const [Sprice, setSprice] = useState();
    const [Mprice, setMprice] = useState();
    const [Lprice, setLprice] = useState();
    const [XLprice, setXLprice] = useState();
    const [XXLprice, setXXLprice] = useState();
    const [img, setimg] = useState("");
    const [desc, setdesc] = useState("");
    const [category, setcategory] = useState("");

    const getdressbyidstate = useSelector((state)=>state.getDressByIdReducer);
    const {dress,error,loading} = getdressbyidstate;
    const editdressstate = useSelector((state)=>state.editDressReducer);
    const {editloading,editerror,editsuccess} = editdressstate;

  useEffect(() => {
    if (dress) {
      if (dress._id === match.params.dressid) {
                settitle(dress.title);
                setdesc(dress.desc);
                setcategory(dress.category);
                setSprice(dress.prices[0]["S"]);
                setMprice(dress.prices[0]["M"]);
                setLprice(dress.prices[0]["L"]);
                setXLprice(dress.prices[0]["XL"]);
                setXXLprice(dress.prices[0]["XXL"]);
                setimg(dress.img);
      } else {
        dispatch(getDressById(match.params.dressid));
      }
    } else {
      dispatch(getDressById(match.params.dressid));
    }
  }, [dress, dispatch]);

  function formHandler(e) {
    e.preventDefault();
    const editeddress = {
      _id: match.params.dressid,
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
    dispatch(editDress(editeddress));
  }

  return (
       <div>
    <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit Dress</h1>
      <hr/>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      {loading && <Loading/>}
      {error && <Error error="Something went wrong" />}
      {editsuccess && <Success success=" Dress edit Successfully"/>}
      {editloading && <Loading/>}


      <form onSubmit={formHandler}>

          <input
            className="form-control mt-2"
            type="text"
            placeholder="dress name"
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

          <button className="btn mt-3" type="submit">Submit</button>


        </form>

      </div>
    </div>
    </div>
  )
}