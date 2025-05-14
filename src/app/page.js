import Banner from "../components/Banner";
import ProductList from "../components/ProducList";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ProductList />
      </main>
      <Footer />
    </>
  );
}
