import Image from "next/image";

type Props = {
  socials: string[];
};

export function Socials({ socials }: Props) {
  return (
    <div className="flex items-center justify-between gap-6">
      {socials.map((social) => (
        <Image
          key={social}
          src={`/url-shortening-api/icon-${social}.svg`}
          alt={`${social} icon`}
          width={24}
          height={24}
          className="cursor-pointer transition duration-300"
        />
      ))}
    </div>
  );
}
