
// import React from 'react';
// import type { Member } from '../data/committees';
// import { FaLinkedin } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

// type MemberCardProps = Member;

// const MemberCard = ({ image, name, designation, linkedin,email, portfolio }: MemberCardProps) => {
//   return (
//     <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500/10">
//       <div className="aspect-w-1 aspect-h-1">
//         <img src={image} alt={name} className="w-full h-full object-cover" />
//       </div>
//       <div className="p-2.5 sm:p-3">
//         <h3 className="text-base sm:text-lg font-semibold text-white truncate leading-snug">
//           {name}
//         </h3>
//         <p className="text-xs sm:text-sm text-purple-200/70 truncate leading-relaxed">
//           {designation}
//         </p>

//         {/* Social Links & Know More Button in One Row */}
//         <div className="flex items-center justify-between mt-3">
//           {/* Icons aligned in a row */}
//           <div className="flex gap-3">
//             {linkedin && (
//               <a
//                 href={linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:scale-110 transition"
//               >
//                 <FaLinkedin className="h-6 w-6" />
//               </a>
//             )}
//             {email && (
//           <a
//            href={`mailto:${email}`}
//             target="_blank"
//            rel="noopener noreferrer"
//            className="text-green-400 hover:scale-110 transition"
//            >
//          <MdEmail className="h-6 w-6" />
//          </a>
//             )}
//           </div>

//           {/* "Know More" Button */}
//           {portfolio && (
//             <a
//               href={portfolio}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-600 transition"
//             >
//               Know More
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemberCard;
import React from 'react';
import type { Member } from '../data/committees';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

type MemberCardProps = Member;

const MemberCard = ({ image, name, designation, linkedin, email, portfolio }: MemberCardProps) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500/10 min-h-[250px] flex flex-col">
      {/* Image Container with Fixed Size */}
      <div className="w-full h-100 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white truncate leading-snug">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-purple-200/70 truncate leading-relaxed">
            {designation}
          </p>
        </div>

        {/* Social Links & Know More Button in One Row */}
        <div className="flex items-center justify-between w-full  mt-3">
          {/* Icons aligned in a row */}
          <div className="flex items-center  gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin className="h-6 w-6 mb-1" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                rel="noopener noreferrer"
                className="text-green-400 hover:scale-110 transition"
              >
                <MdEmail className="h-8 w-7 mr-2 mb-1" />
              </a>
            )}
          </div>

          {/* "Know More" Button */}
          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white px-2 py-1   mb-1 rounded-lg text-sm block  hover:bg-purple-600 transition"
            >
              Know More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
