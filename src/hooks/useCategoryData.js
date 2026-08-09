import { useState, useEffect } from "react";

const IMAGE_API_BASE = "/api/images";

export function useCategoryData() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryData() {
      try {
        const response = await fetch("/api/gallery");
        const rawData = await response.json();

        const formattedData = rawData.reduce((acc, item) => {
          if (!item.category) return acc;

          const r2Keys = item.r2Keys || [];
          const allUrls = r2Keys.map((key) => `${IMAGE_API_BASE}/${key}`);

          acc[item.category] = {
            category: item.category,
            title: item.title,
            caption: item.caption,
            mainImageUrl: allUrls[0],
            subImageUrls: allUrls.slice(1, 4),
            imageUrls: allUrls,
          };

          return acc;
        }, {});

        setData(formattedData);
      } catch (err) {
        console.error("갤러리 데이터 로딩 실패:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGalleryData();
  }, []);

  return { data, isLoading };
}
