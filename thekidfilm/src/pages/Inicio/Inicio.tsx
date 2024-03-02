import React, { FC } from "react";
import "./Inicio.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

const Inicio: FC = () => {

    return (
        <>
            <Header />
            <div className="container">
                <div className="Inicio_contenedor">
                    <div className="Inicio_Nosotros">
                        <div className="Inicio_LogoPrincipal">
                            <img src="THE KID FLIM LOGO_3.webp" alt="thekidfilm" />
                        </div>
                        <div className="Inicio_sobrenosotrosContainer">
                            <p className="Inicio_SobreNosotros">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem sollicitudin lacus.
                            </p>
                            <button className="Btn_PrincipalFilm">contact us</button>
                        </div>
                    </div>
                    <div className="Inicio_GrupoTrabajo">
                        <img src="FotoInicio.png" alt="GrupoTheKidFilm" />
                    </div>
                </div>
                <div className="Inicio_Branding">
                    <div className="Inicio_Trabajo">
                        <img src="Captura.JPG" alt="GrupoTheKidFilm" />
                    </div>
                    <div className="Inicio_BrandingTitulo">
                        <div className="Inicio_Titulo">
                            <h1>SECONDARY TITTLE GOES HERE</h1>
                        </div>
                        <div>
                            <p className="Inicio_SobreNosotros">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem sollicitudin lacus.
                            </p>
                            <button className="Btn_PrincipalFilm">ACTION BUTTOM</button>
                        </div>
                    </div>
                </div>
                <div className="Inicio_Branding">
                    <div className="Inicio_BrandingTitulo">
                        <div className="Inicio_Titulo">
                            <h1 style={{ textAlign: "end" }}>SECONDARY TITTLE GOES HERE</h1>
                        </div>
                        <div style={{ textAlign: "end" }}>
                            <p className="Inicio_SobreNosotros" style={{ textAlign: "end" }}>
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem sollicitudin lacus.
                            </p>
                            <button className="Btn_PrincipalFilm">ACTION BUTTOM</button>
                        </div>
                    </div>
                    <div className="Inicio_Trabajo">
                        <img src="Captura.JPG" alt="GrupoTheKidFilm" />
                    </div>
                </div>
                <div className="Inicio_Contacto">
                    <h1>CONTACT US</h1>
                    <h3>info@thekidfilmcompany.com</h3>
                </div>
            </div>
            <Footer />
        </>
    )

}

export { Inicio }