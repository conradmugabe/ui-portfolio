import { FrontendMentorCopyright } from "@/components/copyright";
import { FooterList } from "./components/footer-list";
import { company, features, resources, socials } from "./data";
import { Socials } from "./components/socials";
import { Logo } from "./components/logo";

export default function UrlShorteningPage() {
  return (
    <>
      {/* <header>

    <nav>
  Features
  Pricing
  Resources
    </nav>

  Login
  Sign Up
  </header>
  <section>

    <h2>

  More than just shorter links
    </h2>
    <p>

  Build your brand’s recognition and get detailed insights 
  on how your links are performing.
    </p>
<button>

  Get Started
</button>
  </section>
  <section>
    <input type="text"
    placeholder="Shorten a link here..."
    />
    <button>

  Shorten It!
    </button>
  </section>
  <section>

<h2>

  Advanced Statistics
</h2>
<p>

  Track how your links are performing across the web with our 
  advanced statistics dashboard.
</p>
<div>

  Brand Recognition

  Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.

  Detailed Records

  Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.

  Fully Customizable

  Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.
</div>
  </section>
<section>
<h2>

  Boost your links today
</h2>

    <button>

  Get Started
    </button>
</section> */}
      <footer className="bg-url-shortening-api-very-dark-violet text-white py-20">
        <div className="flex flex-col items-center gap-9 max-w-6xl mx-auto lg:flex-row lg:items-start lg:gap-0 lg:justify-between">
          <Logo />
          <FooterList title="Features" data={features} />
          <FooterList title="Resources" data={resources} />
          <FooterList title="Company" data={company} />
          <Socials socials={socials} />
        </div>
      </footer>
      <FrontendMentorCopyright />
    </>
  );
}
