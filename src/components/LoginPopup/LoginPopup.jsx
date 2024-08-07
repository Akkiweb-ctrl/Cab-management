import React, { useState } from 'react'
import styles from './LoginPopup.module.css'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loggedIn } from '../../store/atoms/login';

const LoginPopup = ({setShowLogin,loginState, setLoginState}) => {
    const  setHasLoggedIn = useSetRecoilState(loggedIn)
    const handleOnClick = () =>{
        setShowLogin(false)
        setHasLoggedIn(true);
    }
  return (
    <div className={`h-full w-full flex justify-center items-center absolute z-10 ${styles["login-popup"]}`}>
        <form className='bg-white  p-8 w-1/4 border-1 rounded shadow-sm'>
        <div className=' flex justify-between mb-4 items-center'>
            <h3 className='text-lg font-bold'>{loginState?"Login":"Sign Up"} </h3>
            <p className='text-lg font-bold cursor-pointer'onClick={()=>{setShowLogin(false)}}><RxCross1 /></p>
        </div>
        {!loginState?
        <input className='w-full mb-4 p-2 border-2 border-gray-300 rounded' type="text" placeholder='Your Full Name' required/>:<></>}
        <input className='w-full mb-4 p-2 border-2 border-gray-300 rounded' type="text" placeholder='Your email' required/>
        <input className="w-full mb-4 p-2  border-2 border-gray-300 rounded"type="text" placeholder='Password' required/>
        <Link to={"/home"}><button type='button' className='p-2 border-1 rounded w-full bg-white font-bold border-black mb-4' onClick={handleOnClick}>{loginState?"Login":"Sign Up"}</button></Link>
        <div className="flex flex-col items-start mb-4">
            <input className='mb-1 cursor-pointer' type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <div className='flex justify-start gap-x-1'>
            <p>{loginState?"Create new account?":"Already have an account?"}</p>
            <p className='font-bold cursor-pointer' onClick={()=>setLoginState(!loginState)}>Click here</p>

        </div>

        </form>
    </div>
  )
}

export default LoginPopup
