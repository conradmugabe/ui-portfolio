type Props = {
  title: string;
  data: string[];
};

export function FooterList({ data, title }: Props) {
  return (
    <div className="space-y-4 text-center lg:text-left">
      <h3 className="font-bold">{title}</h3>
      <ul className="space-y-3 font-medium">
        {data.map((item) => (
          <li
            className="text-url-shortening-api-gray text-sm cursor-pointer transition duration-300 hover:text-url-shortening-api-cyan"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
