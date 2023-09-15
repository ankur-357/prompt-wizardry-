import "./App.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="z-10 relative flex flex-col items-center overflow-hidden">
      <Header />
      <div className="my-[100px]">
        <Pagination />
        <Footer />
      </div>
    </div>
  );
}
