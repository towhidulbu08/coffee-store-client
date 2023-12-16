/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, photo, details } =
    coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:5000/coffee/${id}`,{
        method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
          Swal.fire({
            title: 'Success',
            text: 'Deleted Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
       })
      }
    });
  };

  return (
    <div>
      <div className="card w-full pl-6 pt-4 pb-4  my-4 card-side bg-[#F5F4F1]  ">
        <figure>
          <img className="h-[230px]  w-full " src={photo} alt="Movie" />
        </figure>
        <div className="card-body w-full">
          <div className="flex items-center  w-full  justify-between">
            <div>
              <h2 className="card-title text-[16px]"> {name}</h2>
              <p>{quantity}</p>
              <p>{supplier}</p>
              <p>{taste}</p>
            </div>
            <div>
              <div className="card-actions justify-end ">
                <div className="btn-group rounded-t-none   btn-group-vertical space-y-4 ">
                  <button className="btn   bg-[#D2B48C]">View</button>
                  <button className="btn bg-black text-white">
                    <Link to={`updateCoffee/${_id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn bg-red-600 hover:bg-red-600 text-white"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
