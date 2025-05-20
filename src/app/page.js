import Banner from "../components/Banner";
import ProductList from "../components/ProducList";
import TestConsole from "../components/TestConsole";

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <TestConsole />
        <ProductList />
      </main>
    </>
  );
}
