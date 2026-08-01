import PolaroidFrame from "../components/PolaroidFrame";
import "../styles/Home.scss";
function Home() {
  return (
    <main>
      <section id="intro">
        <div className="polaroid-with-badge">
          <img
            src="/assets/JesusLovesYou.svg"
            alt="예수님은 당신을 사랑합니다 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame imageCategory={"egypt"}></PolaroidFrame>
        </div>
        <div>
          <PolaroidFrame imageCategory={"hawaii"}></PolaroidFrame>
        </div>
        <div>
          <PolaroidFrame imageCategory={"taiwan"}></PolaroidFrame>
        </div>
      </section>
      <article id="intro-egypt"></article>
      <article id="intro-hawaii"></article>
      <article id="intro-taiwan"></article>
    </main>
  );
}
export default Home;
