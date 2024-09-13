import hand_icon from "../../asset/hand_icon.png"
import arrow from "../../asset/arrow.png"
import ladies from "../../asset/hero_image.png"
const Hero = () => {

    return ( 


        <div className="h-[90vh] bg-hero-gradient flex gap-40 pl-5 pt-20">
      

         <div className="flex flex-col p-14">
            <h1 className="font-bold ml-[12px]">NEW ARRIVELS ONLY</h1>
            <div className="flex items-center gap-4">
                <h2 className="text-8xl font-semibold">new</h2>
                <img className="w-[100px] h-[60px]" src={hand_icon} alt="" />
            </div>

            <h2 className=" leading-normal text-8xl font-semibold">Collections</h2>
            <h2 className="text-8xl font-semibold">Foreveryone</h2>
         
         <div className="flex  items-center gap-2 bg-red-400 hover:bg-red-500 w-[200px] h-[30px] mt-[20px] rounded-lg  pl-[23px]">
            <div>LatestCollection</div>
            <img src={arrow} alt="" />
         </div>

</div>


<div className="">
    <img className="h-[560px]"src={ladies} alt="" />
</div>

        </div>





    );
}
 
export default Hero;