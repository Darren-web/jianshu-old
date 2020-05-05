import axios from 'axios';
import {CHANGE_HOME_DATA,ADD_ARTICLE_LIST,TOGGLE_SCROLL_TOP} from './constants'
import { fromJS } from 'immutable';


const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        })
    }
}

export const addHomeList = (list,nextPage) => ({
    type:ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
    }
}
export const toggleTopShow = (show) =>({
    type: TOGGLE_SCROLL_TOP,
    show
})