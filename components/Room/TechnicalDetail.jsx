import React, { useState } from 'react';
import Image from "next/image";


const TechnicalDetail = ({ data }) => {
    const [droppeddown, setDroppedDown] = useState(false);
    const handleDropDown = ()=>{
        setDroppedDown(!droppeddown);
    }
  return (
    <div className="w-full my-4">
      <div className='flex justify-between' onClick={handleDropDown}>
        <h3 className="text-[#222222] text-[20px] font-medium" >
        Technical Details
        </h3>
         <div className="pr-5">
                <Image
                  src="/icons/downarrow.svg"
                  alt="tick"
                  width={25}
                  height={25}
                  // className={`cursor-pointer transform transition-transform duration-300 ${
                  //   isDropdownOpen ? "rotate-180" : ""
                  // }`}
                />
            </div>
        </div>
      
      {droppeddown &&data?.technicalDetails && data.technicalDetails.length > 0 ? (
        
       <><table className="min-w-full table-auto border border-gray-300 mt-4">
       {/* <thead className="bg-gray-200">
         <tr>
           <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium">Name</th>
           <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium">Detail</th>
         </tr>
       </thead> */}
       <tbody>
         {data.technicalDetails.map((item, index) => (
           <tr key={index} className="odd:bg-white even:bg-gray-50 ">
             <td className="px-4 py-2 border border-gray-300 text-yellow-600">{item.name}</td>
             <td className="px-4 py-2 border border-gray-300 text-black">{item.Detail}</td>
           </tr>
         ))}
       </tbody>
     </table></> 
        
      ) : droppeddown &&  (
        <p className="text-gray-600">No technical details available.</p>
      )}
    </div>
  );
};

export default TechnicalDetail;
