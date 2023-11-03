import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export async function POST(req) {
    try {

        // Connect to DB
        await connectDB()
        const {email , password} = await req.json();

        // check valid data
        if(!email , !password) {
            return NextResponse.json({error : "لطفا اطلاعات معتبر وارد کنید !"}, {status : 422})
        }

        // Exist Data
        const existingUser = await User.findOne({email});

        if(existingUser) {return NextResponse.json({error : "این حساب کاربری وجود دارد !"}, {status : 422})}

        // HashPassword
        const hashedPassword = await hashPassword(password);

        // Create New user
        const newUser = await User.create({
            email : email,
            password : hashedPassword
        })
        console.log("Success To Create User ✅")

        return NextResponse.json({message : "حساب کاربری ایجاد شد !"} , {status : 201 })

    } catch (err) {NextResponse.json({error : "مشکلی در سرور رخ داده است !"} , {status : 500})}



}