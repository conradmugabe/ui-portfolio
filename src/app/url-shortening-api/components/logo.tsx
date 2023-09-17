type Props = {
  className?: string;
};

export function Logo({ className }: Props) {
  return (
    <h1
      className={`text-white ${className} font-semibold text-4xl tracking-wide`}
    >
      Shortly
    </h1>
  );
}
