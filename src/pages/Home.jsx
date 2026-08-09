import PolaroidFrame from "../components/PolaroidFrame";
import ScrollInteraction from "../components/ScrollInteraction";
import { useCategoryData } from "../hooks/useCategoryData";
import { useIsDesktop } from "../hooks/useIsDesktop";
import "../styles/Home.scss";

function Home() {
  const { data, isLoading, error } = useCategoryData();
  const isDesktop = useIsDesktop();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  const categoryList = Object.values(data);

  return (
    <main id="home-main">
      <section id="intro">
        <div className="polaroid-with-badge">
          <img
            src="/assets/JesusLovesYou.svg"
            alt="예수님은 당신을 사랑합니다 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame categoryData={categoryList?.egypt} />
        </div>
        {isDesktop ? (
          <PolaroidFrame categoryData={categoryList?.japan} />
        ) : null}

        <PolaroidFrame categoryData={categoryList?.hawaii} />

        <div className="polaroid-with-badge">
          <img
            src="/assets/MadeByGod.svg"
            alt="하나님이 만드심 뱃지 이미지"
            className="badge"
          />
          <PolaroidFrame categoryData={categoryList?.taiwan} />
        </div>
        {isDesktop ? <PolaroidFrame categoryData={categoryList?.usa} /> : null}
      </section>

      <section id="intro-gallery-section">
        <ScrollInteraction categoryData="egypt" />
        <ScrollInteraction categoryData={categoryList?.hawaii} />
        {isDesktop ? (
          <ScrollInteraction categoryData={categoryList?.japan} />
        ) : null}
        <ScrollInteraction categoryData={categoryList?.taiwan} />
        {isDesktop ? (
          <ScrollInteraction categoryData={categoryList?.usa} />
        ) : null}
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
