import React from 'react'

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>Home</div>
            <div>
                <button>Dark Theme</button>
                <button>Light Theme</button>
            </div>
        </div>
    )
}

export default Navbar