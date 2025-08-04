import BetaTesterForm from "../components/beta-form";

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white py-32 pb-24 px-4 text-center overflow-hidden">
        {/* 배경 SVG 패턴 */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none">
            <defs>
              <radialGradient id="gradient" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient)" />
          </svg>
        </div>

        {/* 상단 반투명 빛줄기 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-gradient-to-b from-white/10 to-transparent blur-3xl" />

        {/* 언어 선택 링크 */}
        <div className="absolute top-4 right-4 space-x-4 text-sm z-10">
          <a href="/ko" className="hover:underline">한국어</a>
          <a href="/en" className="hover:underline">English</a>
        </div>

        <h1 className="relative text-3xl sm:text-5xl font-extrabold mb-6 transition-opacity duration-700 opacity-100 flex flex-col gap-3 z-10">
          <div>Your data,</div>
          <div>now becomes your personal asset.</div>
        </h1>
        <p className="relative text-lg text-blue-100 mb-8 max-w-xl mx-auto transition-opacity duration-700 delay-150 opacity-100 z-10">
          INKO transforms your everyday insights into fair rewards,<br className="hidden sm:inline" />
          and connects the value you create to businesses that need it.
        </p>
        <a
          href="#signup"
          className="relative inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition z-10"
        >
          Apply as a Beta Tester
        </a>
      </section>


      {/* Features Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What INKO Stands For</h2>

          <div className="grid sm:grid-cols-3 gap-12 text-left">
            {[
              { icon: '🔍', title: 'The Start of Data Sovereignty', text: 'From collection to utilization, we transparently disclose how your data flows.' },
              { icon: '💎', title: 'Rewarded Fairly for Participation', text: 'Answer a question a day and earn income—your data is now a true asset.' },
              { icon: '🕊️', title: 'Ethical Data, Shared Value', text: 'We handle data responsibly and distribute profits with our users.' },
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

      {/* Service Overview Section */}
      <section className="py-24 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Services</h2>
          <div className="grid sm:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-2">INKO App</h3>
              <p className="text-gray-600">
                A mobile application where users answer one daily question to earn rewards.
                You can track your earnings and see exactly how your data is used.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-2">INKO Data Shop</h3>
              <p className="text-gray-600">
                We collect long-term user insights, refine and analyze the data, and deliver high-quality reports to businesses seeking actionable intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section id="signup" className="bg-white py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join as a Beta Tester</h2>
          <p className="text-gray-600 mb-6">
            Be part of shaping the future of data value.<br />
            Experience INKO before anyone else and help improve our product with your feedback.
          </p>
          <BetaTesterForm
            language='en'
          />

        </div>
      </section>

      <footer className="bg-blue-950 text-white text-sm text-center py-6 flex flex-col gap-4 items-center">
        <div className='flex items-center gap-3'>
          <img src='inko-white.png' alt='inko-logo' className='w-14 h-14' />
          <div>Share your data, receive your value.</div>
        </div>

        <address className="not-italic text-gray-300">
          CEO: Hyewon Lee · Email: <a href="mailto:ihyewon771@gmail.com" className="underline hover:text-white">ihyewon771@gmail.com</a>
        </address>

        <div>&copy; 2025 INKO. All rights reserved.</div>
      </footer>
    </main>
  );
}