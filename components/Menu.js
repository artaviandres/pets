import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu__container">
                <div className="menu__logo">
                    logo
                </div>
                <div className="menu__search">
                    <div className="menu__search--icon">
                        <span>
                            <FaSearch size={20} color={'gray'} />
                        </span>
                    </div>
                    <div className="menu__search--input">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div>
                    
                </div>
                <style jsx>{`
                    .menu__container {
                        background-color: white;
                        width: 100vw;
                        height: 80px;
                        border-bottom: 1px solid #DEDEDE;
                        line-height: 80px;
                        padding: 0 30px;
                    }

                    .menu__logo {
                        float: left;
                        height: 100%;
                    }
                    
                    .menu__search {
                        height: 60%;
                        width: 400px;
                        margin-left: 30%;
                        border: 1px solid #EAEAEA;
                    }

                    .menu__search--icon {
                        width: 10%;
                        height: 100%;
                        background-color: #EAEAEA;
                        float: left;
                        line-height: 40px;
                    }

                    .menu__search--icon span {
                        display: block;
                        height: 100%;
                        margin-left: 20%;
                    }

                    .menu__search--input {
                        width: 90%;
                        height: 100%;
                        float: left;
                    }

                    input {
                        width: 300px;
                        height: 30px;
                        font-size: 11px;
                        border: none;
                        padding-left: 15px;
                        display: block;
                        margin-top: 2%;
                        background-color: transparent;
                    }

                    input:focus {
                        outline-width: 0;
                    }
                `}</style>
            </div>
        )
    }
}

export default Menu;