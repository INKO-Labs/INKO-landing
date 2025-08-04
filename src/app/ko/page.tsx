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
          <div>당신의 데이터,</div>
          <div>이제는 당신의 자산이 됩니다.</div>
        </h1>
        <p className="relative text-lg text-blue-100 mb-8 max-w-xl mx-auto transition-opacity duration-700 delay-150 opacity-100 z-10">
          INKO는 일상의 정보를 정당한 보상으로 전환하고,<br className="hidden sm:inline" />
          당신의 선택으로 만들어진 인사이트를 기업에 연결합니다.
        </p>
        <a
          href="#signup"
          className="relative inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition z-10"
        >
          베타 테스터 신청하기
        </a>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">INKO가 만드는 변화</h2>

          <div className="grid sm:grid-cols-3 gap-12 text-left">
            {[
              { icon: '🔍', title: '데이터 주권의 시작', text: '수집부터 활용까지, 모든 데이터 흐름을 사용자에게 공개합니다.' },
              { icon: '💎', title: '참여한 만큼, 정당하게', text: '하루 한 번의 응답이 수익이 되는 경험. 데이터는 이제 당신의 자산입니다.' },
              { icon: '🕊️', title: '함께 만드는 데이터 윤리', text: '우리는 데이터를 정당하게 다루고, 수익은 사용자와 함께 나눕니다.' },
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
          <h2 className="text-3xl font-bold mb-12">INKO의 주요 서비스</h2>
          <div className="grid sm:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-2">INKO App</h3>
              <p className="text-gray-600">
                하루 한 번의 데일리 질문에 응답하고 보상을 받는 사용자용 애플리케이션. 자신의 데이터가 어떻게 사용되고 있는지를 직접 확인할 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-2">INKO Data Shop</h3>
              <p className="text-gray-600">
                사용자로부터 장기적으로 수집한 정보를 기반으로, 전문적인 분석을 거쳐 기업이 활용할 수 있는 인사이트 레포트를 제작하고 제공합니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section id="signup" className="bg-white py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">INKO의 베타 테스터가 되어주세요</h2>
          <p className="text-gray-600 mb-6">
            지금 신청하고, 새로운 데이터 가치를 함께 만들어보세요.<br />
            누구보다 먼저 INKO의 서비스를 경험하고,
            당신의 의견이 제품 개선에 반영됩니다.
          </p>
          <BetaTesterForm language='ko' />
        </div>
      </section>

      <footer className="bg-blue-950 text-white text-sm text-center py-6 flex flex-col gap-4 items-center">
        <div className='flex items-center gap-3'>
          <img src='inko-white.png' alt='inko-logo' className='w-14 h-14' />
          <div>데이터를 나누세요, 가치를 돌려드립니다.</div>
        </div>

        <address className="not-italic text-gray-300">
          대표자: 이혜원 · 이메일: <a href="mailto:ihyewon771@gmail.com" className="underline hover:text-white">ihyewon771@gmail.com</a>
        </address>
        <div>&copy; 2025 INKO. 모든 권리 보유.</div>
      </footer>
    </main >
  );
}