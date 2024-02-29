import React, { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {

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
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">films</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">covers</a></li>
                                    <li><a href="#">eventos</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">ovts</a></li>
                                    <li><a href="#">bts</a></li>
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