import React,{useState} from "react";
import {toast, ToastContainer} from "react-toastify";
const InBuiltToast = () => {
    function toastExample(){
        toast.success("Login Successfull")
    }
    return (
        <>
        <button onClick={toastExample}>Login Toastify</button>
        <ToastContainer position="top-center" theme="dark" autoClose={3000} />
        </>
    )
}
export default InBuiltToast