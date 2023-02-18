import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../src/firebase'
import '../src/assets/Styles.scss'


const Dashboard = () => {

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              // console.log("uid", uid)
              console.log(user)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])

  return (
    <section className='dashboard'>
      <p>Dashboard</p>

    </section>
  )
}

export default Dashboard