import { colors } from "../../utils/constans"
const Color = ({data}:{data:string}) => {
   const arr= data.split(",")
  return (
    <div>
        <h2 className="mb-3">Renkler</h2>
        <div className="flex gap-4">
     {arr.map((item)=>
      { 
        //id den yola çıkarak renk kodunu bulur
      const color=colors.find((i)=>i.id===item)
        return <div style={{background:color?.code || "gray"}}
      className="h-8 w-8 rounded-full cursor-pointer"/>}
     )}
        </div>
    </div>
  )
}

export default Color