import { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Spell from "./Spell";

const Home = () => {
    
    const [datapage1,setDataPage1]=useState([])
    
    useEffect(()=>{
        fetch(`https://api.potterdb.com/v1/spells?page[number]=1`)
        .then(res=>res.json())
        .then(data=>setDataPage1(data.data))
        window.scrollTo(0,0)
    },[])
    console.log(datapage1,"data")
    const carouselData=datapage1.filter((item,index)=>{
       if (index<15){
        return item
       }
        
    })
  return (
    <div className="py-10">
      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      showIndicators={true}
      autoFocus={true}
      >
        {carouselData.map((spell)=>{
            return(
                <Link style={{textDecoration:"none",color:"white"}} to={`/spell/${spell.id}`} key={spell.id}>
                    <div className="h-carousel">
                        <img className="block m-auto w-full" src={spell.attributes.image} alt={spell.attributes.name}/>
                    </div>
                    <div className=" absolute p-20 bottom-0  flex flex-col w-full justify-end items-start bg-gradient-to-t from-black to-transparent opacity-100 hover:opacity-100">
                        <div className="font-black text-6xl mb-1.5 text-left">{spell.attributes.name ? spell.attributes.name: "Potter"}</div>
                            <div className="text-3xl mb-4">
                                {spell.attributes.category ? spell.attributes.category : "Harry Potter"}
                                    <span className="mb-20">
                                        {spell ? spell.attributes.creator :"J. K. Rowling"}
                                    </span>
                            </div>
                        <div className="italic text-base mb-1 flex text-left w-2/4">{spell.attributes.effect ? spell.attributes.effect : "Effect"}</div>
                    </div>
                </Link>
            )
           
        })}
      </Carousel>
      <Spell data={datapage1}/>
    </div>
  )
}

export default Home;
