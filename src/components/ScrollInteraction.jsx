import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ScrollInteraction.scss";
import { Link } from "react-router-dom";
import { useIsDesktop } from "../hooks/useIsDesktop";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollInteraction({ categoryData }) {
  const isDesktop = useIsDesktop();
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

      mm.add("(min-width: 1023px)", () => {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current.parentElement,
            start: "top 10%",
            end: "bottom top",
            scrub: 1,
          },
          y: 2000,
          ease: "none",
        });
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "bottom top",
            scrub: 1,
          },
          y: 340,
          ease: "none",
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
          y: 300,
          ease: "none",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [categoryData, isDesktop]);

  if (!categoryData) return null;

  return (
    <article
      className="intro-gallery-container"
      id={`intro-${categoryData.category}`}
    >
      <section ref={sectionRef} className="main-photo-section">
        <div ref={photoRef} className="photo-wrapper">
          <img
            src={categoryData.mainImageUrl}
            alt={`${categoryData.category} 이미지`}
            className="main-photo"
          />
          <h2 ref={titleRef} className="section-title">
            {categoryData.title}
          </h2>
        </div>
      </section>
      <section className="caption-photos-gird">
        <p>{categoryData.caption}</p>
        {categoryData.subImageUrls?.map((subImageUrl) => (
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
