import React from 'react';

const NavBar = () => {
    return (
        <header className="header">
            <h1>ABC</h1>
            <div className="items">
                <div className="items style home"><a href=""><h3>Home</h3></a></div>
                <div className="items elite"><a href=""><h3>Elite</h3></a></div>
                <div className="items luxe"><a href=""><h3>Luxe</h3></a></div>
                <div className="items hair"><a href=""><h3>Hair Spa's</h3></a></div>
                <div className="items search">
                    <select className="city">
                        <option value="">Nungambakam, chennai</option>
                        <option value="">Guindy,chennai</option>
                        <option value="">Anna Nagar, chennai</option>
                    </select>
                </div>
                <div className="items search">
                    <input
                        type="text"
                        placeholder="Search Area"
                        style={{
                            backgroundImage: "url('https://www.freeiconspng.com/uploads/search-icon-png-21.png')",
                            backgroundSize: '20px 20px',
                            backgroundPosition: '200px center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </div>
                <div className="items style login"><a href=""><h3>login</h3></a></div>
                <div className="items signup"><a href=""><h3>Sign Up</h3></a></div>
            </div>
        </header>
    );
};

export default NavBar;
