import React, { FC } from "react";
import "./Header.css";

const Header: FC = () => {

    return (
        <>
            <header>
                <div className="Header">
                    <div className="container_header">
                        <div className="Header_Logo">
                            <img src="THE KID FLIM LOGO_3.webp" alt="THE KID FLIM" />
                        </div>
                        <div className="Header_menu">
                            <nav>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">films</a></li>
                                    <li><a href="#">covers</a></li>
                                    <li><a href="#">eventos</a></li>
                                    <li><a href="#">ovts</a></li>
                                    <li><a href="#">bts</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="Header_IconosRedesSociales">
                            <button className='BtnRedSocial'>
                                <i className="fa-brands fa-youtube"></i>
                            </button>
                            <button className='BtnRedSocial'>
                                <i className="fa-brands fa-tiktok"></i>
                            </button>
                            <button className='BtnRedSocial'>
                                <i className="fa-brands fa-instagram"></i>
                            </button>
                            <button className='BtnRedSocial'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export { Header }