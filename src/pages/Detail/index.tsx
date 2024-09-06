import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import api, { getShoe } from "../../api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Shoe } from "../../types";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";
import xss from "xss";

const Detail = () => {
  const {id}=useParams();
 const{isLoading,error,data}= useQuery<Shoe>({
    queryKey:["shoe"],
    queryFn:()=>getShoe(id as string)
  })
  return (
    <div className="mt-8">
      {isLoading?(
        <Loader/>
      ): error ? (<Error/>):(data &&(
       <section className="grid grid_cols md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] h-fit">
          {data.picture.map((url,i)=>(<img key={i} src={url}/>))}
        </div>
        <div className="flex flex-col gap-8">
          <Head data={data}/>
          <Color data={data.color}/>
          <Size data={data.size}/>
          <p>
            <h2>Bu Ürün Hakkında </h2>
            <p
                  className="font-open my-4"
                  dangerouslySetInnerHTML={{
                    __html: xss(data.description),
                  }}
                />
          </p>
        </div>
      </section>))}
    </div>
  )
}

export default Detail