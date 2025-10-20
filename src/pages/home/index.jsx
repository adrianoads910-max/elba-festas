import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import BannerSlider from "../../components/slider";

export const HomePage = () => {

    return (
        <main>
            <header>
                <Navbar/>
            </header>
            <div className="pt-20">
                <BannerSlider />
      
            </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, omnis fugiat ad amet voluptate minima facere accusamus blanditiis fugit magni, dignissimos excepturi provident perferendis quae obcaecati voluptatum voluptatem aut quam?</p>
        </main>
    )
}