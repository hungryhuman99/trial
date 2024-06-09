import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Portfolio = () => {
    return (
        <>
        <div className="max-w-[1320px]">

       
        <h1 className="font-bold text-center m-5 py-auto">Tools</h1>
            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-1 gap-9">
                
                
                <div className="w-20 h-20 aspect-square rounded-lg bg-slate-600 m-12"></div>
                <div className="w-20 h-20 bg-slate-600 m-12"></div>
                <div className="w-20 h-20 bg-slate-600 m-12"></div>
            
            </div>
            </div>
        </>
    )
}

