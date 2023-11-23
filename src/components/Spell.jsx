import { useEffect, useState } from "react"
import Card from "./Card"


const Spell = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data.data))
    },[])

  return (
    <div>
       <div className=" pt-0 px-12 pb-12 ">
            <div className=" flex flex-wrap justify-center">
                {
                    data.map(spell => (
                        <div key={spell.id} className="pl-1">
                        <Card spell={spell} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Spell
