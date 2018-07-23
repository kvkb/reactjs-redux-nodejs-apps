import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    EDIT_ARTICLE,
    ADD_BLOG,
    DELETE_BLOG,
    EDIT_BLOG
} from './constants';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = id => ({ type: DELETE_ARTICLE, payload: id });
export const editArticle = article => ({ type: EDIT_ARTICLE, payload: {id:article.id, article:article} });
export const addBlog = blog => ({ type: ADD_BLOG, payload: blog });
export const deleteBlog = id => ({ type: DELETE_BLOG, payload: id });
export const editBlog = blog => ({ type: EDIT_BLOG, payload: {id:blog.id, article:blog} });