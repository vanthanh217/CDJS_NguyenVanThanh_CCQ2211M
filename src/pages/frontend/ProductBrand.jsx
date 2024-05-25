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

const ProductBrand = () => {
    const { products, brand } = data;
    const { pathname } = useLocation();
    const brandSlug = pathname.split('/').pop();
    let openPagination = false;
    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs slug={pathname} />
            <section className="flex gap-x-10">
                <aside className="w-1/4">
                    <SidebarProduct
                        title="Thương hiệu"
                        link="/thuong-hieu"
                        list={brand}
                    />
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
                                (item) => strToSlug(item.brand) === brandSlug,
                            )
                            .slice(0, 12)
                            .map((item, index) => (
                                <ProductItem
                                    key={index}
                                    url={item.image}
                                    title={item.name}
                                    price={item.price}
                                    salePrice={item.pricesale}
                                />
                            ))}
                    </ProductWrap>
                    {openPagination && <Pagination />}
                </div>
            </section>
        </main>
    );
};

export default ProductBrand;
