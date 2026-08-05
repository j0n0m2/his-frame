import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ScrollInteraction.scss";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollInteraction({ categoryData }) {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !photoRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      tl.to(photoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }).to(
        titleRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.7"
      );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "bottom top",
            scrub: 1,
          },
          y: 400,
        });
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 0%",
            end: "bottom top",
            scrub: 1,
          },
          y: 240,
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "bottom top",
            scrub: 1,
          },
          y: 200,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [categoryData]);

  return (
    <article className="intro-gallery-container" id={`intro-${categoryData}`}>
      <section ref={sectionRef} className="main-photo-section">
        <div ref={photoRef} className="photo-wrapper">
          <img
            src={categoryData.mainImageUrl[1]}
            alt={`${categoryData.category} 이미지`}
            className="main-photo"
          />

          <h2 ref={titleRef} className="section-title">
            {categoryData.title}
          </h2>
        </div>
      </section>
      <section className="caption-section">
        <p>
          {categoryData.caption ||
            "이집트는 태양신을 섬기던 문화가 깊게 남아있는 무슬림 국가입니다. 이집트 사람들은 순수하며 꾸준히 믿음을 지켜나가며 신실히 살아갑니다. 이들의 순수함과 신실함이 예수님을 만나길 간절히 기도합니다."}
        </p>
      </section>
      <section className="photos-gird">
        {categoryData.subImageUrls.map((subImageUrl) => (
          <img src={subImageUrl} alt={`${categoryData.category} 이미지`} />
        ))}
      </section>
      <Link
        aria-label={`${categoryData.category} 사진 전체 보러가기`}
        to={`photos/#${categoryData.category}`}
        className="view-all-link"
      >
        <p aria-hidden>사진 전체 보기</p>
        <img
          src="/icons/Arrow-right.svg"
          alt="오른쪽을 가리키는 화살표 모양 아이콘"
        />
      </Link>
    </article>
  );
}
