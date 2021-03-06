import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import {actionCreators} from './store'
import { BackTop } from './style'

class Home extends PureComponent {
    
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render() {
        let { showScroll } = this.props;
        let { handleScrollTop } = this
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic/>
                    <List/>
                    
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {showScroll ? <BackTop onClick={handleScrollTop}>Top</BackTop> : null}
            </HomeWrapper>
        );
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)

    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch (actionCreators.toggleTopShow(true))
        }else {
            dispatch (actionCreators.toggleTopShow(false))

        }
    }
})
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})
export default connect(mapState,mapDispatchToProps)(Home);