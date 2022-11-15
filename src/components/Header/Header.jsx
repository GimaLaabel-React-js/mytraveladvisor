import React from 'react'

const Header = () => {

    return (
        <nav className="header">
            <h2>My Travel Advisor</h2>
            <div className='header-right'>
                <h4>Explore new places</h4>
                <div>
                    <input type="text" placeholder='Search...'/>
                </div>
                
            </div>
        </nav>        
    )
}

export default Header;