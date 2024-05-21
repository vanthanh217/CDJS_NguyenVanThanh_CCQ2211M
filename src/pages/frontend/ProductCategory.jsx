import { useLocation } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import ProductItem from '../../components/common/product/ProductItem';
import ProductWrap from '../../components/common/product/ProductWrap';
import SidebarProduct from '../../components/common/product/SidebarProduct';
import { Dropdown } from '../../components/form';
import { Pagination } from '../../components/pagination';
import data from '../../data.json';
import strToSlug from '../../utils/strToSlug';

const listSorted = [
    'A → Z',
    'Z → A',
    'Giá tăng dần',
    'Giá giảm dần',
    'Sản phẩm mới',
];

const ProductCategory = () => {
    const { products, category } = data;
    const location = useLocation();
    const cateSlug = location.pathname.split('/').pop();
    let openPagination = false;
    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={location.pathname} />
            <section className="flex gap-x-10">
                <aside className="w-1/4">
                    <SidebarProduct title="Danh mục" list={category} />
                </aside>
                <div className="flex-1">
                    <div className="flex justify-end mb-5">
                        <Dropdown
                            selectedText="Mặc định"
                            items={listSorted}
                            size="S"
                            className="w-32 text-sm text-text2nd"
                        />
                    </div>
                    <ProductWrap cols={3}>
                        {products
                            .filter(
                                (item) => strToSlug(item.category) === cateSlug,
                            )
                            .slice(0, 12)
                            .map((item, index) => (
                                <ProductItem
                                    key={index}
                                    url={item.url}
                                    title={item.title}
                                    price={item.price}
                                    salePrice={item.salePrice}
                                />
                            ))}
                    </ProductWrap>
                    {openPagination && <Pagination />}
                </div>
            </section>
        </main>
    );
};

export default ProductCategory;
