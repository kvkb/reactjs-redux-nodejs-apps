import { combineReducers } from 'redux'
import addArticleReducer from './add-articles-reducer';

const rootReducer = combineReducers({
    toAddArticle: addArticleReducer
});

export default rootReducer;