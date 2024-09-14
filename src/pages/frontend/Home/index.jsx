import Slider from './Slider';
import ProductNew from './ProductNew';
import ProductFlashSale from './ProductFlashSale';
import ProductCategory from './ProductCategory';
import HomePost from './HomePost';
import ProductBrandHome from './ProductBrandHome';

const Home = () => {
    return (
        <main className="home-wrapper">
            <Slider />
            <div className="container mx-auto my-10">
                {/* Sale product */}
                <ProductFlashSale />
                {/* Product new */}
                <ProductNew />
                {/* Product brand */}
                <ProductBrandHome />
                {/* Product category */}
                <ProductCategory />
                {/* Post */}
                <HomePost />
            </div>
        </main>
    );
};

export default Home;
