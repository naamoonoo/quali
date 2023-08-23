import Image from "next/image";

interface Props {
  isDark?: boolean;
  size?: number;
  className?: string;
}

export const Logo = ({ isDark, size = 500, className }: Props) => {
  const src = `/img/logo_${isDark ? "dark" : "white"}.png`;
  return (
    <Image
      className={className}
      src={src}
      width={size}
      height={size}
      alt="quali logo"
    />
  );
};
