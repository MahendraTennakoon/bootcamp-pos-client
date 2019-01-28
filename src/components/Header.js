import React from 'react';


const Header = (props) => {
    return (
        <div className="header_bar">
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Point of Sales System'
};

export default Header;