/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import "react-loading-skeleton/dist/skeleton.css";
const Card = ({spell}) => {
    const [loading,setIsLoading]=useState(true)
   useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 6000);
   },[])
  return (
    <div>
    {   loading
        ?
        <div className=' inline-block relative rounded-cardradius overflow-hidden ml-0.5 cursor-pointer min-w-card h-card z-0 border-1 border-solid border-cardborder'>
              <SkeletonTheme baseColor="#000000" highlightColor="#36454F">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/spell/${spell.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className=' inline-block transition transform delay-150 relative rounded-cardradius overflow-hidden ml-0.5 cursor-pointer min-w-card h-card z-0 border-1 border-solid border-cardborder hover:scale-125 hover:z-100 hover:shadow-xl'>
                <img className="h-full w-52 "  src={spell.attributes.image?spell.attributes.image:logo} alt={spell.attributes.name}/>
                <div className=" absolute px-4 pt-0 py-4 bottom-0 h-cardOverlay flex flex-col w-full justify-end bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100">
                    <div className="font-black text-sm mb-2">{spell.attributes.name?spell.attributes.name:"Potter"}</div>
                    <div className="text-xs mb-1">
                        {spell.attributes.category?spell.attributes.category:"Harry Potter"}
                        <span className=" float-right">{spell?spell.attributes.creator:"J. K. Rowling"}</span>
                    </div>
                    <div className=" italic text-xs mb-1">{spell.attributes.effect ? spell.attributes.effect.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </div>
  )
}

export default Card
