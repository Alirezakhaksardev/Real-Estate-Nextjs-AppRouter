"use client"

import React, { useState } from 'react'
import styles from "@/template/SignupPage.module.css"
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ThreeDots } from  'react-loader-spinner'
import {signIn} from 'next-auth/react'

function SigninPage() {

    const [formData , setFormData] = useState({
        email : "",
        password : "",
    });
    
    const [loading , setLoading] = useState(false)

    const changHandler = e =>{
        const {name , value} = e.target
        setFormData({...formData , [name] : value})
    }

    const router = useRouter();
    const submitHandler = async (e) =>{
        e.preventDefault()

        setLoading(true)
        if(!formData.email || !formData.password){
            toast.error("لطفا تمامی فیلد ها را پر کنید !");
            setLoading(false)
            return;
        }

        const {email , password} = formData;

        const res = await signIn("credentials" , {
            email,
            password,
            redirect : false
        })
        if(res.error){
            toast.error(res.error);
            setLoading(false);
        }else{
            router.replace('/')
        }
    }

    return (
        <div className={styles.form}>
            <h4>فرم ورود</h4>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">ایمیل :</label>
                <input type='text' id='email' name='email' value={formData.email} onChange={changHandler} />
                
                <label htmlFor="password">رمز عبور :</label>
                <input type='password' id='password' name='password' value={formData.password} onChange={changHandler} />
                
                {!loading && <button type='submit'>ورود</button>}
                <ThreeDots 
                    height="40" 
                    width="40" 
                    radius="9"
                    color="#304ffe" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{margin : "auto"}}
                    wrapperClassName=""
                    visible={loading}
                />
            </form>
            <p>حساب کاربری ندارید ؟
                <Link href='/signup'>ثبت نام</Link>
            </p>
            <Toaster/>
        </div>
    )
}

export default SigninPage