import React from "react";

export default function Card({
    tittle,
    image,
    description,
    price
}){

    return(
        <>
        <div className="md:h-[auto] md:w-[350px] h-[200px] w-[170px] bg-gray-100 rounded-md flex flex-col p-2 m-2">
            <div>
                <img src={image} alt={tittle} className="md:h-[250px] w-full h-[100px] " />
            </div>
            <div className="flex  flex-col w-full">
                <h3 className="md:text-lg font-bold">{tittle}</h3>
                <p className="text-sm">{description}</p> 
                
                    
            </div>
            <div className="flex w-full justify-between p-2">
                <button className="bg-orange-500 md:p-2 p-1 md:w-1/3 rounded-md">purchase</button>
                <p className="text-black font-semibold md:text-lg text-right p-1 ">${price}</p>
            </div>
        </div>
        </>
    );
}