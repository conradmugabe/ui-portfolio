import Image from "next/image";

type Card = {
  title: string;
  icon: string;
  description: string;
};

type CardProps = {
  card: Card;
  className: string;
};

type Props = {
  cards: Card[];
};

export function Card({ card, className }: CardProps) {
  return (
    <div
      className={`flex-1 bg-white rounded-lg px-8 pb-10 pt-20 relative ${className}`}
    >
      <div className="bg-url-shortening-api-dark-violet h-24 w-24 rounded-full grid place-content-center absolute -top-12 left-0 right-0 mx-auto md:mx-0 md:left-8">
        <Image src={card.icon} alt={card.title} width={40} height={40} />
      </div>
      <div className="space-y-4">
        <h3 className="font-bold text-xl">{card.title}</h3>
        <p className="text-url-shortening-api-gray text-sm leading-relaxed font-medium">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function Cards({ cards }: Props) {
  return (
    <>
      {cards.map((card, index) => {
        let className = "md:mb-24";
        if (index === 1) {
          className = "md:mt-12 md:mb-12";
        }
        if (index === 2) {
          className = "md:mt-24";
        }

        return <Card key={card.title} card={card} className={className} />;
      })}
    </>
  );
}
