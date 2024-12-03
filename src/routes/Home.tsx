
import BannerHome from '../components/BannerHome.tsx'
import BestSeller from '../components/BestSeller.tsx';
import SectionCategory from '../components/SectionCategory.tsx';
import BestSellerBattery from '../components/BestSellerBattery.tsx';
import SoccerBallPromotion from '../components/SoccerBallPromotion.tsx';


const Home = () => {
  return (
    <>
        <BannerHome />
        <BestSeller />
        <SectionCategory/>
        <BestSellerBattery/>
        <SoccerBallPromotion/>
    </>
  )
}

export default Home