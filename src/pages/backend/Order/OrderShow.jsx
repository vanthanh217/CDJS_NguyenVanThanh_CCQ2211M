import { useParams } from 'react-router-dom';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { useEffect, useState } from 'react';
import { OrderService, ProductService } from '../../../services';
import { urlImage } from '../../../config';

const OrderShow = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const { order } = await OrderService.getById(id);
            setOrder(order);
        })();
    }, [id]);
    useEffect(() => {
        (async () => {
            const { product } = await ProductService.getById(order?.product_id);
            setProduct(product);
        })();
    }, [order?.product_id]);
    const createdAt = order?.createdAt;
    const date = new Date(createdAt);
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();
    const formatDate = `${day}/${month}/${year}`;

    return (
        <>
            <HeaderContent title={'Order detail'} />
            <section>
                {/* Customer information */}
                <div className="w-1/2 p-5 mb-10 bg-white shadow-box rounded-xl">
                    <div className="flex items-center text-lg">
                        <h6 className="w-44 text-text2nd">Order id:</h6>
                        <span className="font-medium">{order?.orderId}</span>
                    </div>
                    <div className="flex items-center text-lg">
                        <h6 className="w-44 text-text2nd">Order created at:</h6>
                        <span className="font-medium">{formatDate}</span>
                    </div>
                    <div className="flex items-center text-lg">
                        <h6 className="w-44 text-text2nd">Customer id:</h6>
                        <span className="font-medium">{order?.userId}</span>
                    </div>
                    <div className="flex items-center text-lg">
                        <h6 className="w-44 text-text2nd">Customer name:</h6>
                        <span className="font-medium">{order?.name}</span>
                    </div>
                    <div className="flex items-center text-lg">
                        <h6 className="w-44 text-text2nd">Customer email:</h6>
                        <span className="font-medium">{order?.email}</span>
                    </div>
                    <div className="flex items-center text-lg">
                        <h6 className="w-44 text-text2nd">Customer phone:</h6>
                        <span className="font-medium">{order?.phone}</span>
                    </div>
                    <div className="flex items-center text-lg">
                        <h6 className="w-44 text-text2nd">Customer address:</h6>
                        <span className="font-medium">{order?.address}</span>
                    </div>
                </div>
                <div className="w-[90%] p-5 mx-auto bg-white shadow-box rounded-xl">
                    <div className="flex gap-x-7">
                        <div className="size-[300px] rounded-xl overflow-hidden">
                            <img
                                src={`${urlImage}product/${product?.image}`}
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center text-lg">
                                <h6 className="w-44 text-text2nd">
                                    Product id:
                                </h6>
                                <span className="font-medium">
                                    {product?.id}
                                </span>
                            </div>
                            <div className="flex items-center text-lg">
                                <h6 className="w-44 text-text2nd">
                                    Product brand:
                                </h6>
                                <span className="font-medium">
                                    {product?.brandName}
                                </span>
                            </div>
                            <div className="flex items-center text-lg">
                                <h6 className="w-44 text-text2nd">
                                    Product category:
                                </h6>
                                <span className="font-medium">
                                    {product?.categoryName}
                                </span>
                            </div>
                            <div className="flex items-center text-lg">
                                <h6 className="w-44 text-text2nd">
                                    Product name:
                                </h6>
                                <span className="font-medium">
                                    {product?.name}
                                </span>
                            </div>
                            <div className="flex items-center text-lg">
                                <h6 className="w-44 text-text2nd">
                                    Total quantity:
                                </h6>
                                <span className="font-medium">
                                    {order?.qty}
                                </span>
                            </div>
                            <div className="flex items-center text-lg">
                                <h6 className="w-44 text-text2nd">
                                    Total price:
                                </h6>
                                <span className="font-medium">
                                    {`${parseFloat(
                                        order?.amount,
                                    ).toLocaleString('VI-vi')} VNĐ`}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderShow;
