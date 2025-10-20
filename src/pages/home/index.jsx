import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import BannerSlider from "../../components/slider";
import { Footer } from "../../components/footer";

export const HomePage = () => {

    return (
        <main className="bg-amber-50">
            <header>
                <Navbar/>
            </header>
            <div className="pt-20">
                <BannerSlider />
      
            </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, omnis fugiat ad amet voluptate minima facere accusamus blanditiis fugit magni, dignissimos excepturi provident perferendis quae obcaecati voluptatum voluptatem aut quam?</p>
        
            <footer>
                <Footer />
            </footer>
        </main>
    )
}