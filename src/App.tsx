import { Wrapper } from './styles/Header.style.tsx';
import HeaderHome from './components/HeaderHome.tsx';
import BannerHome from './components/BannerHome.tsx';
import BestSeller from './components/BestSeller.tsx';
import SectionCategory from './components/SectionCategory.tsx';
import BestSellerBattery from './components/BestSellerBattery.tsx';
import SoccerBallPromotion from './components/SoccerBallPromotion.tsx';

function App() {
  return (
    <>
      <Wrapper>
        <HeaderHome />
        <BannerHome />
        <BestSeller />
        <SectionCategory/>
        <BestSellerBattery/>
        <SoccerBallPromotion/>

        
      </Wrapper>
    </>
  );
}

export default App;
