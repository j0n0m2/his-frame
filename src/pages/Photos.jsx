import CategoryItem from "../components/CategoryItem";
import { useCategoryData } from "../hooks/useCategoryData";
import "../styles/Photos.scss";

function Photos() {
  const { data, isLoading } = useCategoryData();

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <article className="photos-container">
      <CategoryItem
        category={data.egypt.category}
        imageUrls={data.egypt.imageUrls}
      />
      <CategoryItem
        category={data.hawaii.category}
        imageUrls={data.hawaii.imageUrls}
      />
      <CategoryItem
        category={data.taiwan.category}
        imageUrls={data.taiwan.imageUrls}
      />
      <CategoryItem
        category={data.seoul.category}
        imageUrls={data.seoul.imageUrls}
      />
      <CategoryItem
        category={data.usa.category}
        imageUrls={data.usa.imageUrls}
      />
    </article>
  );
}

export default Photos;
