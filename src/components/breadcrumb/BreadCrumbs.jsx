import { Link, useLocation } from 'react-router-dom';
import { IconArrow } from '../icons';
import PropTypes from 'prop-types';

const BreadCrumbs = (props) => {
    const breadcrumbItem = 'flex items-center gap-x-2';
    const { title = '' } = props;
    const { pathname } = useLocation();
    const productPath = ['san-pham', 'danh-muc', 'thuong-hieu'];
    const postPath = ['tin-tuc', 'chu-de'];
    const resourcePath = getResource(pathname)?.resource;
    const titlePath = getResource(pathname)?.title;
    const listBreadcrumb = [
        {
            url: '/',
            title: 'Trang chủ',
        },
    ];

    if (resourcePath) {
        if (productPath.includes(resourcePath)) {
            listBreadcrumb.push({
                url: '/san-pham',
                title: 'Sản phẩm',
            });
            if (titlePath) {
                listBreadcrumb.push({
                    url: '#',
                    title: title,
                });
            }
        } else if (postPath.includes(resourcePath)) {
            listBreadcrumb.push({
                url: '/tin-tuc',
                title: 'Tin tức',
            });
            if (titlePath) {
                listBreadcrumb.push({
                    url: '#',
                    title: title,
                });
            }
        } else {
            listBreadcrumb.push({
                url: '#',
                title: title || '',
            });
        }
    }

    function getResource(url) {
        const regex = /[^\\/]+/g;
        const match = url.match(regex);
        if (match) {
            const resource = match[0];
            const title = match[1];
            return { resource, title };
        }
        return null;
    }

    return (
        <section className="my-8">
            <ul className="flex items-center gap-x-7 rounded-[10px] p-5 bg-white text-text2nd flex-wrap shadow-box">
                {listBreadcrumb.map((item, index) => (
                    <li className={breadcrumbItem} key={index}>
                        <Link to={item.url}>{item.title}</Link>
                        {index < listBreadcrumb.length - 1 && (
                            <span>
                                <IconArrow />
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

BreadCrumbs.propTypes = {
    title: PropTypes.string,
};

export default BreadCrumbs;
