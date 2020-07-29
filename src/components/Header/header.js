import React from 'react';
import { Button } from 'react-bootstrap';

import './header.scss';


function Header() {
    return (
        <div className="header-section">
            <div className="inner-box">
                <Button className="header-items">Employees</Button>
                <Button className="header-items">Add Employee</Button>
            </div>
        </div>
    )
}

export default Header