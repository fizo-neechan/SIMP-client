import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { string, z } from 'zod'

import './signUp.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const schema = z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must contain atleast 8 characters"}).max(16, {message: "Password must have a maximum length of 16 characters"}),
    confirmPassword: z.string(),
    agreeterms: z.boolean()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }).refine((data) => data.agreeterms === true, {
    message: "You must agree to our terms to register",
    path: ["agreeterms"]
  })

const SignUp = () => {
        
    const navigate = useNavigate();

    const {register, control, handleSubmit, formState} = useForm({resolver: zodResolver(schema)})
    const {errors} = formState;

    const handleCustomSubmit = (vals) => {
        
        axios.post('/register', {
            details: {
                name: vals.name,
                email: vals.email,
                password: vals.password
            }
        }).then( (response) => {
            toast.success("Registered Successfully")
            console.log(response)
        })
        .catch( (err) => {
            toast.error(err?.response?.data);
            console.log(err)
        });
    }


    useEffect(() => {
        if(Cookies.get("auth_token")) {
            navigate('/');
        }
    }, [])

  return (
    <>
        <form className="signup-form" onSubmit={handleSubmit(handleCustomSubmit)}>
            <h2 className="form-title">Create account</h2>
            <div className="form-group">
                <input type='text' placeholder='Name' className="form-input" {...register('name')} />
                <div className="form-error">{errors.name?.message}</div>
            </div>
            <div className="form-group">
                <input type='email' placeholder='Email' className="form-input" {...register('email')}/>
                <div className="form-error">{errors.email?.message}</div>
            </div>
            <div className="form-group">
                <input type='password' placeholder='Password' className="form-input" {...register('password')}/>
                <div className="form-error">{errors.password?.message}</div>
                <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
            </div>
            <div className="form-group">
                <input type='password' placeholder='Confirm Password' className="form-input" {...register('confirmPassword')}/>
                <div className="form-error">{errors.confirmPassword?.message}</div>
            </div>
            <div className="form-group">
                <div className="form-error">{errors.agreeterms?.message}</div>
                <input type="checkbox" id='agreeterms' {...register('agreeterms')} className="agree-term" />
                <label for="agreeterms" className="label-agree-term"><span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
            </div>
            <div className="form-group">
                <button className="form-submit">Sign Up</button>
            </div>
        </form>
        <p className="loginhere">
            Already have an account ? <a href="/login" className="loginhere-link">Login here</a>
        </p>
    </>
  )
}

export default SignUp
