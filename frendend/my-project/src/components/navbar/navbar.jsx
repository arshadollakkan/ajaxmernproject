import logo from "../../asset/logo.png"
import carticon from "../../asset/cart_icon.png"
import { useState } from "react"
import { Link } from "react-router-dom"
const Nabarv = () => {
    let styles={
        Button1:"w-[50px] h-[5px] bg-red-600"
    }
    let[data,setdata]=useState("")
    return (  
        <nav className="width-full-screen-lg bg-white border-b border-gray-400">
            <div className="flex flex-wrap justify-between p-3 items-center"> 
               <div className="flex items-center gap-8">
               <img src={logo} alt="" />
               <h1 className="mt-[18px] font-sans font-semibold text-[34px] ">Shopper</h1>
               </div>
               <div>
                <ul className="flex items-center mt-5 cursor-pointer justify-around w-[300px]">
                    <li className="text-center pt-[3px]"  onClick={()=>{setdata("shop")}}><Link to="/">SHOP</Link>{data==="shop"?<hr className={styles.Button1} />:""} </li>
                    <li className="text-center pt-[3px]"  onClick={()=>{setdata("men")}}><Link to="/mens">MEN </Link>{data==="men"?<hr className={styles.Button1} />:""} </li>
                    <li className="text-center pt-[3px]" onClick={()=>{setdata("women")}}><Link to="/womens">WOMEN</Link> {data==="women"?<hr className={styles.Button1} />:""} </li>
                    <li className="text-center pt-[3px]" onClick={()=>{setdata("kids")}}><Link to="/kids">KIDS</Link> {data==="kids"?<hr className={styles.Button1} />:""} </li>
                </ul>
               </div>
               <div className="flex gap-4 items-center mr-8 mt-6 relative">
                <Link to='/login' className="px-[30px] py-[10px] border border-solid border-black rounded-[34px] hover:bg-black hover:text-white">Login</Link>
               <Link to='/cart'> <img  src={carticon} alt="" /></Link>
                <span className="w-[22px] h-[22px] bg-red-400 rounded-[11px] text-center flex justify-center items-center absolute top-[0px] left-[144px] ">0</span>
               </div>
            </div>
        </nav>
    );
}
 
export default Nabarv;