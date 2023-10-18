/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../private/provider/Provider";

const SingleClass = ({ data }) => {
  const { userRole, user, userRefetch, setUserRefetch } = useContext(Authcontext)
  let [added, setAdded] = useState(false)

  let { _id, courseName, seats, price, imgUrl, isntractor, email } = data
  const addToCart = () => {
    setAdded(true)
    const cartBody = {
      email: user.email,
      id: _id
    }
    fetch('https://assignment-12-server-beta-tan.vercel.app/addmyclasses', {
      method: 'PATCH',
      headers: { 
        'content-type':'application/json',
        authorization: `bearer ${localStorage.getItem('fluent-verse')}` },
      body: JSON.stringify(cartBody)
    }).then(res => res.json()).then(data => {
      if (data.modifiedCount > 0) {
        setUserRefetch(!userRefetch)
      }
    })

  }
  useEffect(() => {
    let cart = userRole?.cart || [];
    cart.forEach(element => {
      console.log(element)
      if (element == _id) {
        setAdded(true)
      }
    });
    if (userRole?.role == 'isntaractor' || userRole?.role == 'admin') {
      setAdded(true)
    }
  }, [userRole?.cart, _id, userRole?.role])
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={imgUrl} alt={courseName} className="h-[220px] bg-gray-200 w-full object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title">{courseName}</h2>
        <p>Instractor: <span className="font-semibold">{isntractor}</span></p>
        <p>Email: {email}</p>
        <p className="text-red-600 capitalize">price: {price} seats: {seats}</p>
        <div className="card-actions justify-end">
          <button className={` btn btn-error  ${added == true ? 'btn-disabled' : 'btn-primary'}`} onClick={addToCart}>Unavailable</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;