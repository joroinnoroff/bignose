import Image from "next/image";

export default function Producers() {
  return (
    <div className="text-white">

    <select className="text-black p-3 rounded-md">
      <option>Can Rafols dels Caus</option>
      <option>Mas Oller</option>
      <option>Mas Comtal</option>
      <option>Mas vida</option>
      <option>Vins de Taller</option>
      <option>Mas Llunes</option>
      <option>Homborsund Bryggeri - BIGNOSE Cider</option>
    </select>

      <h4>Produsenter og informasjon om dem kommer her</h4>

      <div className="h-[500px]">
        <Image src={"/images/spainwineyard.png"} className="object-contain rounded-md lg:w-[1200px]" width={1900} height={400}/>
      </div>
    </div>
  )
}