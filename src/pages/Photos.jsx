import CategoryItem from "../components/CategoryItem";
import { useCategoryData } from "../hooks/useCategoryData";
import "../styles/Photos.scss";

function Photos() {
  const { data, isLoading } = useCategoryData("photos");

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <article className="photos-container">
      {data.egypt && (
        <CategoryItem
          category={data.egypt.category}
          imageUrls={data.egypt.imageUrls}
        />
      )}

      {/* {data.turkey && (
        <CategoryItem
          category={data.turkey.category}
          imageUrls={data.turkey.imageUrls}
        />
      )} */}

      <CategoryItem
        category={data.turkey?.category}
        imageUrls={data.turkey?.imageUrls}
      />
      <CategoryItem
        category={data.turkey?.category}
        imageUrls={data.turkey?.imageUrls}
      />
      <CategoryItem
        category={data.turkey?.category}
        imageUrls={data.turkey?.imageUrls}
      />
      <CategoryItem
        category={data.turkey?.category}
        imageUrls={data.turkey?.imageUrls}
      />
    </article>
  );
}

export default Photos;
