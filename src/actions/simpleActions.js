import { ADD_POST } from './actionTypes'
import { userService } from 'services/autoOneService';

export const createPost = () => {
    return (dispatch) => {
        return userService.get('/cars')
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const createPostSuccess = (data) => {
    return {
        type: ADD_POST,
        payload: data
    }
};




