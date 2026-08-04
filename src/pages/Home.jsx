import { useState, useEffect } from "react";
import PolaroidFrame from "../components/PolaroidFrame";
import ScrollInteraction from "../components/ScrollInteraction";
import "../styles/Home.scss";

function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1037);
    };

    handleResize(); // 초기 로드 시 체크
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main id="home-main">
      <section id="intro">
        <div className="polaroid-with-badge">
          <img
            src="/assets/JesusLovesYou.svg"
            alt="예수님은 당신을 사랑합니다 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame imageCategory="egypt" />
        </div>
        {isDesktop ? <PolaroidFrame imageCategory="seoul" /> : null}

        <PolaroidFrame imageCategory="hawaii" />

        <div className="polaroid-with-badge">
          <img
            src="/assets/MadeByGod.svg"
            alt="예수님은 당신을 사랑합니다 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame imageCategory="taiwan" />
        </div>
        {isDesktop ? <PolaroidFrame imageCategory="usa" /> : null}
      </section>

      <section id="intro-gallery-section">
        <ScrollInteraction imageCategory="egypt" />
        <ScrollInteraction imageCategory="hawaii" />
        {isDesktop ? <ScrollInteraction imageCategory="seoul" /> : null}
        <ScrollInteraction imageCategory="taiwan" />
        {isDesktop ? <ScrollInteraction imageCategory="usa" /> : null}
      </section>

      <footer id="home-footer">
        <a href="#" aria-label="맨 위로 이동">
          <img
            className="arrow-icon"
            src="/icons/Arrow-up.svg"
            alt="화살표 윗방향 아이콘"
          />
          <p>맨 위로</p>
        </a>
      </footer>
    </main>
  );
}

export default Home;
