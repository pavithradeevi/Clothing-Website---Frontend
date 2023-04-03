

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { addToCart } from "../actions/cartActions";

export default function Dress({ dress }) {

  const [quantity, setquantity] = useState(1);
  const [size, setsize] = useState("S");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  function addtocarthandler()
  {
    dispatch(addToCart(dress,quantity,size))
  }

  return (
    <>
    <div
      style={{ margin: "60px" }}
      className="shadow-lg p-3 bg-white rounded foo"
    >
      <div onClick={handleShow}>
        <h1>{dress.title}</h1>
        <img
          src={dress.img}
          className="img-fluid"
          style={{ height: "200px", width: "250px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p className="mb-2">Sizes</p>
          <select
            className="form-control"
            value={size}
            onChange={(e) => setsize(e.target.value)}
          >
          {dress.size.map(sizes=>{
         return <option value={sizes}>
             {sizes}
            </option>
          })}
            
          </select>
        </div>
        <div className="w-100 m-1">
          <p className="mb-2">Quantity</p>
          <select
            className="form-control mb-2"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="pt-2">
            Price: ₹{dress.prices[0][size] * quantity}{" "}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocarthandler}>
            Add to cart
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{dress.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={dress.img}
            alt=""
            className="img-fluid"
            style={{ height: "400px !important",alignItems: "center !important" }}
          />
          <p>{dress.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  </>
  );
}