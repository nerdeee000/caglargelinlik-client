import axios from 'axios';

const baseURL = 'http://localhost:8000/api/product/';

const getProduct = async () => {
    const response = await axios.get(baseURL + 'product-list');
    return response.data;
}

const postComment = async (values, id) => {
    const { name, content, point } = values;
    console.log(values)
    const response = await axios.put(baseURL + 'product-comment-create/' + `${id}`, { name:name, content:content, point:point});
    return response.data;
}

const getProductDetail = async (id) => {
    const response = await axios.get(baseURL + 'product-detail/' + `${id}`);
    return response.data;
}

const product = { getProduct, getProductDetail, postComment };

export default product;