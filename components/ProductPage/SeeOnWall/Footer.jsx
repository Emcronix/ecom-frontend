// import React from "react";
// // import Link from "next/link";
// import Image from "next/image";

// function Footer() {
//   return (
//     <div className="w-full flex justify-between p-8">
//       <div className="">
//         <Image
//           src="/icons/uparrow.svg"
//           alt="Download"
//           width={25}
//           height={25}
//           className=""
//         />
//       </div>
//       <div className="flex gap-2 bg-black p-2 rounded-full">
//         <Image
//           src="/icons/half black half white.svg"
//           alt="Download"
//           width={25}
//           height={25}
//           className="text-white"
//         />
//         <p className="text-white p-2 py-1">Compare</p>
//       </div>
//       <div className="h-12 flex items-center justify-center w-12 bg-white rounded-full">
//         <Image
//           src="/images/customer-service.png"
//           alt="Download"
//           width={35}
//           height={35}
//           className=""
//         />
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import Image from "next/image";

function Footer({ handleCompareClick }) {
  return (
    <div className="w-full flex justify-between p-8">
      <div className="">
        <Image
          src="/icons/uparrow.svg"
          alt="Download"
          width={25}
          height={25}
          className=""
        />
      </div>
      <div
        className="flex gap-2 bg-black p-2 rounded-full cursor-pointer"
        onClick={handleCompareClick}
      >
        <Image
          src="/icons/half black half white.svg"
          alt="Download"
          width={25}
          height={25}
          className="text-white"
        />
        <p className="text-white p-2 py-1">Compare</p>
      </div>
      <div className="h-12 flex items-center justify-center w-12 bg-white rounded-full">
        <Image
          src="/images/customer-service.png"
          alt="Download"
          width={35}
          height={35}
          className=""
        />
      </div>
    </div>
  );
}

export default Footer;
