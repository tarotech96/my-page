import instance from "../constants/baseUrl";

export const getPosts = () => instance.get('/list');
export const createPost = (payload) => instance.post('/create', payload);
export const updatePost = (payload) => instance.post('/update', payload);