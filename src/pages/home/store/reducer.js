import { fromJS } from 'immutable'
import {CHANGE_HOME_DATA,ADD_ARTICLE_LIST,TOGGLE_SCROLL_TOP} from './constants'

const defaultState = fromJS({
    topicList:[],
    recommendList:[],
    articleList:[],
    showScroll:false
});
const changeHomeData = (state,action) =>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
    })
}

const addArticleList = (state,action) =>{
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}

export default (state = defaultState,action) => { 
    switch(action.type){
        case CHANGE_HOME_DATA:
            return changeHomeData(state,action)
        case ADD_ARTICLE_LIST:
            return addArticleList(state,action)
        case TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default: return state;
    }
    
}