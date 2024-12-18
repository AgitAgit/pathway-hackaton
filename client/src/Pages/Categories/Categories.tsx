import GridCategories from "../../Components/GridCategories/GridCategories";

function Categories({setCategoryName}) {
  return (
    <div>
      <GridCategories setCategoryName={setCategoryName} />
    </div>
  );
}

export default Categories;
