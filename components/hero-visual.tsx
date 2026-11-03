import Image from "next/image";

export function HeroVisual() {
  return (
    <Image
      className="hero-visual"
      src="/img/laptop.png"
      alt="Laptop con la identidad visual de VEKSON"
      width={1536}
      height={1024}
      priority
    />
  );
}
