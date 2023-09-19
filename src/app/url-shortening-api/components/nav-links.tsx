import Link from "next/link";

type Props = {
  links: string[];
};

export function NavLinks({ links }: Props) {
  return (
    <>
      {links.map((link) => (
        <Link
          href="#"
          key={link}
          className="text-url-shortening-api-gray text-base font-semibold transition duration-300 hover:text-url-shortening-api-very-dark-blue"
        >
          {link}
        </Link>
      ))}
    </>
  );
}
