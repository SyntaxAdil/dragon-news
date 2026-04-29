import { redirect } from "next/navigation";

const HomePage = async () => {
  const category_id="01"
  redirect(`/category/${category_id}`);
};

export default HomePage;
