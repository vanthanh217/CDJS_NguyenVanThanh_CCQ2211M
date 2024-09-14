import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import ProductItem from './common/product/ProductItem';
import ProductWrap from './common/product/ProductWrap';
import SidebarProduct from './common/product/SidebarProduct';
import { Pagination } from '../../components/pagination';
import { useEffect, useState } from 'react';
import { BrandService, CategoryService, ProductService } from '../../services';
import usePagination from '../../hooks/usePagination';
import HeaderProductAction from './common/product/HeaderProductAction';
import ProductItemTypeList from './common/product/ProductItemTypeList';
import SearchFilter from './common/product/SearchFilter';
import PriceFilter from './common/product/PriceFilter';
import AccordionFilter from './common/product/AccordionFilter';

const ProductCategory = () => {
    const { slug } = useParams();
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({});
    const [productsCate, setProductsCate] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [listLayout, setListLayout] = useState(false);
    const [filters, setFilters] = useState({
        brand: [],
        category: [],
    });
    const itemsPerPage = listLayout ? 7 : 12;
    const {
        records: newProductsCate,
        currentPage,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
    } = usePagination(productsCate, itemsPerPage);

    useEffect(() => {
        (async () => {
            const { category } = await CategoryService.getItemBySlug(slug);
            setCategory(category);
        })();
    }, [slug]);
    useEffect(() => {
        (async () => {
            const { brands } = await BrandService.getAllBrand();
            const { categories } = await CategoryService.getAllByParentId(
                category?.id,
            );
            const { products } = await ProductService.getAllProductByCategory(
                category?.id,
            );
            setBrands(brands);
            setCategories(categories);
            setProductsCate(products);
        })();
    }, [category?.id]);
    useEffect(() => {
        (async () => {
            const response = await ProductService.getAllProductCategoryByFilter(
                category?.id,
                filters,
            );
            setProductsCate(response.products);
        })();
    }, [category?.id, filters]);
    const handleFilterInputChange = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    };
    const handleFilterCheckboxChange = (type, item, checked) => {
        setFilters((prevFilters) => {
            let newFilters = { ...prevFilters };
            newFilters[type] = checked
                ? [...newFilters[type], item]
                : newFilters[type].filter((f) => f !== item);
            return newFilters;
        });
    };
    const handleSortProduct = (a, b) => {
        const priceA = a.pricesale > 0 ? a.pricesale : a.price;
        const priceB = b.pricesale > 0 ? b.pricesale : b.price;
        if (selectedSort === 'aToZ') {
            return a.name > b.name ? 1 : -1;
        } else if (selectedSort === 'zToA') {
            return a.name < b.name ? 1 : -1;
        } else if (selectedSort === 'priceASC') {
            return priceA > priceB ? 1 : -1;
        } else if (selectedSort === 'priceDESC') {
            return priceA < priceB ? 1 : -1;
        } else if (selectedSort === 'newProduct') {
            return a.created_at > b.created_at ? 1 : -1;
        }
    };

    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs title={category?.name} />
            <section className="flex gap-x-7">
                <aside className="w-[300px]">
                    {categories.length > 0 && (
                        <SidebarProduct
                            title="Danh mục"
                            link="/danh-muc"
                            list={categories}
                        />
                    )}
                    {/* Search filter */}
                    <SearchFilter onFilter={handleFilterInputChange} />
                    {/* Price filter */}
                    <PriceFilter onFilter={handleFilterInputChange} />
                    {/* Category filter */}
                    <AccordionFilter
                        title={'Thương hiệu'}
                        list={brands}
                        onFilter={(item, checked) =>
                            handleFilterCheckboxChange('brand', item, checked)
                        }
                    />
                </aside>
                <div className="flex-1">
                    <HeaderProductAction
                        setListLayout={setListLayout}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                    />
                    <ProductWrap cols={listLayout ? 1 : 4}>
                        {newProductsCate &&
                            newProductsCate.length > 0 &&
                            newProductsCate
                                .sort(handleSortProduct)
                                .map((item, index) => {
                                    if (!listLayout) {
                                        return (
                                            <ProductItem
                                                key={index}
                                                item={item}
                                            />
                                        );
                                    } else {
                                        return (
                                            <ProductItemTypeList
                                                key={index}
                                                item={item}
                                            />
                                        );
                                    }
                                })}
                    </ProductWrap>
                    {totalPage > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPage={totalPage}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            handlePageChange={handlePageChange}
                        />
                    )}
                </div>
            </section>
        </main>
    );
};

export default ProductCategory;
