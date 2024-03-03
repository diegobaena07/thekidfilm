import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: FC = () => {

    const location = useLocation();

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
                                    <Link to={"/home"}>
                                        <span className={location.pathname === "/home" ? "active-link" : ""}>Home</span>
                                    </Link>
                                    <Link to={"/films"}>
                                        <span className={location.pathname === "/films" ? "active-link" : ""}>films</span>
                                    </Link>
                                    <Link to={"/covers"}>
                                        <span className={location.pathname === "/covers" ? "active-link" : ""}>covers</span>
                                    </Link>
                                    <Link to={"/eventos"}>
                                        <span className={location.pathname === "/eventos" ? "active-link" : ""}>eventos</span>
                                    </Link>
                                    <Link to={"/ovts"}>
                                        <span className={location.pathname === "/ovts" ? "active-link" : ""}>ovts</span>
                                    </Link>
                                    <Link to={"/bts"}>
                                        <span className={location.pathname === "/bts" ? "active-link" : ""}>bts</span>
                                    </Link>
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