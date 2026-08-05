import PolaroidFrame from "../components/PolaroidFrame";
import ScrollInteraction from "../components/ScrollInteraction";
import { useIsDesktop } from "../hooks/useIsDesktop";
import "../styles/Home.scss";

function Home() {
  const isDesktop = useIsDesktop();

  return (
    <main id="home-main">
      <section id="intro">
        <div className="polaroid-with-badge">
          <img
            src="/assets/JesusLovesYou.svg"
            alt="예수님은 당신을 사랑합니다 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame categoryData="egypt" />
        </div>
        {isDesktop ? <PolaroidFrame categoryData="seoul" /> : null}

        <PolaroidFrame categoryData="hawaii" />

        <div className="polaroid-with-badge">
          <img
            src="/assets/MadeByGod.svg"
            alt="하나님이 만드심 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame categoryData="taiwan" />
        </div>
        {isDesktop ? <PolaroidFrame categoryData="usa" /> : null}
      </section>

      <section id="intro-gallery-section">
        <ScrollInteraction categoryData="egypt" />
        <ScrollInteraction categoryData="hawaii" />
        {isDesktop ? <ScrollInteraction categoryData="seoul" /> : null}
        <ScrollInteraction categoryData="taiwan" />
        {isDesktop ? <ScrollInteraction categoryData="usa" /> : null}
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
