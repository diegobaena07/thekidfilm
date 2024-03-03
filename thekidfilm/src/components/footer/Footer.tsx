import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer: FC = () => {

    const location = useLocation();

    return (
        <>
            <footer>
                <div className="Footer">
                    <div className="container_Footer">
                        <div className="Footer_LogoMenu">
                            <div className="Footer_Logo">
                                <div>
                                    <img src="THE KID FLIM LOGO variante (3)_2.webp" alt="TheKidFilm" />
                                </div>
                                <div>
                                    <img src="Letras blancas sin fondo_1.webp" alt="TheKidFilm" />
                                </div>
                            </div>
                            <div className="Footer_menu">
                                <ul>
                                    <Link to={"/home"}>
                                        <span className={location.pathname === "/home" ? "actic" : ""}>Home</span>
                                    </Link>
                                    <Link to={"/films"}>
                                        <span className={location.pathname === "/films" ? "actic" : ""}>films</span>
                                    </Link>
                                </ul>
                                <ul>
                                    <Link to={"/covers"}>
                                        <span className={location.pathname === "/covers" ? "actic" : ""}>covers</span>
                                    </Link>
                                    <Link to={"/eventos"}>
                                        <span className={location.pathname === "/eventos" ? "actic" : ""}>eventos</span>
                                    </Link>
                                </ul>
                                <ul>
                                    <Link to={"/ovts"}>
                                        <span className={location.pathname === "/ovts" ? "actic" : ""}>ovts</span>
                                    </Link>
                                    <Link to={"/bts"}>
                                        <span className={location.pathname === "/bts" ? "actic" : ""}>bts</span>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="Footer_copi">
                            <span>© 2024 THE KID FILM COMPANY. Todos los derechos reservados</span>
                        </div>
                        <div className="Footer_IconosRedesSociales">
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
            </footer>
        </>
    )

}

export { Footer }