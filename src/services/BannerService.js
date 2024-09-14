import httpAxios from '../httpAxios';

const BannerService = {
    // Admin
    getList: async () => {
        const result = await httpAxios.get('banner');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`banner/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('banner/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`banner/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`banner/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`banner/destroy/${id}`);
        return result.data;
    },

    // Home
    getListSlider: async (position, limit = 5) => {
        const result = await httpAxios.get(`banner-list/${position}/${limit}`);
        return result.data;
    },
};

export default BannerService;
