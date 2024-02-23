import products from '../common/products.json'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Products() {

  // Function to determine color based on index
function getColor(index) {
  switch (index % 3) {
    case 0:
      return 'red';
    case 1:
      return '#4595C1';
    case 2:
      return '#E03F4C';
    default:
      return 'black';
  }
}
const transition = { duration: 0.8, ease: "easeInOut" };
  return(
    <div className='flex flex-col lg:flex-row items-center justify-center'>
                       
                         <motion.div
                         className='flex flex-col lg:flex-row'
                                       animate={{ x: 0, opacity: 1 }}
                                       transition={transition}
                                       initial={{ x: 0, opacity: 0 }}>
                              {products.map((product, index) => ( // Added index as the second argument
                                 <Link href={product.href} target="_blank">
                                   <div key={product.productId} className="flex">
                                     <div className='text-center'>
                                       <div className=''>
                                         <h6 className='text-white text-2xl absolute mb-10 ml-12'>{product.productName}</h6>
                                         <h5 className='text-5xl p-5 Product' id='Products' style={{ color: getColor(index) }}>{product.productDescription}</h5>
                                       </div>
                                       <p className='text-white'>{product.productBlend}</p>
                                       <p className='text-gray-400'>{product.year}</p>
                                       <h6 className='text-yellow-500'>{product.aboveProducer}</h6>
                                       <p className='text-white uppercase'>{product.producer}</p>
                                     </div>
                                     <Image
                                       src={product.productImage}
                                       alt={product.productName}
                                       width={200} // Set width of the image
                                       height={200} // Set height of the image
                                       className="hover:scale-110 transition-all"
                                     />
                                   </div>
                                 </Link>
                               ))}
                               </motion.div>
                   
    </div>
  )
}