import Link from "next/link";

const defaultUrl = "https://www.frontendmentor.io?ref=challenge";

type Props = {
  url?: string;
};

export function FrontendMentorCopyright({ url = defaultUrl }: Props) {
  return (
    <div className="attribution my-5">
      Challenge by{" "}
      <Link href={url} target="_blank">
        Frontend Mentor
      </Link>
      . Coded by <a href="#">Conrad Mugabe</a>.
    </div>
  );
}
