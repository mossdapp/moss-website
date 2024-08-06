export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 109 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0" y="0" width="40" height="40" rx="8" ry="8" fill="#EC4899" />
      <circle cx="13" cy="13" r="6" fill="white" />
      <text x="50" y="25" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">
        <tspan fill="black">M</tspan>
        <tspan fill="black">o</tspan>
        <tspan fill="#EC4899">ss</tspan>
      </text>
    </svg>
  );
}

