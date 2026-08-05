import { useState, useEffect } from "react";

const IMAGE_API_BASE = "/api/images";

/**
 * @param {"home" | "photos"} pageType
 */
export function useCategoryData(pageType) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGalleryData() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/${pageType}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawData = await response.json();

        if (!isMounted) return;

        // 💡 Array 여부 확인 방어 로직 추가
        if (!Array.isArray(rawData)) {
          throw new Error("API 응답이 배열 형식이 아닙니다.");
        }

        const formattedData = rawData.reduce((acc, item) => {
          if (!item.category) return acc;

          const r2Keys = item.r2Keys || [];

          if (pageType === "home") {
            acc[item.category] = {
              category: item.category,
              title: item.title,
              caption: item.caption,
              mainImageUrls: r2Keys
                .slice(0, 2)
                .map((key) => `${IMAGE_API_BASE}/${key}`),
              subImageUrls: r2Keys
                .slice(2, 4)
                .map((key) => `${IMAGE_API_BASE}/${key}`),
              r2Keys,
            };
          } else if (pageType === "photos") {
            acc[item.category] = {
              category: item.category,
              imageUrls: r2Keys.map((key) => `${IMAGE_API_BASE}/${key}`),
            };
          }

          return acc;
        }, {});

        setData(formattedData);
        setError(null);
      } catch (err) {
        if (isMounted) {
          console.error(`${pageType} 데이터 로딩 실패:`, err);
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchGalleryData();

    return () => {
      isMounted = false;
    };
  }, [pageType]);

  return { data, isLoading, error };
}
