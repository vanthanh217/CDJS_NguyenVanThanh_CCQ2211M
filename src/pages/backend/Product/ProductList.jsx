import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import { ToggleSwitch } from '../../../components/toogle-switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePagination from '../../../hooks/usePagination';
import { urlImage } from '../../../config';
import { ProductService } from '../../../services';

const ProductList = () => {
    const { pathname } = useLocation();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerPage = 7;
    const {
        records: newProducts,
        totalPage,
        nextPage,
        prevPage,
        handlePageChange,
        currentPage,
    } = usePagination(products, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await ProductService.getList();
            setProducts(res.products);
            if (res.status === true)
                toast.success(res.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
            else
                toast.error(res.message, {
                    autoClose: 1500,
                    pauseOnHover: false,
                });
        })();
    }, [isLoading]);

    const handleDeleteItem = async (id) => {
        const result = await ProductService.destroy(id);
        if (result.status === true) {
            toast.success(result.message, {
                autoClose: 750,
                pauseOnHover: false,
            });
            setIsLoading(!isLoading);
        }
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title="Product" addBtn={true} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Product</th> {/*Image, Category and Name */}
                        <th>Brand</th>
                        <th className="w-44 !text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newProducts &&
                        newProducts.length > 0 &&
                        newProducts.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <Input type="checkbox" className={'!p-0'} />
                                </td>
                                <td>{product.id}</td>
                                <td className="!pr-[50px] w-[620px]">
                                    <div className="flex items-center gap-x-3">
                                        <img
                                            src={`${urlImage}product/${product.image}`}
                                            alt={product.image}
                                            className="w-[80px] h-[75px] rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col flex-1 gap-y-2">
                                            <p className="text-sm text-text2nd">
                                                {product.category_name}
                                            </p>
                                            <h3 className="font-medium text-textPrimary text-wrap">
                                                {product.name}
                                            </h3>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.brand_name}</td>
                                <td>
                                    <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                        <Button
                                            to={`${pathname}/show/${product.id}`}
                                            className="p-[10px] bg-teal-400"
                                        >
                                            <IconEye />
                                        </Button>
                                        <Button
                                            to={`${pathname}/edit/${product.id}`}
                                            className="p-[10px] bg-sky-400"
                                        >
                                            <IconEdit />
                                        </Button>
                                        <Button
                                            className="bg-textRed p-[10px]"
                                            onClick={() =>
                                                handleDeleteItem(product.id)
                                            }
                                        >
                                            <IconTrash />
                                        </Button>
                                        <ToggleSwitch
                                            object={ProductService}
                                            status={product.status}
                                            id={product.id}
                                            isLoad={isLoading}
                                            setIsLoad={setIsLoading}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            {totalPage > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    handlePageChange={handlePageChange}
                />
            )}
        </>
    );
};

export default ProductList;
