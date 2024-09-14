import httpAxios from '../httpAxios';

const PostService = {
    // Admin
    getList: async () => {
        const result = await httpAxios.get('post');
        return result.data;
    },
    getById: async (id) => {
        const result = await httpAxios.get(`post/show/${id}`);
        return result.data;
    },
    insert: async (myData) => {
        const result = await httpAxios.post('post/store', myData);
        return result.data;
    },
    update: async (id, myData) => {
        const result = await httpAxios.post(`post/update/${id}`, myData);
        return result.data;
    },
    updateStatus: async (id) => {
        const result = await httpAxios.get(`post/status/${id}`);
        return result.data;
    },
    destroy: async (id) => {
        const result = await httpAxios.delete(`post/destroy/${id}`);
        return result.data;
    },

    // Home
    getAllPost: async (type, limit = 1000) => {
        const result = await httpAxios.get(`post-all/${type}/${limit}`);
        return result.data;
    },
    getListLatestPosts: async (type, limit) => {
        const result = await httpAxios.get(`post-new/${type}/${limit}`);
        return result.data;
    },
    getPostDetail: async (slug, limitOther = 10) => {
        const result = await httpAxios.get(`post-detail/${slug}/${limitOther}`);
        return result.data;
    },
    getAllPostByTopic: async (topicId, limit = 10) => {
        const result = await httpAxios.get(`post-topic/${topicId}/${limit}`);
        return result.data;
    },
};

export default PostService;
