import "../styles/PolaroidFrame.scss";

function PolaroidFrame({ imageCategory, imageUrl }) {
  return (
    <div className="polaroid-frame">
      <picture className="polaroid-image-wrapper">
        <source srcSet={`${imageUrl}.webp`} type="image/webp" />
        <img
          src={imageUrl}
          alt={`${imageCategory} 미리보기 사진`}
          className="polaroid-image"
        />
      </picture>

      <a
        aria-label={`${imageCategory} 사진 보러가기`}
        href={`#intro-${imageCategory}`}
        className="polaroid-caption"
      >
        <p aria-hidden="true">{imageCategory}</p>
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
