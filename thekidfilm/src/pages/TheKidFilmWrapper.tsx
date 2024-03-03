import { FC } from "react"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { TheKidFilmProvider } from "./TheKidFilmContext"
import Home from "./Home";
import { Inicio } from "./Inicio/Inicio"
import { Films } from "./Films/Films";
import { Convers } from "./Convers/Convers";
import { Eventos } from "./Eventos/Eventos";
import { Ovts } from "./Ovts/Ovts";
import { Bts } from "./Bts/Bts";



const TheKidFilmWrapper: FC = () => {

    return (
        <>
            <TheKidFilmProvider>
                <Router>
                    <Routes>
                        <Route path="/*" element={<Home />} />

                        <Route path='/home' element={<Inicio />} />

                        <Route path='/films' element={<Films />} />

                        <Route path='/covers' element={<Convers />} />

                        <Route path='/eventos' element={<Eventos />} />

                        <Route path='/ovts' element={<Ovts />} />

                        <Route path='/bts' element={<Bts />} />

                        <Route path="/*" element={<Home />} />
                    </Routes>
                </Router>
            </TheKidFilmProvider>
        </>
    )

}

export { TheKidFilmWrapper }