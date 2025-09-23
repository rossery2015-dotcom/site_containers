export default function LocationIcon({ width = 18, height = 18, ...props }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true"
      {...props}
    >
      <path 
        d="M12 2C7.582 2 4 5.582 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.418-3.582-8-8-8Zm0 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" 
        fill="currentColor"
      />
    </svg>
  );
}

