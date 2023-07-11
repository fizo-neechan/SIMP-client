import React, { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const scehma = z.object({
    email: z.string().email(),
    password: z.string(),
});

const Login = () => {
    
    const {register, control, handleSubmit, formState} = useForm({resolver: zodResolver(scehma)});
    const {errors} = formState;
    const navigate = useNavigate();

    const handleCustomSubmit = (vals) => {
        
        axios.post("/login", {
            authorization: {
                email_id: vals.email,
                password: vals.password,
            }
        }).then((response) => {
            toast.success("Successfully Logged In");
            Cookies.set("auth_token", response.data.token, {expires: response.data.expires});
            navigate('/')
        }).catch(err => {
            toast.error(err?.response?.data);
            console.log(err);
        })
    }

    useEffect(() => {
        if(Cookies.get("auth_token")) {
            navigate('/');
        }
    }, [])


  return (
    <>
        <form id="signup-form" className="signup-form my-form-class" onSubmit={handleSubmit(handleCustomSubmit)}>
            <h2 className="form-title">Enter Credentials</h2>
            <div className="form-group">
                <input {...register('email')} className="form-input" placeholder="Email"/>
                <div className="form-error">{errors.email?.message}</div>
            </div>
            <div className="form-group">
                <input type="password" className="form-input" {...register('password')} placeholder="Password"/>
                <div className="form-error">{errors.password?.message}</div>
            </div>
            <div className="form-group">
                <button type="submit" className='form-submit'>Login</button>
            </div>
        </form>
        <p className="loginhere">
            Don't have an account ? <a href="/register" className="loginhere-link">Sign Up here</a>
        </p>
    </>
  )
}

export default Login
