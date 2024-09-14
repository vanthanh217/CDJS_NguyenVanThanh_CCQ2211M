import { useLocation } from 'react-router-dom';
import { Button } from '../../../components/button';
import { IconEdit, IconEye, IconTrash } from '../../../components/icons';
import { Table } from '../../../components/table';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { Input } from '../../../components/form';
import { Pagination } from '../../../components/pagination';
import { useEffect, useState } from 'react';
import BannerService from '../../../services/BannerService';
import { ToggleSwitch } from '../../../components/toogle-switch';
import usePagination from '../../../hooks/usePagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { urlImage } from '../../../config';

const BannerList = () => {
    const { pathname } = useLocation();
    const [banners, setBanners] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const itemsPerPage = 5;
    const {
        records: newBanners,
        totalPage,
        prevPage,
        nextPage,
        handlePageChange,
        currentPage,
    } = usePagination(banners, itemsPerPage);

    useEffect(() => {
        (async () => {
            const res = await BannerService.getList();
            setBanners(res.banners);
            if (res.status === true) toast.success(res.message);
            else toast.error(res.message);
        })();
    }, [isLoad]);

    const handleDeleteItem = async (id) => {
        const result = await BannerService.destroy(id);
        if (result.status === true) {
            toast.success(result.message, {
                autoClose: 750,
                pauseOnHover: false,
            });
            setIsLoad(!isLoad);
        }
    };

    return (
        <>
            <ToastContainer />
            <HeaderContent title={'Banner'} addBtn={true} />
            <Table className="mb-7">
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th className="w-[60px]">Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th className="!text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newBanners &&
                        newBanners.length > 0 &&
                        newBanners.map((banner) => (
                            <tr key={banner.id}>
                                <td>
                                    <Input type="checkbox" className={'!p-0'} />
                                </td>
                                <td>{banner.id}</td>
                                <td className="!pr-[50px] w-[450px]">
                                    {banner.image && (
                                        <img
                                            src={`${urlImage}banner/${banner.image}`}
                                            alt={banner.image}
                                            className="object-cover w-full h-32 rounded-lg max-w-[520px]"
                                        />
                                    )}
                                </td>
                                <td>{banner.name}</td>
                                <td>{banner.position}</td>
                                <td className="w-44">
                                    <div className="flex flex-wrap items-center justify-center gap-2 text-iconText">
                                        <Button
                                            to={`${pathname}/show/${banner.id}`}
                                            kind={'default'}
                                            className={'bg-teal-400 p-[10px]'}
                                        >
                                            <IconEye />
                                        </Button>
                                        <Button
                                            to={`${pathname}/edit/${banner.id}`}
                                            className="p-[10px] bg-sky-400"
                                        >
                                            <IconEdit />
                                        </Button>
                                        <Button
                                            className="bg-textRed p-[10px]"
                                            onClick={() =>
                                                handleDeleteItem(banner.id)
                                            }
                                        >
                                            <IconTrash />
                                        </Button>
                                        <ToggleSwitch
                                            object={BannerService}
                                            status={banner.status}
                                            id={banner.id}
                                            isLoad={isLoad}
                                            setIsLoad={setIsLoad}
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

export default BannerList;
