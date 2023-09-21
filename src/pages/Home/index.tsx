// import BoxInfo from "../../components/BoxInfo";
import BoxInfo from "../../components/BoxInfo";
import Footer from "../../components/Footer";
import Homepage from "../../components/Homepage";
import Navbar from "../../components/Navbar";
import QuestionCard from "../../components/QuestionCard";

function Home() {
  return (
      <>
        <Navbar/>
          <Homepage/>
          <BoxInfo/>
          <QuestionCard />
          {/* 
            // * Perguntas? Vamos colocá-lo no caminho certo.
          */}
        <Footer />
      </>
    )
}
export default Home;
