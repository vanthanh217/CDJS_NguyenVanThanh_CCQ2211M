import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/breadcrumb';
import { useLocation } from 'react-router-dom';
import { ProductService } from '../../services';
import ProductWrap from './common/product/ProductWrap';
import ProductItem from './common/product/ProductItem';
import usePagination from '../../hooks/usePagination';
import { Pagination } from '../../components/pagination';

const SearchResult = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const itemsPerPage = 15;
    const {
        records: newProducts,
        currentPage,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
    } = usePagination(products, itemsPerPage);

    useEffect(() => {
        (async () => {
            const response = await ProductService.getAllProductByQuery(query);
            setProducts(response.products);
        })();
    }, [query]);

    return (
        <main className="container mx-auto mb-10">
            <BreadCrumbs title={'Tìm kiếm'} slug={'#'} />
            <section className="mb-10">
                <ProductWrap cols={5}>
                    {newProducts &&
                        newProducts.length > 0 &&
                        newProducts.map((item, index) => (
                            <ProductItem key={index} item={item} />
                        ))}
                </ProductWrap>
            </section>
            {totalPage > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    handlePageChange={handlePageChange}
                />
            )}
        </main>
    );
};

export default SearchResult;
