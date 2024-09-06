import { useSearchParams } from "react-router-dom"
import { FilterProps } from "./Size"
import { useEffect } from "react"
import { colors } from "../../utils/constans"

const Color = ({selected,setSelected}:FilterProps) => {
  const [params,setParams]=useSearchParams()
  //state her değiştiğinde urldeki parametreleri güncelle
useEffect(()=>{
  if(selected.length>0){
params.set("color", selected.join(","))
setParams(params)
  }else{
    params.delete("color")
    setParams(params)
  }
  //seçili eleman varsa aralarına , koy url ekle ,yoksa urldeki parametreyi kaldır
},[selected])
const toggle=(color:string)=>{
 
const found=selected.includes(color)
if (!found){
  setSelected([...selected,color])
}else{
  setSelected(selected.filter((i)=>i!==color))
}
}

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4">Renkler</h2>
      <div className="grid grid-cols-5 gap-4">
        {colors.map(color=>{
          const found=selected.includes(color.id);
        return (
         <div onClick={()=>toggle(color.id)}
         style={{background:color.code}}
         className={`py-2 px-4 rounded-md cursor-pointer transition
         hover:bg-zinc-500 text-transparent select-none
        ${found ? "ring-[4px]":""} `}>
          .
         </div>
        )
      })}</div>
    </div>
  )
}
export default Color