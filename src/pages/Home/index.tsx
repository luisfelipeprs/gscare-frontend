// import BoxInfo from "../../components/BoxInfo";
import BoxInfo from "../../components/BoxInfo";
import Footer from "../../components/Footer";
import PreFooter from "../../components/PreFooter";
import Homepage from "../../components/Homepage";
import Navbar from "../../components/Navbar";
import QuestionCard from "../../components/QuestionCard";
import { HomeContainer } from "./styled";
import ServiceCard from "../../components/ServiceCard";

function Home() {
  return (
      <>
        <Navbar/>
          <HomeContainer>
            <Homepage/>
            <BoxInfo/>
            <QuestionCard />
            <ServiceCard
              description="test"
              img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
              link="/"
              title="adsdasdas"
            />
          </HomeContainer>
        <PreFooter />
        <Footer />
      </>
    )
}
export default Home;
