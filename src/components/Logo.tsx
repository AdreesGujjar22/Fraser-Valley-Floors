export function Logo({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizes = {
    sm: "h-20 w-20",
    md: "h-24 w-24",
    lg: "h-28 w-28",
  };

  return (
    <img
      src="/Fraser-Valley-Floors.png"
      alt="Fraser Valley Floors Logo"
      className={`${sizes[size]} object-contain ${className}`}
    />
  );
}
