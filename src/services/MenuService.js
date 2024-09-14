import httpAxios from '../httpAxios';

const MenuService = {
    // Admin
    getList: async () => {
        const result = await httpAxios.get('menu');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`menu/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('menu/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`menu/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`menu/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`menu/destroy/${id}`);
        return result.data;
    },

    // Home
    getListMenu: async (position, parentId, limit) => {
        const result = await httpAxios.get(
            `menu-list/${position}/${parentId}/${limit}`,
        );
        return result.data;
    },
    getListMenuByType: async (position, type, parentId, limit) => {
        const result = await httpAxios.get(
            `menu-list-type/${position}/${type}/${parentId}/${limit}`,
        );
        return result.data;
    },
};

export default MenuService;
