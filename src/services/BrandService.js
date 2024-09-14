import httpAxios from '../httpAxios';

const BrandService = {
    getList: async () => {
        const result = await httpAxios.get('brand');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`brand/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('brand/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`brand/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`brand/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`brand/destroy/${id}`);
        return result.data;
    },

    // Home
    getAllBrand: async () => {
        const result = await httpAxios.get('brand-all');
        return result.data;
    },

    getItemBySlug: async (slug) => {
        const result = await httpAxios.get(`brand-item/${slug}`);
        return result.data;
    },
};

export default BrandService;
