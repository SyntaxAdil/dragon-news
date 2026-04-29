export async function getNewsCategory() {
  try {
    const category = await fetch(
      " https://openapi.programming-hero.com/api/news/categories",
    );
    const data = await category.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getNews(id) {
  try {
    const category = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${id}`,
    );
    const data = await category.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getNewsDeatiles(id) {
  try {
    const category = await fetch(
      `https://openapi.programming-hero.com/api/news/${id}`,
    );
    const data = await category.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBreakingNews() {
  try {
    const category = await fetch(
      `https://openapi.programming-hero.com/api/news/category/01`,
    );
    const data = await category.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
