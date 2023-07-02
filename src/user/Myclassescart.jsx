/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { Authcontext } from "../private/provider/Provider";


const Myclassescart = ({ data, setLoading }) => {
  const { user, userRefetch, setUserRefetch } = useContext(Authcontext)
  let { _id, courseName, seats, price, imgUrl, isntractor, email } = data
  const deleteThis = () => {
    let thisData = {
      email: user.email,
      id: _id
    }
    fetch('https://assignment-12-server-beta-tan.vercel.app/deletethis', {
      method: 'PATCH',
      headers: { 
        'content-type':'application/json',
        authorization: `bearer ${localStorage.getItem('fluent-verse')}` },
      body: JSON.stringify(thisData)
    }).then(res => res.json()).then(data => {
      setLoading(true)
      setUserRefetch(!userRefetch)
    })
  }
  return (
    <div className={`card card-compact w-96 bg-base-100 shadow-xl ${data?.avialable == false ? 'hidden' : 'visible'}`}>
      <figure><img src={imgUrl} alt={courseName} className="h-[220px] bg-gray-200 w-full object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title">{courseName}</h2>
        <p>{isntractor}</p>
        <p>{email}</p>
        <p className="text-green-600 capitalize">price: {price} seats: {seats}</p>
        <div className="card-actions justify-end">
          <button className={` btn btn-primary`}>Buy now</button>
          <button className={` btn btn-error`} onClick={deleteThis}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Myclassescart;