import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";


const Header = (props) => {
    const handleLogOut = () => {
        localStorage.setItem('isAuthenticated', 'false');
        props.history.push('/login');
    };

    return (
        <div className="header_bar">
            <h1>{props.title}</h1>
            <Button floated="right" color='yellow' onClick={handleLogOut}>Log Out</Button>
        </div>
    );
};

Header.defaultProps = {
    title: 'Point of Sales System'
};

export default withRouter(Header);