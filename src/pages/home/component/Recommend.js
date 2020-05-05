import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { RecommendWrapper,RecommendItem } from '../style'

class Recommend extends PureComponent {
    render() {
        let { list } = this.props
        return (
            <div>
                <RecommendWrapper>
                    {
                        list.map((item) => (
                            <RecommendItem key={item.get('id')}  imgUrl={item.get('imgUrl')}></RecommendItem>
                        ))
                    }
                </RecommendWrapper>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    list:state.getIn(['home','recommendList'])
})

export default connect(mapStateToProps,null)(Recommend);