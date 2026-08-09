import { useEffect, useState } from "react";

export function useCategoryData() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // 👈 error 상태 추가

  useEffect(() => {
    async function fetchGalleryData() {
      try {
        const response = await fetch("/api/gallery");

        if (!response.ok) {
          throw new Error(`서버 응답 에러 (${response.status})`);
        }

        const rawData = await response.json();

        const formattedData = rawData.reduce((acc, item) => {
          if (!item.category) return acc;

          const r2Keys = item.r2Keys || [];
          const allUrls = r2Keys.map((key) => `/api/images/${key}`);

          acc[item.category] = {
            category: item.category,
            title: item.title,
            caption: item.caption,
            mainImageUrls: allUrls[0],
            subImageUrls: allUrls.slice(1, 4),
            imageUrls: allUrls,
          };

          return acc;
        }, {});

        setData(formattedData);
      } catch (err) {
        console.error("갤러리 데이터 로딩 실패:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGalleryData();
  }, []);

  return { data, isLoading, error };
}
