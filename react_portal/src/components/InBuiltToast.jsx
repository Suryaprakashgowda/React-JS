import React,{useState} from "react";
import {toast, ToastContainer} from "react-toastify";
const InBuiltToast = () => {
    function toastExample(){
        toast.warn("Login Successfull")
    }
    return (
        <>
        <button onClick={toastExample}>Login Toastify</button>
        <ToastContainer position="top-center" theme="colored" autoClose={3000} />
        </>
    )
}
export default InBuiltToast