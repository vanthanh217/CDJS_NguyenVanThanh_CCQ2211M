import httpAxios from '../httpAxios';

const OrderService = {
    getList: async () => {
        const result = await httpAxios('order');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios(`order/show/${id}`);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`order/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`order/destroy/${id}`);
        return result.data;
    },

    // Home
    insert: async (myData) => {
        const result = await httpAxios.post('payment', myData);
        return result.data;
    },
};

export default OrderService;
