import { Score } from "./components/score";
import { resultsSummary } from "./data";

export default function ResultsSummary() {
  return (
    <section className="md:h-screen md:grid md:place-content-center">
      <section className="bg-white font-hanken-grotesk font-medium text-base space-y-8 max-w-3xl md:shadow-lg md:shadow-results-summary-light-lavender rounded-[2rem] md:grid md:grid-cols-2">
        <div className="flex flex-col items-center gap-5 bg-gradient-to-b from-results-summary-light-slate-blue to-results-summary-light-royal-blue rounded-b-[2rem] pt-6 pb-8 px-16 text-white md:rounded-[2rem] md:flex md:flex-col md:items-center md:justify-center md:gap-8">
          <h2 className="text-results-summary-light-lavender md:text-2xl">
            Your Result
          </h2>
          <div className="bg-gradient-to-b from-results-summary-violet-blue/100 to-results-summary-persian-blue/0 rounded-full flex flex-col items-center justify-center h-36 w-36 md:h-52 md:w-52">
            <h2 className="font-extrabold text-6xl md:text-7xl md:font-semibold">
              76
            </h2>
            <p className="text-results-summary-light-lavender opacity-50 md:text-lg">
              of 100
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-medium text-2xl md:text-3xl">Great</h3>
            <p className="text-results-summary-light-lavender font-normal text-center leading-tight md:text-lg md:leading-6">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="grid mx-6 space-y-5 md:pb-12 md:px-10 md:pt-0 md:mx-0">
          <h3 className="text-lg font-medium md:text-2xl">Summary</h3>

          <div className="space-y-4">
            {resultsSummary.map((result) => (
              <Score
                key={result.name}
                name={result.name}
                score={result.score}
                total={result.total}
                className={result.className}
                icon={result.icon}
              />
            ))}
          </div>
          <button className="text-white bg-results-summary-dark-gray-blue h-14 rounded-full text-lg font-normal">
            Continue
          </button>
        </div>
      </section>

      <div className="attribution mt-5">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Conrad Mugabe</a>.
      </div>
    </section>
  );
}
