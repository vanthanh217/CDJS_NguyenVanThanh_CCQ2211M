import { Link } from 'react-router-dom';
import {
    FacebookIcon,
    IconHome,
    IconMail,
    IconShare,
    InstagramIcon,
    TikTokIcon,
    TwitterIcon,
} from '../../../components/icons';

const Footer = () => {
    return (
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
                        Địa chỉ: Xóm 3, Quỳnh Ngọc I, Eana, Krông Ana, Đăk Lăk
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
    );
};

export default Footer;
