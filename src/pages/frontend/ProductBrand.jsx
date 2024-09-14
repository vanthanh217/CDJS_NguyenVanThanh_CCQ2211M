import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../../components/breadcrumb';
import ProductItem from './common/product/ProductItem';
import ProductWrap from './common/product/ProductWrap';
import { Pagination } from '../../components/pagination';
import { useEffect, useState } from 'react';
import { BrandService, CategoryService, ProductService } from '../../services';
import usePagination from '../../hooks/usePagination';
import ProductItemTypeList from './common/product/ProductItemTypeList';
import HeaderProductAction from './common/product/HeaderProductAction';
import AccordionFilter from './common/product/AccordionFilter';
import PriceFilter from './common/product/PriceFilter';
import SearchFilter from './common/product/SearchFilter';

const ProductBrand = () => {
    const { slug } = useParams();
    const [brand, setBrand] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsBrand, setProductsBrand] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [listLayout, setListLayout] = useState(false);
    const [filters, setFilters] = useState({
        brand: [],
        category: [],
    });
    const itemsPerPage = listLayout ? 7 : 12;
    const {
        records: newProductsBrand,
        currentPage,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
    } = usePagination(productsBrand, itemsPerPage);

    useEffect(() => {
        (async () => {
            const { brand } = await BrandService.getItemBySlug(slug);
            const { categories } = await CategoryService.getAllCategoryChild();
            setBrand(brand);
            setCategories(categories);
        })();
    }, [slug]);
    useEffect(() => {
        (async () => {
            const { products } = await ProductService.getAllProductByBrand(
                brand?.id,
            );
            setProductsBrand(products);
        })();
    }, [brand?.id]);
    useEffect(() => {
        (async () => {
            const response = await ProductService.getAllProductBrandByFilter(
                brand?.id,
                filters,
            );
            setProductsBrand(response.products);
        })();
    }, [brand?.id, filters]);
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
            <BreadCrumbs title={brand?.name} />
            <section className="flex gap-x-7">
                <aside className="w-[300px]">
                    {/* Search filter */}
                    <SearchFilter onFilter={handleFilterInputChange} />
                    {/* Price filter */}
                    <PriceFilter onFilter={handleFilterInputChange} />
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
                        {newProductsBrand &&
                            newProductsBrand.length > 0 &&
                            newProductsBrand
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

export default ProductBrand;
