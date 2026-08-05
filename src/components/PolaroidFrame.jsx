import "../styles/PolaroidFrame.scss";

function PolaroidFrame({ categoryData }) {
  return (
    <div className="polaroid-frame">
      <div className="polaroid-image-wrapper">
        <img
          src={categoryData.mainImageUrl[0]}
          alt={`${categoryData.category} 미리보기 사진`}
          className="polaroid-image"
        />
      </div>

      <a
        aria-label={`${categoryData.category} 사진 보러가기`}
        href={`#intro-${categoryData.category}`}
        className="polaroid-caption"
      >
        <p aria-hidden="true">{categoryData.title}</p>
        <img
          src="/icons/Arrow-right.svg"
          alt="오른쪽을 가리키는 화살표 모양 아이콘 "
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

export default PolaroidFrame;
