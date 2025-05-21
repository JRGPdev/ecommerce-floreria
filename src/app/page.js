import ItemAvailability from "@/components/ItemAvailability";
import Banner from "../components/Banner";
import ProductList from "../components/ProducList";

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <ItemAvailability />
        <ProductList />
      </main>
    </>
  );
}
