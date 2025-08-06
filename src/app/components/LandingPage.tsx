import BetaTesterForm from "../components/beta-form";
import { LandingPageText } from "@/i18n/landing/LandingPageText";

export default function LandingPage(props: { text: LandingPageText }) {
  const { text } = props;

  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white py-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <radialGradient id="gradient" cx="50%" cy="50%" r="85%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="80%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient)" />
          </svg>
        </div>

        {/* 상단 반투명 빛줄기 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-gradient-to-b from-white/10 to-transparent blur-3xl" />

        {/* 언어 선택 링크 */}
        <div className="absolute top-4 right-4 space-x-4 text-sm z-10">
          <a href="/ko" className="hover:underline">
            한국어
          </a>
          <a href="/en" className="hover:underline">
            English
          </a>
        </div>

        <h1 className="relative text-3xl sm:text-5xl font-extrabold mb-6 transition-opacity duration-700 opacity-100 flex flex-col gap-3 z-10">
          <div>{text.header.title[0]}</div>
          <div>{text.header.title[1]}</div>
        </h1>
        <p className="relative text-lg font-semibold text-blue-100 mb-8 max-w-xl mx-auto transition-opacity duration-700 delay-150 opacity-100 z-10">
          {text.header.subTitle[0]}
          <br className="hidden sm:inline" />
          {text.header.subTitle[1]}
        </p>
        <a
          href="#signup"
          className="relative inline-block px-8 py-3 bg-white text-blue-900 font-extrabold rounded-lg hover:bg-blue-100 transition z-10"
        >
          {text.header.betaTestingButtonLabel}
        </a>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{text.features.title}</h2>

          <div className="grid sm:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: "🔍",
                title: text.features.items[0].title,
                text: text.features.items[0].text,
              },
              {
                icon: "💎",
                title: text.features.items[1].title,
                text: text.features.items[1].text,
              },
              {
                icon: "🕊️",
                title: text.features.items[2].title,
                text: text.features.items[2].text,
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">INKO의 멤버를 소개합니다.</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: "이혜원", role: "Product Manager" },
              { name: "서범석", role: "Developer" },
              { name: "정준영", role: "Marketer" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Service Overview Section */}
      <section className="py-24 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{text.services.title}</h2>
          <div className="grid sm:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                {text.services.items[0].title}
              </h3>
              <p className="text-gray-600">
                {text.services.items[0].description}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                {text.services.items[1].title}
              </h3>
              <p className="text-gray-600">
                {text.services.items[1].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section id="signup" className="bg-white py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{text.betaTesting.title}</h2>
          <p className="text-gray-600 mb-6">
            {text.betaTesting.text[0]}
            <br />
            {text.betaTesting.text[1]}
          </p>
          <BetaTesterForm text={text.betaTesting.form} />
        </div>
      </section>

      <footer className="bg-blue-950 text-white text-sm text-center py-6 flex flex-col gap-4 items-center">
        <div className="flex items-center gap-3">
          <img src="inko-white.png" alt="inko-logo" className="w-14 h-14" />
          <div>{text.footer.title}</div>
        </div>

        <address className="not-italic text-gray-300">
          {text.footer.address}
          <a
            href="mailto:ihyewon771@gmail.com"
            className="underline hover:text-white"
          >
            ihyewon771@gmail.com
          </a>
        </address>
        <div>&copy; {text.footer.copyright}</div>
      </footer>
    </main>
  );
}
