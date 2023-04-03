import React from 'react'

export default function Orders() {
  return (
    <div>
      <h2 style={{fontSize:"35px"}}>My Orders</h2>
      <hr/>
      <div className="row justify-content-center">
      <div 
        className="col-md-8 m-2 p-1"
        data-aos="fade-down"
        style={{ backgroundColor: "skyblue", color: "black" }}
        >
        <div className="flex-container">
        <div className="text-left w-100 m-1">
        <h2 style={{ fontSize: "25px" }}>
            Category
        </h2>
        <hr/>
        <div>
            <p>Name [varient]*quantity = price</p>
        </div>
        <p>Order Status</p>

        </div>
        <div className="text-left w-100 m-1">
            <h2 style={{ fontSize: "25px" }}>Shipping Details</h2>
            <hr/>
            <p>Name : test</p>
            <p>Home Address : 1,1st street</p>
            <p>City:Bangalore</p>
            <p>Pincode : 560094</p>
            <p>Mobile Number: 987654321</p>

        </div>
        <div className="text-left w-100 m-1">
        <h2 style={{ fontSize: "25px" }}>
            Price Details
        </h2>
        <hr/>
        <p>Total MRP:</p>
        <p>Delievery Date:</p>
        

        </div>
        <div className="text-left w-100 m-1">
        <h2 style={{ fontSize: "25px" }}>
           Payment Details
        </h2>
        <hr/>
        <p>Transation ID:</p>
        <p>Order Id:</p>
        

        </div>
            
        </div>

      </div>

      </div>
    </div>
  )
}
