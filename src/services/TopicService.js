import httpAxios from '../httpAxios';

const TopicService = {
    // Admin
    getList: async () => {
        const result = await httpAxios.get('topic');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`topic/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('topic/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`topic/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`topic/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`topic/destroy/${id}`);
        return result.data;
    },

    // Home
    getAllTopic: async () => {
        const result = await httpAxios.get('topic-all');
        return result.data;
    },
    getItemBySlug: async (slug) => {
        const result = await httpAxios.get(`topic-item/${slug}`);
        return result.data;
    },
};

export default TopicService;
