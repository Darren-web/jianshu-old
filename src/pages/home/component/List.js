import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';


class List extends PureComponent {
    render() {
        let { list,getMoreList,page } = this.props
        return (
            <div>
                {
                    list.map((item,index) => (
                        <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                <img alt='' className='pic' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page){
        console.log("page",page)
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps,mapDispatch)(List);