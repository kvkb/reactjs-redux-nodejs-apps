import {DELETE_ARTICLE,deleteArticle} from '../action-types';

const initialState = {
    articles: []
};

const deleteArticleReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_ARTICLE: 
            return {...state, articles:[...state.articles, action.payload]};
        default:
            return state;
    }
};

export default deleteArticleReducer;