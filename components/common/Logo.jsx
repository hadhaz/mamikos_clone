import Image from "next/image";
import { useEffect } from "react";

const Logo = ({ className, alt, src }) => {
  return (
    <div className={className}>
      <Image alt={alt || src.replace("/", "") | ""} src={src || ""} fill />
    </div>
  );
};

export default Logo;
