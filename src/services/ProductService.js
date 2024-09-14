import httpAxios from '../httpAxios';

const ProductService = {
    // Admin
    getList: async () => {
        const result = await httpAxios.get('product');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`product/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('product/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`product/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`product/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`product/destroy/${id}`);
        return result.data;
    },

    // Home
    getListProductNew: async (limit = 5) => {
        const result = await httpAxios.get(`product-new/${limit}`);
        return result.data;
    },
    getListProductFlashSale: async (limit = 5) => {
        const result = await httpAxios.get(`product-flash-sale/${limit}`);
        return result.data;
    },
    getAllProduct: async (limit = 1000) => {
        const result = await httpAxios.get(`product-all/${limit}`);
        return result.data;
    },
    getAllProductByCategory: async (categoryId, limit = 1000) => {
        const result = await httpAxios.get(
            `product-category/${categoryId}/${limit}`,
        );
        return result.data;
    },
    getProductBySlug: async (slug, limitother = 5) => {
        const result = await httpAxios.get(
            `product-detail/${slug}/${limitother}`,
        );
        return result.data;
    },
    getAllProductByBrand: async (brandId, limit = 1000) => {
        const result = await httpAxios.get(`product-brand/${brandId}/${limit}`);
        return result.data;
    },
    // Search Product
    getAllProductByQuery: async (query) => {
        const result = await httpAxios.get(`search?query=${query}`);
        return result.data;
    },
    // Filter Product
    getListProductByFilter: async (query) => {
        const result = await httpAxios.get('params', {
            params: query,
        });
        return result.data;
    },
    getAllProductBrandByFilter: async (brandId, query) => {
        const result = await httpAxios.get(`brand-params/${brandId}`, {
            params: query,
        });
        return result.data;
    },
    getAllProductCategoryByFilter: async (categoryId, query) => {
        const result = await httpAxios.get(`category-params/${categoryId}`, {
            params: query,
        });
        return result.data;
    },
};

export default ProductService;
