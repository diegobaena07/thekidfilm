import { FC, useState } from "react";
import "./Convers.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

const Convers: FC = () => {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="Covers_ImagenesContainer">
                    <div className="Covers_PortadaContainer" onClick={toggleDescription}>
                        <img src="Rectangle 20 (1).png" alt="coverThekidFilm" />
                        {showDescription && (
                            <div className="Covers_Descripcion">
                                <h2>Title primary</h2>
                                <p>
                                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                                    Sed dignissim, metus nec fringilla accumsan.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="Covers_PortadaContainer">
                        <img src="Rectangle 20 (1).png" alt="coverThekidFilm" />
                        <div className="Covers_Descripcion">
                            <h2>Title primary</h2>
                            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.
                                Sed dignissim, metus nec fringilla accumsan.
                            </p>
                        </div>
                    </div>
                    <div className="Covers_PortadaContainer">
                        <img src="Rectangle 20 (1).png" alt="coverThekidFilm" />
                        <div className="Covers_Descripcion">
                            <h2>Title primary</h2>
                            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.
                                Sed dignissim, metus nec fringilla accumsan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Covers_ImagenesContainer">
                    <div className="Covers_PortadaContainer">
                        <img src="Rectangle 20 (1).png" alt="coverThekidFilm" />
                        <div className="Covers_Descripcion">
                            <h2>Title primary</h2>
                            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.
                                Sed dignissim, metus nec fringilla accumsan.
                            </p>
                        </div>
                    </div>
                    <div className="Covers_PortadaContainer">
                        <img src="Rectangle 20 (1).png" alt="coverThekidFilm" />
                        <div className="Covers_Descripcion">
                            <h2>Title primary</h2>
                            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.
                                Sed dignissim, metus nec fringilla accumsan.
                            </p>
                        </div>
                    </div>
                    <div className="Covers_PortadaContainer">
                        <img src="Rectangle 20 (1).png" alt="coverThekidFilm" />
                        <div className="Covers_Descripcion">
                            <h2>Title primary</h2>
                            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.
                                Sed dignissim, metus nec fringilla accumsan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export { Convers }