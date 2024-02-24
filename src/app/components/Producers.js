import Image from "next/image";

export default function Producers() {
  return (
    <div className="text-white">

    <select className="text-black md:p-3 rounded-md w-full md:w-fit">
      <option>Homborsund Bryggeri - BIGNOSE Cider</option>
      <option>Can Rafols dels Caus</option>
      <option>Mas Oller</option>
      <option>Mas Comtal</option>
      <option>Mas vida</option>
      <option>Vins de Taller</option>
      <option>Mas Llunes</option>
    </select>

      <h4 className="mt-5">Produsenter og informasjon om dem kommer her</h4>
       <p className="text-lg mt-5 font-thin md:w-3/5"> BIGNOSE CIDER er et samarbeid mellom våre venner fra Homborsund Bryggeri og oss. Sideren er produsert på håndplukkede hageepler fra østlandet og er helt ufiltrert. En naturlig og forfriskende smaksopplevelse som passer til enhver anledning. Sideren selges foreløpig kun på keykeg (20L) til horeca og er et like godt tilskudd på barer som på restauranter. Serveres i vinglass eller siderglass, med eller uten is! <span className="font-bold">For kjøp, ta direkte kontakt med Alf på tlf: 906 86 541 eller mail: alf.olav@homborsundbryggeri.no.</span></p>
              
          
      <div className="h-[500px] mt-10">
        <Image src={"/images/spainwineyard.png"} className="object-contain rounded-md lg:w-[1200px]" width={1900} height={400}/>
      </div>
    </div>
  )
}