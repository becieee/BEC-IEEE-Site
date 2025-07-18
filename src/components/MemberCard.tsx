import React from 'react';
import type { Member } from '../components/data/committees';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface MemberCardProps extends Member {
  className?: string;
}

// Add CSS for shimmer effect
const shimmerKeyframes = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const MemberCard = ({ image, name, designation, linkedin, email, portfolio }: MemberCardProps) => {
  return (
    <div className="w-full px-4 sm:w-[250px] mx-auto mb-6">
      <style>{shimmerKeyframes}</style>
      {/* Card Container */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-[1.05]">
        {/* Main Image */}
        <div className="relative w-full h-full">
          {/* Low-quality image placeholder */}
          <div 
            className="absolute inset-0 bg-gray-800 animate-pulse"
            style={{
              backgroundImage: 'linear-gradient(90deg, #2d3748 0px, #4a5568 50%, #2d3748 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite linear'
            }}
          />
          
          {/* Main image */}
          <img 
            src={image}
            alt={name}
            width={300}
            height={400}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center brightness-100 group-hover:brightness-110 transition-all duration-300 relative z-10"
            style={{
              contentVisibility: 'auto',
              viewTransitionName: `image-${name.replace(/\s+/g, '-').toLowerCase()}`,
              filter: 'contrast(1.2) brightness(0.95)'
            }}
            onLoad={(e) => {
              // Fade in effect when image loads
              e.currentTarget.style.opacity = '1';
            }}
          />
        </div>

        {/* Content Overlay - Always Visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-gray-900/5 to-transparent group-hover:from-gray-900/15 group-hover:via-gray-900/5 transition-all duration-500 ease-in-out">
          {/* Social Links - Appear on Hover */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-20 group-hover:translate-y-0 scale-70 group-hover:scale-100 z-10 bg-gradient-to-t from-gray-900/5 via-gray-900/3 to-transparent p-2 rounded-full">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 hover:scale-110 transition-all duration-300 group-hover:opacity-100"
                style={{
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.25) 100%)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  transform: 'translateY(0)',
                  boxShadow: 'none',
                  WebkitBoxShadow: 'none'
                }}
              >
                <FaLinkedin className="h-6 w-6 text-white hover:text-gray-100" 
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.15) 100%)',
                    padding: '0.25rem',
                    borderRadius: '50%',
                    boxShadow: 'none'
                  }}
                />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 hover:scale-110 transition-all duration-300 group-hover:opacity-100"
                style={{
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.25) 100%)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  transform: 'translateY(0)',
                  boxShadow: 'none',
                  WebkitBoxShadow: 'none'
                }}
              >
                <MdEmail className="h-6 w-6 text-white hover:text-gray-100" 
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.15) 100%)',
                    padding: '0.25rem',
                    borderRadius: '50%',
                    boxShadow: 'none'
                  }}
                />
              </a>
            )}
          </div>

          {/* Explore Button - Appear on Hover */}
          {portfolio && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-20 group-hover:translate-y-0 z-10 bg-gradient-to-t from-gray-900/5 via-gray-900/3 to-transparent p-2 rounded-full">
              <a
                href={portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-white/20 hover:text-gray-100 hover:scale-110 transition-all duration-300 px-5 py-2 rounded-lg z-20"
                style={{
                  backdropFilter: 'blur(4px)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.25) 100%)',
                  transform: 'translateY(0)',
                  boxShadow: 'none'
                }}
              >
                Explore
              </a>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500 to-purple-700 transform rotate-45 translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-70 group-hover:scale-100 z-5">
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-purple-500/30 to-transparent transform -rotate-45 -translate-x-8 translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out scale-90 group-hover:scale-100">
        </div>
      </div>

      {/* Name and Designation - Below Card */}
      <div className="mt-4 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{name}</h3>
        <p className="text-sm text-purple-200 group-hover:text-purple-100 transition-colors duration-300">{designation}</p>
      </div>
    </div>
  );
};

export default MemberCard;
