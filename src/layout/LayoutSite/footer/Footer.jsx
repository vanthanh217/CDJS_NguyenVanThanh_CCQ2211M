import { Link } from 'react-router-dom';
import {
    FacebookIcon,
    IconMail,
    IconPhone,
    InstagramIcon,
    TikTokIcon,
    TwitterIcon,
} from '../../../components/icons';
import { useEffect, useState } from 'react';
import { MenuService } from '../../../services';
import FooterMenu from './FooterMenu';

const Footer = () => {
    const linkStyle =
        "relative inline-block py-1 text-textDark hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[1px] hover:after:bg-textDark hover:after:left-0 hover:after:bottom-[-1px] hover:after:transition-all";
    const h3TitleStyle =
        "relative inline-block mb-4 font-semibold uppercase after:content-[''] after:absolute after:w-3/5 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1";

    const [footerMenu, setFooterMenu] = useState([]);
    const aboutUsList = footerMenu?.filter(
        (item) => !item?.link.startsWith('pages/chinh-sach'),
    );
    const policyList = footerMenu?.filter((item) =>
        item?.link.startsWith('pages/chinh-sach'),
    );

    useEffect(() => {
        (async () => {
            const { menus } = await MenuService.getListMenuByType(
                'footermenu',
                'page',
                0,
                20,
            );
            setFooterMenu(menus);
        })();
    }, []);

    return (
        <footer className="flex flex-col items-center text-white bg-bgDark">
            <div className="flex items-start justify-around w-full py-10 border-b border-graySoft gap-x-14">
                <FooterMenu title="Về chúng tôi" list={aboutUsList} />
                <FooterMenu title="Chính sách" list={policyList} />
                <div>
                    <h3 className={h3TitleStyle}>Liên hệ</h3>
                    <ul className="flex flex-col gap-y-3">
                        <li className="flex items-center gap-x-4">
                            <span className="select-none">
                                <IconMail />
                            </span>
                            <span className={linkStyle}>
                                nguyenvanthanh210704@gmail.com
                            </span>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="select-none">
                                <IconPhone />
                            </span>
                            <span className={linkStyle}>0978684178</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={h3TitleStyle}>Kết nối với chúng tôi</h3>
                    <div className="flex items-center gap-x-4">
                        <Link
                            to={'https://facebook.com/'}
                            className="rounded-lg w-11 h-11 social-btn"
                            id="facebook"
                        >
                            <FacebookIcon />
                        </Link>
                        <Link
                            to={'https://www.instagram.com/'}
                            className="rounded-lg w-11 h-11 social-btn"
                            id="instagram"
                        >
                            <InstagramIcon />
                        </Link>
                        <Link
                            to={'https://www.tiktok.com/'}
                            className="rounded-lg w-11 h-11 social-btn"
                            id="tiktok"
                        >
                            <TikTokIcon />
                        </Link>
                        <Link
                            to={'https://x.com/'}
                            className="rounded-lg w-11 h-11 social-btn"
                            id="twitter"
                        >
                            <TwitterIcon />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full py-3 mx-5 px-7">
                <p>Wynk Gear - Get the Ultimate Gaming Advantage.</p>
                <p>Design by: Nguyễn Văn Thành - 2122110536</p>
            </div>
        </footer>
    );
};

export default Footer;
