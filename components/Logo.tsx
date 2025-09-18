'use client';

const Logo = ({ width = "70" }) => {
  return (
    <div
      className="font-sans text-center"
      style={{ width: `${width}px` }}
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full aspect-square rounded-xl overflow-hidden">
        
        {/* Stomach Block */}
        <div className="flex items-center justify-center bg-[#e5623b] opacity-0 scale-50 animate-popIn">
          <img
            src="/images/g33.png"
            alt="Stomach"
            className="w-3/5 h-auto filter invert opacity-0 scale-60 animate-fadeInZoom [animation-delay:1.2s]"
          />
        </div>

        {/* Orange Block */}
        <div className="flex items-center justify-center bg-[#f7931e] opacity-0 scale-50 animate-popIn"></div>

        {/* Blue Block */}
        <div className="flex items-center justify-center bg-[#55a8cf] opacity-0 scale-50 animate-popIn"></div>

        {/* Liver Block */}
        <div className="flex items-center justify-center bg-[#2b3b51] opacity-0 scale-50 animate-popIn">
          <img
            src="/images/g44.png"
            alt="Liver"
            className="w-3/5 h-auto filter invert opacity-0 scale-60 animate-fadeInZoom [animation-delay:1.2s]"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
