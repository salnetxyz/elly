import Image from "next/image"
import Link from "next/link"
const TemplateCard = ({image, name})=>{
   return(
    <div className="hover:opacity-95 hover:brightness-50">
    <div className="rounded-lg  border border-black border-l-2 rounded-lg border-b-4">
    <Image
    src={`/${image}`}
    width={600}
    height={600}
    />
    <p className="py-8 brightness-125 shadow-xl bg-white text-sky-600 opacity-95 text-center">{name}</p>
   </div>
 </div>
   )
}

export default TemplateCard