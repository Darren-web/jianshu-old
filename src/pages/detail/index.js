import React, { Component } from 'react';
import { DetailWrapper,Header,Content } from './style'

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>header</Header>
                <Content>
                    <img alt='' src='//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                </Content>
            </DetailWrapper>
        );
    }
}

export default Detail;