import React from "react";
import { motion } from "framer-motion";


export const Card = () => {
    return (
        <>
         <section className=" mt-6 mx-auto px-auto flex justify-center gap-[120px] font-['Quick_Peachy'] ">
            
            <div className="bg-[#005C78] text-white w-[200px] h-[400px] p-5">
                <div className="w-[140px] h-[140px] mx-auto"> 
                <img src="./image 2.png" alt="" srcset="" />
        
                </div>
                
                <hr className="mt-8 border-t-2" />
                <div className="text-[22px] mt-6">
                    Let's create your perfect website, but first...
                </div>
                <button className="bg-[#01242e] px-4 py-2 my-5 rounded-lg">Watch this</button>
            </div>
            <div className="bg-[#E88D67] text-white w-[200px] h-[400px] p-5">
                <div className="w-[140px] h-[140px] bg-blue-400 mx-auto">
                <img src="./image 2.png" alt="" srcset="" /> </div>
                
                <hr className="mt-8 border-t-2" />
                <div className="text-[22px] mt-6">
                    Let's create your best video, but first...
                </div>
                <button className="bg-[#814125] px-4 py-2 my-5 rounded-lg">Watch this</button>
            </div>
            <div className="bg-black text-white w-[200px] h-[400px] p-5">
                <div className="w-[140px] h-[140px] mx-auto">
                <img src="./image 2.png" alt="" srcset="" /> </div>
                
                <hr className="mt-8 border-t-2" />
                <div className="text-[22px] mt-6">
                    Let's create your best 3D model, but first...
                </div>
                <button className="bg-[#01242e] px-4 py-2 my-5 rounded-lg">Watch this</button>
            </div>





















        </section> 




        </>
    )
}