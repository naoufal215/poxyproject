import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftContainer from "./layouts/LeftContainer";
import Visualization from "./layouts/visualization/Visualization";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main
        className=" p-12 flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap"
      >
        <LeftContainer />
        <Visualization />
      </main>
      <Footer/>

    </div>
  );
}

export default App;
