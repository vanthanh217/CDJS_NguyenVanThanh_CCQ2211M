import { Link } from 'react-router-dom';
import { IconArrow } from '../icons';
import PropTypes from 'prop-types';

const BreadCrumbs = (props) => {
    const { slug = '' } = props;
    const listBreadcrumb = [
        {
            url: '/',
            label: 'Trang chủ',
        },
    ];
    const slugParts = slug.split('/').slice(1);
    for (const slugPart of slugParts) {
        const label = slugPart;
        const url = `/${slugParts
            .slice(0, slugParts.indexOf(slugPart) + 1)
            .join('/')}`;
        listBreadcrumb.push({ label, url });
    }

    const breadcrumbItem = 'flex items-center gap-x-2';
    return (
        <section className="my-8">
            <ul className="flex items-center gap-x-7 rounded-[10px] p-5 bg-white text-lightGray flex-wrap shadow-box">
                {listBreadcrumb.map((item, index) => (
                    <li className={breadcrumbItem} key={index}>
                        <Link to={item.url}>{item.label}</Link>
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
    slug: PropTypes.string,
};

export default BreadCrumbs;
