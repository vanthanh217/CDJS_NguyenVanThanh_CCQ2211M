import { Link } from 'react-router-dom';
import Logo from './assets/images/Logo.png';
import {
    FacebookIcon,
    IconCart,
    IconCategory,
    IconHome,
    IconMail,
    IconMoon,
    IconSearch,
    IconHeart,
    IconShare,
    IconUser,
    InstagramIcon,
    TikTokIcon,
    TwitterIcon,
} from './components/icons';
import CardItem from './components/card/CardItem';
import useScroll from './hooks/useScroll';
import classNames from './utils/classNames';
import Slider from './components/slide/Slider';
import NewItem from './components/new/NewItem';
import data from '../data.json';

function App() {
    const { active } = useScroll();
    const { category, products, news } = data;
    return (
        <>
            <header
                className={classNames(
                    'relative flex flex-col justify-center p-4 bg-white',
                    active ? 'sticky-top' : '',
                )}
            >
                <div className="flex items-center justify-between">
                    <Link to="/" className="">
                        <img src={Logo} alt="" />
                    </Link>
                    <div className="w-[500px] relative">
                        <input
                            type="text"
                            placeholder="Find collection..."
                            className="w-full bg-[#f0f0f0] pl-3 pr-20 h-[44px] text-sm rounded-xl"
                        />
                        <button className="absolute flex items-center justify-center text-white bg-primary w-14 h-9 rounded-xl top-1 right-[5px]">
                            <IconSearch />
                        </button>
                    </div>
                    <div className="flex items-center justify-between w-[20%]">
                        <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                            <IconMoon />
                        </span>
                        <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                            <IconHeart />
                        </span>
                        <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                            <IconUser />
                        </span>
                        <span className="block p-3 text-2xl text-white cursor-pointer select-none bg-primary rounded-xl">
                            <IconCart />
                        </span>
                    </div>
                </div>
                <div className="h-[1px] my-2 bg-gray-200"></div>
                <div className="flex items-center font-medium">
                    <div className="flex items-center py-[6px] px-4 rounded-xl text-xl uppercase text-white gap-x-3 bg-primary cursor-pointer select-none mr-40">
                        <span>
                            <IconCategory />
                        </span>
                        <span>Category</span>
                    </div>
                    <ul className="flex items-center text-lg uppercase gap-x-10">
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <Slider />
                <div className="w-full max-w-[1200px] mx-auto my-10">
                    {/* Sale product */}
                    <section className="mb-10">
                        <h2 className="mb-3 text-2xl font-semibold text-center uppercase hover:text-primary">
                            <Link to="#">Đồ uống khuyến mãi</Link>
                        </h2>
                        <div className="grid grid-cols-4 gap-x-4">
                            {products
                                .filter((item, index) => index < 4)
                                .map((item, index) => (
                                    <CardItem
                                        key={index}
                                        url={item.url}
                                        title={item.title}
                                        price={item.price}
                                        salePrice={item.salePrice}
                                    />
                                ))}
                        </div>
                    </section>
                    {/* Main product */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-center uppercase hover:text-primary">
                            <Link to="#">Đồ uống ưa thích</Link>
                        </h2>
                        <nav className="py-4 border-y border-y-graySoft my-9">
                            <ul className="flex items-center justify-center uppercase gap-x-12">
                                {category
                                    .filter((item, index) => index < 6)
                                    .map((item) => (
                                        <li
                                            className="cursor-pointer hover:text-primary"
                                            key={item.id}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                        <div className="grid grid-cols-4 gap-[20px_16px]">
                            {products
                                .filter((item, index) => index < 8)
                                .map((item, index) => (
                                    <CardItem
                                        key={index}
                                        url={item.url}
                                        title={item.title}
                                        price={item.price}
                                        salePrice={item.salePrice}
                                    />
                                ))}
                        </div>
                        <div className="text-center">
                            <a
                                href="#"
                                className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                            >
                                Xem thêm
                            </a>
                        </div>
                    </section>
                    {/* News */}
                    <section className="mb-10">
                        <h2 className="mb-5 text-2xl font-semibold text-center uppercase">
                            <a href="#" className="hover:text-primary">
                                Tin tức
                            </a>
                        </h2>
                        <div className="grid grid-cols-3 mb-10 gap-x-5">
                            {/* Blog item */}
                            {news
                                .filter((item, index) => index < 3)
                                .map((item, index) => (
                                    <NewItem
                                        key={index}
                                        url={item.url}
                                        title={item.title}
                                        author={item.author}
                                        date={item.date}
                                        desc={item.desc}
                                    />
                                ))}
                        </div>
                        <div className="text-center">
                            <a
                                href="#"
                                className="inline-block px-5 py-[6px] text-lg text-white bg-primary rounded-xl"
                            >
                                Xem thêm
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="flex flex-col items-center justify-center text-white bg-bgDark">
                <div className="flex items-center justify-around w-full py-10 border-b border-graySoft gap-x-14">
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <h3 className="flex flex-col items-center mb-2 text-2xl gap-y-3">
                            <span className="text-primary">
                                <IconHome />
                            </span>
                            <span>Giờ mở cửa</span>
                        </h3>
                        <div className="flex flex-col gap-y-2">
                            <span>
                                <strong>Thứ 2-6:</strong> 8h00 am - 22h00 pm
                            </span>
                            <span>
                                <strong>Thứ 7-CN:</strong> 9h00 am - 21h00 pm
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="flex flex-col items-center mb-2 text-2xl gap-y-3">
                            <span className="text-primary">
                                <IconMail />
                            </span>
                            <span>Thông tin liên hệ</span>
                        </h3>
                        <span>
                            Địa chỉ: Xóm 3, Quỳnh Ngọc I, Eana, Krông Ana, Đăk
                            Lăk
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="flex flex-col items-center mb-2 text-2xl gap-y-3">
                            <span className="text-primary">
                                <IconShare />
                            </span>
                            <span>Kết nối với chúng tôi</span>
                        </h3>
                        <div className="flex items-center w-full justify-evenly">
                            <span
                                className="rounded-lg w-11 h-11 social-btn"
                                id="facebook"
                            >
                                <FacebookIcon />
                            </span>
                            <span
                                className="rounded-lg w-11 h-11 social-btn"
                                id="instagram"
                            >
                                <InstagramIcon />
                            </span>
                            <span
                                className="rounded-lg w-11 h-11 social-btn"
                                id="tiktok"
                            >
                                <TikTokIcon />
                            </span>
                            <span
                                className="rounded-lg w-11 h-11 social-btn"
                                id="twitter"
                            >
                                <TwitterIcon />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-around w-full p-3">
                    <span>Bản quyền thuộc về Cafein Team</span>
                    <ul className="flex items-center gap-x-10">
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="p-2 hover:text-primary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default App;
