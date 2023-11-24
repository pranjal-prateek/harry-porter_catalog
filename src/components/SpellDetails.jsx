import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { logo, detailLogo } from "../assets"
import { Button } from '@mui/material';
const SpellDetails = () => {
    const [currentSpellDetails, setCurrentSpellDetails] = useState({})
    const { id } = useParams()

    
    useEffect(()=>{
        fetch(`https://api.potterdb.com/v1/spells/${id}`)
        .then(res=>res.json())
        .then(data=>setCurrentSpellDetails(data.data))
        window.scrollTo(0,0)
    },[])
   

    return (
        <div className="w-full  relative flex flex-col items-center">
            <div className="w-10/12">
                <img className=" w-full  h-carddetails object-cover object-center-bottom" src={detailLogo} alt={currentSpellDetails.attributes?.name}/>
            </div>
            <div className=" items-center w-9/12 flex relative bottom-56 ">
                <div className="mr-8">
                    <div>
                        <img className="w-300 h-400 rounded-cardradius shadow-xl" src={currentSpellDetails?currentSpellDetails.attributes?.image:logo} alt={currentSpellDetails.attributes?.name} />
                    </div>
                    <div className="mt-4">
                    <a href={currentSpellDetails.attributes?.wiki} rel="noreferrer" target="_blank" style={{textDecoration: "none"}}>
                        <Button  variant="outlined">WIKI</Button>
                    </a>
                    </div>
                </div>
                <div className="text-white flex flex-col h-320 justify-between">
                    <div className="mb-2 drop-shadow-lg">
                        <div className="font-semibold text-3xl sm:5xl">{currentSpellDetails ? currentSpellDetails.attributes?.name : ""}</div>
                        <div>{currentSpellDetails ? currentSpellDetails.attributes?.category : ""}</div>
                        <div>{currentSpellDetails ? currentSpellDetails.attributes?.creator:""}</div>
                        <div>{currentSpellDetails ? currentSpellDetails.attributes?.light: ""}</div>
                        <div>{currentSpellDetails ? currentSpellDetails.attributes?.effect : ""}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpellDetails
