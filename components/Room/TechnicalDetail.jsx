import React, { useState } from 'react';

const TechnicalDetail = ({ data }) => {
    const [droppeddown, setDroppedDown] = useState(false);
    const handleDropDown = ()=>{
        setDroppedDown(!droppeddown);
    }
  return (
    <div className="w-full my-4">
      <h3 className="text-[#222222] text-[20px] font-medium" onClick={handleDropDown}>Technical Details</h3>
      
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
