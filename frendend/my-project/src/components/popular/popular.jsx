import data_product from "../../asset/data.js"
import Items from "../items/items";

const Popular = () => {
    return ( 
         
        <div className="flex flex-col justify-center items-center">
            <div className=""><h1 className="text-5xl ">POPULAR IN WOMEN</h1>
            <hr className=" w-[100px] h-[6px] bg-black ml-[182px] mt-[15px]" />
            </div>
            <div className="flex gap-10 mt-[26px]">
                {data_product.map((items)=>{
                    return(
                        <Items key={items.id} image={items.image} name={items.name} new_price={items.new_price} old_price={items.old_price} />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Popular;