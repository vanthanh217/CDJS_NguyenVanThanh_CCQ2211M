import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/breadcrumb';
import ProductItem from './common/product/ProductItem';
import ProductWrap from './common/product/ProductWrap';
import { Pagination } from '../../components/pagination';
import { BrandService, CategoryService, ProductService } from '../../services';
import usePagination from '../../hooks/usePagination';
import ProductItemTypeList from './common/product/ProductItemTypeList';
import HeaderProductAction from './common/product/HeaderProductAction';
import SearchFilter from './common/product/SearchFilter';
import PriceFilter from './common/product/PriceFilter';
import AccordionFilter from './common/product/AccordionFilter';

const Product = () => {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [listLayout, setListLayout] = useState(false);
    const [filters, setFilters] = useState({
        brand: [],
        category: [],
    });
    const itemsPerPage = listLayout ? 7 : 12;
    const {
        records: newProducts,
        totalPage,
        currentPage,
        prevPage,
        nextPage,
        handlePageChange,
    } = usePagination(products, itemsPerPage);

    useEffect(() => {
        (async () => {
            const { brands } = await BrandService.getAllBrand();
            const { categories } = await CategoryService.getAllCategoryChild();
            const { products } = await ProductService.getAllProduct();
            setBrands(brands);
            setCategories(categories);
            setProducts(products);
        })();
    }, [itemsPerPage]);
    useEffect(() => {
        (async () => {
            const response = await ProductService.getListProductByFilter(
                filters,
            );
            setProducts(response.products);
        })();
    }, [filters]);
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
            <BreadCrumbs />
            <section className="flex gap-x-7">
                <aside className="w-[300px]">
                    {/* Search filter */}
                    <SearchFilter onFilter={handleFilterInputChange} />
                    {/* Price filter */}
                    <PriceFilter onFilter={handleFilterInputChange} />
                    {/* Brand filter */}
                    <AccordionFilter
                        title={'Thương hiệu'}
                        list={brands}
                        onFilter={(item, checked) =>
                            handleFilterCheckboxChange('brand', item, checked)
                        }
                    />
                    {/* Category filter */}
                    <AccordionFilter
                        title={'Danh mục'}
                        list={categories}
                        onFilter={(item, checked) =>
                            handleFilterCheckboxChange(
                                'category',
                                item,
                                checked,
                            )
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
                        {newProducts &&
                            newProducts.length > 0 &&
                            newProducts
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
                            handlePageChange={handlePageChange}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            currentPage={currentPage}
                            totalPage={totalPage}
                        />
                    )}
                </div>
            </section>
        </main>
    );
};

export default Product;
