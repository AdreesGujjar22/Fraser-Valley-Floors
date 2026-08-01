export function Logo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-20 w-20",
    md: "h-24 w-24",
    lg: "h-28 w-28",
  };

  const pixelSizes = {
    sm: 80,
    md: 96,
    lg: 112,
  };

  return (
    <img
      src="/Fraser-Valley-Floors.png"
      alt="Fraser Valley Floors Logo"
      width={pixelSizes[size]}
      height={pixelSizes[size]}
      decoding="async"
      className={`${sizes[size]} object-contain ${className}`}
    />
  );
}
