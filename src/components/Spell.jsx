/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Card from "./Card"
import { Button } from '@mui/material';
import { Search,Cross } from "../assets";
import { BiChevronDown } from "react-icons/bi";

const Spell = ({data}) => {
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    const [totalData,setTotalData]=useState([])
    const [visibleSpells,setVisibleSpells]=useState([])
    const [datapage2,setDataPage2]=useState([])
    const [datapage3,setDataPage3]=useState([])
    const [datapage4,setDataPage4]=useState([])
    const [searchText,setSearchText]=useState("")
    const [pageNo,setPageNo] =useState(1)
    useEffect(()=>{
        fetch(`https://api.potterdb.com/v1/spells?page[number]=2`)
        .then(res=>res.json())
        .then(data=>setDataPage2(data.data))
        fetch(`https://api.potterdb.com/v1/spells?page[number]=3`)
        .then(res=>res.json())
        .then(data=>setDataPage3(data.data))
        fetch(`https://api.potterdb.com/v1/spells?page[number]=4`)
        .then(res=>res.json())
        .then(data=>setDataPage4(data.data))
        
    },[])
    useEffect(()=>{
        setTotalData(data.concat(datapage2).concat(datapage3).concat(datapage4))
    },[data,datapage2,datapage3,datapage4])
   const totalCategory=totalData.map((spell)=>{
        if (spell.attributes.category !=="" && spell.attributes.category!==null && spell.attributes.category!=='undefined'){
            return  Object.values(spell.attributes.category||"").join("")
        }
   })
const category=[...new Set(totalCategory)].filter(value=>Boolean(value))
useEffect(()=>{
    if (pageNo===1){
        setVisibleSpells(data);
    }else if(pageNo===2){
        setVisibleSpells(datapage2);
    }else if(pageNo===3){
        setVisibleSpells(datapage3)
    }else{
        setVisibleSpells(datapage4)
    }
  if(selected!==""){
    const selectedValue=totalData.filter((spell)=>{
        return Object.values(spell.attributes.category||{}).join("").toLowerCase().includes(selected.toLowerCase())
    })
    setVisibleSpells(selectedValue)
  }  
if(searchText!==""){
    const searchedValue=totalData.filter((spell)=>{
        return Object.values(spell.attributes.name).join("").toLowerCase().includes(searchText)
    })
    setVisibleSpells(searchedValue)
}
},[searchText,pageNo,data,datapage2,datapage3,datapage4,selected])

const clearFilters=()=>{
    setPageNo(1)
    setSearchText("")
    setSelected("")
}
  return (
    <div>
        <div className="flex flex-col sm:flex-row  gap-6 items-center  ">
        <div className="mb-6 mt-6 ml-16 relative flex items-center ">
            <img className="w-5 h-5 absolute ml-3" src={Search} alt={'search'}/>
            <input type="text" placeholder="Search Spell" className="px-3 pl-10 py-2 font-semibold placeholder-gray-300 bg-gray-900 rounded-2xl border-none ring-gray-400 focus:ring-gray-800 focus:ring-2"  value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <img className="w-5 h-5 absolute ml-3" src={Search} alt={'search'}/>
        </div>
        <div className="w-40 font-medium h-10 z-100 justify-center items-center mb-6 sm:mb-0 sm:w-72">

              <div
        onClick={() => setOpen(!open)}
        className={`bg-gray-900 w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Catagory"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
              </div>
            <ul
        className={`bg-gray-900 mt-2 overflow-y-auto z-100 ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        
        {category?.map((item) => (
          <li
            key={item}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
                item?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }`}
            onClick={() => {
              if (item.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item);
                setOpen(false);
              }
            }}
          >
            {item}
          </li>
        ))}
            </ul>
        </div>
        {(searchText!=="" || selected!=="")? <div>
        <img onClick={clearFilters} className="w-5 h-5  ml-3" src={Cross} alt={'cross'}/>
        </div>:null}
       
        </div>

       <div className=" pt-0 px-12 pb-12 ">
            <div className=" flex flex-wrap justify-center">
                {
                    visibleSpells.map(spell => ( 
                        <div key={spell.id} className="pl-1">
                        <Card spell={spell} />
                        </div>
                    ))
                }
            </div>
        </div>
        {(searchText==="" && selected==="")? <div className="px-16 flex gap-2 flex-col flex-wrap justify-center items-center sm:flex-row sm:gap-0  sm:justify-between ">
            <Button disabled={pageNo===1} onClick={()=>setPageNo(pageNo-1)} variant="outlined">Prev</Button>
            <div className="flex flex-row flex-wrap">
            <Button onClick={()=>setPageNo(1)} variant="outlined">1</Button>
            <Button onClick={()=>setPageNo(2)} variant="outlined">2</Button>
            <Button  onClick={()=>setPageNo(3)} variant="outlined">3</Button>
            <Button  onClick={()=>setPageNo(4)} variant="outlined">4</Button>
            </div>
            <Button disabled={pageNo===4} onClick={()=>pageNo+1} variant="outlined">Next</Button>
        </div>:null}
       
    </div>
  )
}

export default Spell
