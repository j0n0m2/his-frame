import PolaroidFrame from "../components/PolaroidFrame";
import ScrollInteraction from "../components/ScrollInteraction";
import "../styles/Home.scss";

function Home() {
  return (
    <main id="home-main">
      <section id="intro">
        <div className="polaroid-with-badge">
          <img
            src="/assets/JesusLovesYou.svg"
            alt="예수님은 당신을 사랑합니다 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame imageCategory="egypt"></PolaroidFrame>
        </div>
        <div>
          <PolaroidFrame imageCategory="hawaii"></PolaroidFrame>
        </div>
        <div className="polaroid-with-badge">
          <img
            src="/assets/MadeByGod.svg"
            alt="예수님은 당신을 사랑합니다 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame imageCategory="taiwan"></PolaroidFrame>
        </div>
      </section>
      <section id="intro-gallery-section">
        <ScrollInteraction imageCategory="egypt"></ScrollInteraction>
        <ScrollInteraction imageCategory="hawaii"></ScrollInteraction>
        <ScrollInteraction imageCategory="taiwan"></ScrollInteraction>
        <ScrollInteraction imageCategory="taiwan"></ScrollInteraction>
        <ScrollInteraction imageCategory="taiwan"></ScrollInteraction>
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
