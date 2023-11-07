import Image from "next/image";

import { testimonials } from "../data";

type Props = {
  testimonial: {
    comment: string;
    job: string;
    name: string;
    photo: string;
  };
};

function Testimonial({ testimonial }: Props) {
  return (
    <article className="space-y-14 flex flex-col items-center">
      <div className="relative h-20 w-20 rounded-full overflow-hidden">
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          className="object-cover"
          fill
        />
      </div>
      <p className="text-center font-barlow text-lg font-medium text-sunnyside-agency-landing-page-very-dark-grayish-blue">
        {testimonial.comment}
      </p>
      <div className="space-y-2">
        <h3 className="text-center font-fraunces font-extrabold text-lg text-sunnyside-agency-landing-page-very-dark-desaturated-blue">
          {testimonial.name}
        </h3>
        <p className="text-center font-barlow font-semibold text-sm text-sunnyside-agency-landing-page-grayish-blue">
          {testimonial.job}
        </p>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className="py-32 space-y-20">
      <h2 className="text-center font-fraunces text-xl uppercase font-bold tracking-widest text-sunnyside-agency-landing-page-grayish-blue">
        Client Testimonials
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 lg:px-0">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
