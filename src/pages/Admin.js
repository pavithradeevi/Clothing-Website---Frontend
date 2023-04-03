import React, { useEffect } from 'react';
import Adddress from './Adddress';
import Editdress from './Editdress';
import Orderslist from './Orderslist';
import Dresseslist from './Dresseslist';
import Userslist from './Userslist';
// import { Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';



export default function Admin() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
        <h2>ADMIN PANEL</h2>
        <hr/>
        <ul className="adminfunctions">
            <li>
                <Link className="noww" to={"/admin/adddress"}>Add Dress</Link>
            </li>
            <li>
                <Link className="noww" to={"/admin/userlist"}>Users List</Link>
            </li>
            <li>
                <Link className="noww" to={"/admin/dresseslist"}>Dress List</Link>
            </li>
            <li>
                <Link className="noww" to={"/admin/orderslist"}>Orders list</Link>
            </li>
            
        </ul>

    <Routes>

      <Route path="/admin" exact element={<Userslist/>}/>
      <Route path="/admin/userlist" exact element={<Userslist/>}/>
      <Route path="/admin/orderslist" exact element={<Orderslist/>}/>
      <Route path="/admin/dresseslist" exact element={<Dresseslist/>}/>
      <Route path="/admin/adddress" exact element={<Adddress/>}/>
      <Route
        path="/admin/editdress/:dressid"
        exact element={<Editdress/>}
      />
      
      {/* <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/dresseslist" component={Dresseslist} exact />
            <Route path="/admin/adddress" component={Adddress} exact />
            <Route
              path="/admin/editdress/:dressid"
              component={Editdress}
              exact
            /> */}
      

    </Routes>
        </div>
      </div>
      
    
    </div>
  )
}
