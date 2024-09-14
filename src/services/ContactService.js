import httpAxios from '../httpAxios';

const ContactService = {
    // Admin
    getList: async () => {
        const result = await httpAxios('contact');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios(`contact/show/${id}`);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`contact/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`contact/destroy/${id}`);
        return result.data;
    },

    // Home
    insert: async (myData) => {
        const result = await httpAxios.post('contact/store', myData);
        return result.data;
    },
};

export default ContactService;
