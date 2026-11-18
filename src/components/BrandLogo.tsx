interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Center petal */}
        <path
          d="M20 6C17.2 11.4 16.5 17.4 20 24.5C23.5 17.4 22.8 11.4 20 6Z"
          stroke="#DFB3D2"
          strokeWidth="1.5"
          fill="#DFB3D2"
          fillOpacity="0.18"
          strokeLinejoin="round"
        />
        {/* Inner left petal */}
        <path
          d="M19.5 24.5C15.5 21.5 12.2 15.8 12.2 10.6C15.6 12.5 18.2 16.8 19.5 24.5Z"
          stroke="#DFB3D2"
          strokeWidth="1.4"
          fill="#DFB3D2"
          fillOpacity="0.12"
          strokeLinejoin="round"
        />
        {/* Inner right petal */}
        <path
          d="M20.5 24.5C24.5 21.5 27.8 15.8 27.8 10.6C24.4 12.5 21.8 16.8 20.5 24.5Z"
          stroke="#DFB3D2"
          strokeWidth="1.4"
          fill="#DFB3D2"
          fillOpacity="0.12"
          strokeLinejoin="round"
        />
        {/* Outer left petal */}
        <path
          d="M19 25.5C13.2 25.2 8.2 21.6 6.5 16.5C11.2 17.2 15.4 20.2 19 25.5Z"
          stroke="#DFB3D2"
          strokeWidth="1.4"
          fill="#DFB3D2"
          fillOpacity="0.08"
          strokeLinejoin="round"
        />
        {/* Outer right petal */}
        <path
          d="M21 25.5C26.8 25.2 31.8 21.6 33.5 16.5C28.8 17.2 24.6 20.2 21 25.5Z"
          stroke="#DFB3D2"
          strokeWidth="1.4"
          fill="#DFB3D2"
          fillOpacity="0.08"
          strokeLinejoin="round"
        />
        {/* Base lotus calyx arc */}
        <path
          d="M10.5 27.5C13.8 29.8 26.2 29.8 29.5 27.5"
          stroke="#DFB3D2"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-[23px] font-medium tracking-wide text-white whitespace-nowrap">
          SareeAura
        </span>
        <span className="mt-1 text-[7.5px] font-medium tracking-[0.23em] text-white/75 uppercase whitespace-nowrap">
          Tradition in Every Drape
        </span>
      </div>
    </div>
  );
}
