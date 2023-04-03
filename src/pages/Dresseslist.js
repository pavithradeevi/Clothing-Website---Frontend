import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { getAlldresses } from '../actions/dressActions'
import { deleteDress } from '../actions/dressActions'
import { Link } from 'react-router-dom'


export default function Dresseslist() {
    const dispatch = useDispatch();

    const dressstate = useSelector((state)=>state.getAllDressesReducer);
    const {dresses,error,loading} = dressstate;

    useEffect(()=>{
        dispatch(getAlldresses());
    },[]);


  return (
    <div>
      <hr/>
      <h2>Dress List</h2>
      <hr/>
      {loading && <Loading/>}
      {error && <Error error="Something went wrong" />}
        <table className="table table-striped table-dark table-responsive-sm">
            <thead className="thead-dark">
            <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>

            </thead>
            <tbody>
                {dresses && dresses.map((dress)=>{
                    return(
                        <tr>
                            <td>{dress.title}</td>
                            <td>
                                S:{dress.prices[0]["S"]}<br/>
                                L:{dress.prices[0]["L"]}<br/>
                                M:{dress.prices[0]["M"]}<br/>
                                XL:{dress.prices[0]["XL"]}<br/>
                                XXL:{dress.prices[0]["XXL"]}<br/>
                            </td>
                            <td>{dress.category}</td>
                            <td>
                                <i
                                     className="fa fa-trash m-1"
                                        onClick={() => {
                                            dispatch(deleteDress(dress._id));
                                        }}
                                />
                                <Link to={`/admin/editdress/${dress._id}`}>
                                <i className="fa fa-edit m-1"></i>

                                </Link>
                            </td>
                        </tr>

                    );
                })};
            </tbody>
        </table>
    
    
    
    </div>






  )
}
