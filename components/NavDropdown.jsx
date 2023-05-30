import React from 'react';

const NavDropdown = () => {
    return (
        <div className= 'flex flex-col dropDownProfile'>
            <ul className = 'flex flex-col gap-4'>
                <li>
                    Profile
                </li>
                <li>
                    Sign Out
                </li>
            </ul>
        </div>
    )

}

export default NavDropdown;