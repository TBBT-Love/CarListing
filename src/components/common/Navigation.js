import React from 'react';

const Navigation = ({ links }) => (
    <div className="Navigation">
        {links.map(link => (
            <a href={link.to}>{link.label}</a>
        ))}
    </div>
);

export default Navigation;
