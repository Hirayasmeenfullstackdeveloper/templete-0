import { NextResponse } from "next/server";
import { productList } from "../../../../libs/db";

export const GET = async ()=>{
   return NextResponse.json({ data: productList},{status:200})
}
export const POST = async (resquest:Request)=>{
    const data = await resquest.json();
   console.log(data)
    return NextResponse.json({ data: productList},{status:200})
}
export const PATCH = async (resquest:Request)=>{
    const data = await resquest.json();
   console.log(data)
    return NextResponse.json({ data: productList},{status:200})
}
export const PUT = async (resquest:Request)=>{
    const data = await resquest.json();
   console.log(data)
    return NextResponse.json({ data: productList},{status:200})
}
export const DELET = async (resquest:Request)=>{
    const data = await resquest.json();
   console.log(data)
    return NextResponse.json({ data: productList},{status:200})
}