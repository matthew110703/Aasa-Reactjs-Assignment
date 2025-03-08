// UI
import { useEffect, useState } from "react";
import { Button, Card, Detail } from "./components";

// Constants
import {
  ISSUES,
  BENEFITS,
  TESTIMONIALS,
  FEATURES,
  PACKAGE,
  FAQs,
} from "./lib/constants";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const width = window.innerWidth;

    if (width > 768) {
      alert("Please view this page in mobile view");
      window.close();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  return (
    <section aria-label="home" className="container mx-auto space-y-6">
      <header className="flex items-center justify-between px-4 py-6">
        <img src="/logo.jpg" alt="Logo" width={128} />
        <Button
          text={"Get Started"}
          className={"min-w-[50%]"}
          style={{ borderRadius: "25px" }}
        />
      </header>

      <main className="space-y-16 text-center">
        {/* Hero Section */}
        <section aria-label="hero" className="space-y-8 px-4">
          <header>
            <h1 className="text-grad text-center text-4xl leading-snug font-semibold tracking-normal">
              Master the Art of Digital Illustration
            </h1>
            <h2 className="text-2xl font-semibold">
              A 4-Week Course Designed for Beginners & Enthusiasts!{" "}
            </h2>
          </header>
          <img src="/hero.jpg" alt="Hero Image" />
          <p className="font-semibold">
            Learn to create stunning digital artwork with step-by-step guidance
            from industry experts. <br /> No prior experience required. Just
            your creativity! <br /> Enroll now for ₹7,999
          </p>
          <Button
            text={"Secure Your Spot for Just ₹79"}
            className={"min-w-[80%]"}
          />
          <p className="font-semibold">
            Use a coupon code within 15 minutes to unlock a special bonus pack!
          </p>
        </section>

        {/* Issues */}
        <section className="via-sapphire/25 space-y-4 bg-gradient-to-b from-white from-0% via-50% to-white to-100% py-8 backdrop-blur-2xl">
          <h3 className="text-2xl font-semibold">
            Without Proper Training, You Might:
          </h3>

          <div className="grid grid-cols-3 gap-4 p-4">
            {ISSUES.map((issue) => (
              <article
                key={issue.id}
                className="flex flex-col items-center gap-y-4 rounded-xl bg-white p-4 shadow"
              >
                <img src={issue.icon} alt="icon" width={32} />
                <p className="text-sm font-semibold">{issue.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section aria-label="benefits" className="space-y-10">
          <h3 className="text-grad text-2xl font-semibold">
            With This Course, You Get:
          </h3>

          <div className="space-y-4 px-4">
            {BENEFITS.map((benefit) => (
              <Card key={benefit.id} icon={benefit.icon} text={benefit.text} />
            ))}
          </div>

          <Button text={"Book Now at ₹49"} className={"min-w-[70%]"} />
        </section>

        {/* Testimonials */}
        <section aria-label="testimonials" className="space-y-8 p-4">
          <div className="shadow-sapphire border-sapphire flex h-[400px] w-full flex-col items-center justify-center rounded-xl border shadow">
            <img
              src="/icons/play.png"
              alt="Play Button"
              width={52}
              height={52}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.id}
                className="border-grad shadow-sapphire flex flex-col gap-y-2 rounded-xl border p-4 shadow-sm"
              >
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-sm">{testimonial.age}</p>
                <p className="text-xs font-semibold">{testimonial.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Right For You */}
        <section className="space-y-4">
          <header className="space-y-2">
            <h3 className="text-grad text-2xl font-semibold">
              Is This Right for You?
            </h3>
            <p className="text-lg font-semibold">
              Everybody is fond of Digital Art! You need it too.
            </p>
          </header>
          <img
            src="/professions.jpg"
            alt="Professions Digital Art"
            className="w-full"
          />
        </section>

        {/* Not Satisfied Yet? */}
        <section aria-label="features" className="space-y-8">
          <header className="space-y-2">
            <h3 className="text-3xl font-semibold">Not Satisfied Yet?</h3>
            <p className="text-xl">We got you! Here are few extra features</p>
          </header>

          <div className="space-y-3 px-4">
            {FEATURES.map((feature) => (
              <Card key={feature.id} icon={feature.icon} text={feature.text} />
            ))}
          </div>
          <Button text={"Book Now for ₹79"} className={"min-w-[70%]"} />
        </section>

        {/* Pricing */}
        <section className="space-y-4">
          <h3 className="text-3xl font-bold">Enroll Now for ₹7,999</h3>

          <div className="space-y-4 p-4">
            {PACKAGE.map((item, idx) => (
              <p
                key={idx}
                className="border-sapphire/50 rounded-full border p-2 text-lg shadow-xs"
              >
                {item}
              </p>
            ))}
          </div>

          <p className="font-semibold">
            WE Offer everything you need at ₹7,999--but wait...👀
          </p>

          <div className="m-4 rounded-lg border p-4">
            <p className="text-sm font-semibold">
              Use a Special Code & Unlock a Game-Changing Discount to avail same
              course in a discounted price!
            </p>
          </div>

          <Button text={"Book Now for ₹79"} className={"mt-4 min-w-[70%]"} />
        </section>

        {/* FAQ */}
        <section aria-label="faq" className="space-y-6">
          <h3 className="text-3xl font-bold">FAQs</h3>

          <div className="space-y-4 p-4">
            {FAQs.map((faq) => (
              <Detail key={faq.id} q={faq.q} a={faq.a} />
            ))}
          </div>

          <Button text={"Let's get started"} className={"mt-4 min-w-[70%]"} />
        </section>

        <footer className="space-y-4 px-4 py-8">
          <h3 className="text-3xl font-bold">
            Ready to Start Your Digital Art Journey?
          </h3>
          <p className="text-lg">
            Click below to secure your spot & start creating!
          </p>
          <Button text={"Enroll Now"} className={"mt-4 min-w-[70%]"} />
        </footer>
      </main>
    </section>
  );
};

export default App;
