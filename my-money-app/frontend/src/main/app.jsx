import Header from '../common/template/header';
import React from "react";
import SiderBar from '../common/template/siderBar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/messages';

export default props => {
    return (
        <div className="wrapper">
            <Header></Header>
            <SiderBar></SiderBar>
            <div className='content-wrapper'>
                {props.children}
            </div>
            <Footer></Footer>
            <Messages></Messages>
        </div>
    )
}