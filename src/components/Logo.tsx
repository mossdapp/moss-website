export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 109 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="gradientStroke" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />                                         
        </linearGradient>
        <mask id="mask1">
          <rect x="0" y="0" width="40" height="40" rx="8" ry="8" fill="white" />
          <circle cx="13" cy="13" r="6" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="8" ry="8" fill="black" mask="url(#mask1)" stroke="url(#gradientStroke)" strokeWidth="4"/>
      
      <text x="52" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold">
        <tspan fill="black">M</tspan>
        <tspan fill="black">o</tspan>
        <tspan fill="#f9a8d4">ss</tspan>
      </text>
    </svg>
  );
}

