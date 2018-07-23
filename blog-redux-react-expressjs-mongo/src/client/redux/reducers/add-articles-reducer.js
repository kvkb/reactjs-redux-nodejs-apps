import {ADD_ARTICLE,addArticle} from '../action-types';

const initialState = {
    articles: []
};

const addArticleReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE: 
            return {...state, articles:[...state.articles, action.payload]};
        default:
            return state;
    }
};

export default addArticleReducer;