import React from 'react';
//import { navigation } from 'components/styles/navigation.scss'
import { Link, MenuItem } from 'react-router-dom';

const Navigation = ({ links }) => (
    <div>
        {links.map(link => (
            <a href={link.to}>{link.label}</a>
            // <Link to={link.to} style={{ textDecoration: 'none' }}>
            //     {/* <MenuItem style={{ paddingLeft: 13 }}>{link.label}</MenuItem> */}
            //     {link.label}
            // </Link>
        ))}
    </div>
);





export default Navigation;

