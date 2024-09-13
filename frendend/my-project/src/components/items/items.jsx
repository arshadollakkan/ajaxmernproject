const Items = (props) => {
    return ( 
        <div className="flex flex-col gap-1  p-2 w-[300px] hover:scale-[1.1] duration-300">
           <div>
            <img className="rounded-t-[10px] opacity-80 hover:opacity-100 " src={props.image} alt="" />
           </div>
           <div>
            <p className="mt-[5px] font-thin pl-[12px]">{props.name}</p>
            <div className="flex gap-2 items-center
            justify-center mt-[5px]">
                <p className="bg-green-300 hover:bg-green-500 p-[4px] rounded  text-[#FFFFFF]">${props.new_price}</p>
                <p className=" bg-red-300 hover:bg-red-500 p-[4px] rounded line-through text-[#FFFFFF]">${props.old_price}</p>
            </div>
           </div>
        </div>
     );
}
 
export default Items;