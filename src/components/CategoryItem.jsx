import { useRef } from "react";
import { gsap } from "gsap";

function CategoryItem({ category, imageUrls }) {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const isOpenRef = useRef(false);

  const handleToggle = () => {
    const content = contentRef.current;
    const arrow = arrowRef.current;
    if (!content || !arrow) return;

    isOpenRef.current = !isOpenRef.current;
    const isOpen = isOpenRef.current;

    gsap.to(content, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.5,
      ease: isOpen ? "power2.out" : "power2.inOut",
      overwrite: "auto",
    });

    gsap.to(arrow, {
      rotate: isOpen ? 180 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section className="category-section">
      <div className="category-header">
        <h2>{category}</h2>
        <button type="button" onClick={handleToggle} className="toggle-btn">
          <img
            ref={arrowRef}
            src="/icons/Circle-arrow-down.svg"
            alt="토글 아이콘"
          />
        </button>
      </div>

      <div ref={contentRef} className="image-grid-wrapper">
        <div className="image-grid">
          {imageUrls?.map((url, idx) => (
            <img key={idx} src={url} alt={`${category} 이미지 ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryItem;
