import axios from 'axios'
import { GET_ERRORS, GET_PRODUCTS, GET_PRODUCT } from './types'


// export const createProduct = {product, history} = async dispatch => 
// {
//     try {
//         const res = await axios.post("http://127.0.0.1:8000/api/tasks", product) 
//         history.push("/dashboard");
//     }catch(err){
//         dispatch({
//             type:GET_ERRORS,
//             payload: err.response.data
//         });
//     }

// };

export const createProduct = (product, history) => async dispatch => {
    // try {
    //     await axios.post('http://127.0.0.1:8000/api/tasks', product);
    //     history.push('/dashboard');
    //     dispatch({
    //         type: GET_ERRORS,
    //         payload: {},
    //     });
    // } 
    try {
        const res = await axios.post("http://127.0.0.1:8000/api/tasks", product) 
                 history.push("/dashboard");
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};


export const getProducts = () => async dispatch => {
    const res = await axios.get('http://127.0.0.1:8000/api/tasks');
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
    });
};