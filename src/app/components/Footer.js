import { MapPin, Phone } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  return (
    <div className="p-20 mt-[30rem] md:mt-52 w-full h-full flex flex-col items-center">
      <Image src={"/images/homblogo.png"} height={100} width={100} alt="homborsund bryggeri" className="mb-10"/>
        <div className="flex flex-col  justify-center gap-2 text-white">
          <small className="flex items-center gap-2"><MapPin/>Tøyen bekken 24 </small>
          <small className="flex items-center gap-2 p-"><Phone />+47 000 00 000 </small>
        </div>



    </div>
  )
}