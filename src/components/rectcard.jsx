import React from "react";

export default function RectCard ({
    tittle,
    description,
    price,
    image
}){
    return(
        <>
        <div className="flex  md:flex-row flex-col  md:px-[100px]">
            <div className="md:w-2/5 ">
                <img src={image} alt="" className="md:h-full w-2/3 shadow-inner" />
            </div>
            <div className="md:w-2/4">
                <h2 className="md:text-4xl font-bold text-black ">{tittle}</h2>
                <p className="md:text-lg text-sm text-black md:m-3">{description}</p>
            </div>
            <div className="md:w-1/5 flex justify-end ">
                <button className="pl-8 text-3xl text-black font-bold">${price}</button>
            </div>
            <hr  className="text-lg"/>
        </div>
       
        </>
    );
}