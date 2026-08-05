import { useState, useEffect } from "react";

const IMAGE_API_BASE = "/api/images";

/**
 * @param {"home" | "photos"} pageType
 */

export function useGalleryData(pageType) {
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

        if (pageType === "home") {
          const formattedHomeData = rawData.reduce((acc, item) => {
            const r2Keys = item.r2Keys || [];

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
            return acc;
          }, {});

          setData(formattedHomeData);
        } else if (pageType === "photos") {
          // [Photos 전용]
          const formattedPhotosData = rawData.reduce((acc, item) => {
            const r2Keys = item.r2Keys || [];

            acc[item.category] = {
              category: item.category,
              imageUrls: r2Keys.map((key) => `${IMAGE_API_BASE}/${key}`),
            };
            return acc;
          }, {});

          setData(formattedPhotosData);
        }

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
