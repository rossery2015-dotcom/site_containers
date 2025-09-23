export default function StarIcon({ width = 16, height = 16, ...props }) {
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
        d="M12 2 2 12l10 10 10-10L12 2Zm0 5 5 5-5 5-5-5 5-5Z" 
        fill="#1677ff"
      />
    </svg>
  );
}

