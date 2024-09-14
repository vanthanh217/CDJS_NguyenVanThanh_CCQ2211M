import httpAxios from '../httpAxios';

const CategoryService = {
    // Admin
    getList: async () => {
        const result = await httpAxios.get('category');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`category/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('category/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`category/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`category/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`category/destroy/${id}`);
        return result.data;
    },

    //Home
    getAllByParentId: async (parentId) => {
        const result = await httpAxios.get(`category-list/${parentId}`);
        return result.data;
    },
    getAllCategoryChild: async () => {
        const result = await httpAxios.get('category-list-child');
        return result.data;
    },
    getItemBySlug: async (slug) => {
        const result = await httpAxios.get(`category-item/${slug}`);
        return result.data;
    },
};

export default CategoryService;
