import Image from "next/image";

type ScoreProps = {
  score: number;
  total: number;
  name: string;
  className: { bg: string; text: string };
  icon: string;
};

export function Score({ score, total, name, icon, className }: ScoreProps) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-xl ${className.bg}`}
    >
      <p className="flex items-center gap-3">
        <Image src={icon} width={21} height={21} alt={name} />
        <span className={className.text}>{name}</span>
      </p>
      <p className="text-black/50">
        <span className="text-black">{score}</span> / {total}
      </p>
    </div>
  );
}
