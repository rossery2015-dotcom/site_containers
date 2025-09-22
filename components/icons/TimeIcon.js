export default function TimeIcon({ width = 18, height = 18, ...props }) {
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
        d="M5 17h14l-1.34-8.04A3 3 0 0 0 14.7 6H9.3a3 3 0 0 0-2.96 2.96L5 17Zm-1 2h16v2H4v-2Z" 
        fill="currentColor"
      />
    </svg>
  );
}
