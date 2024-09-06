import { useSearchParams } from "react-router-dom"
import { FilterProps } from "./Size"
import { useEffect } from "react"

const Gender = ({selected,setSelected}:FilterProps) => {
  const [params,setParams]=useSearchParams()
  //state her değiştiğinde urldeki parametreleri güncelle
useEffect(()=>{
  if(selected.length>0){
params.set("gender", selected.join(","))
setParams(params)
  }else{
    params.delete("gender")
    setParams(params)
  }
  //seçili eleman varsa aralarına , koy url ekle ,yoksa urldeki parametreyi kaldır
},[selected])
//seçilen numara state de varsa kaldır yoksa ekle
const toggle=(gender:string)=>{
  //numara seçilimi?
const found=selected.includes(gender)
if (!found){
  setSelected([...selected,gender])
}else{
  setSelected(selected.filter((i)=>i!==gender))
}
}

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4">Cinsiyet</h2>
      <div className="flex items-center gap-4">
        <input checked={selected.includes("men")}
        onChange={()=>toggle("men")}
         id="men" type="checkbox" />
        <label htmlFor="men" className="select-none">Erkek</label>
</div>
<div className="flex items-center gap-4">
        <input checked={selected.includes("women")}
        onChange={()=>toggle("women")}
         id="women" type="checkbox" />
        <label htmlFor="women" className="select-none">Bayan</label>
</div>
    </div>
  )
}

export default Gender