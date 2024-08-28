import React from "react";

export default function RectCard ({
    tittle,
    description,
    price,
    image
}){
    return(
        <>
        <div className="flex w-full flex-col md:flex-row md:px-[100px]">
            <div className="w-1/3 ">
                <img src={image} alt="" className="md:h-40 md:w-2/3 h-28 w-44 shadow-inner" />
            </div>
            <div className="md:w-2/3">
                <h2 className="md:text-4xl font-bold text-gray-500 ">{tittle}</h2>
                <p className=" text-gray-700 m-3 tracking-wide text-sm">{description}</p>
            </div>
            
            <hr  className="text-lg"/>
        </div>
       
        </>
    );
}