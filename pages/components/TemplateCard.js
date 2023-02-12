import Image from "next/image"
import Link from "next/link"
const TemplateCard = ({image})=>{
   return(
    <div className="hover:opacity-95 hover:brightness-50 border border-black border-l-2 rounded-lg border-b-4">
    <Image
    className="rounded-lg"
    src={`/${image}`}
    width={600}
    height={600}
    />
 </div>
   )
}

export default TemplateCard