import httpAxios from '../httpAxios';

const UserService = {
    // Admin
    getList: async () => {
        const result = await httpAxios.get('user');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`user/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('user/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`user/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`user/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`user/destroy/${id}`);
        return result.data;
    },

    // Home
    signIn: async (email, password) => {
        const result = await httpAxios.post('/sign-in', { email, password });
        return result.data;
    },
    // Sign up
    signUp: async (data) => {
        const result = await httpAxios.post('/sign-up', data);
        return result.data;
    },
};

export default UserService;
