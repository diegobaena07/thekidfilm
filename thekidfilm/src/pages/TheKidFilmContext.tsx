import { createContext } from "react";

type TheKidFilmContextType = {

}

export const TheKidFilmContext = createContext<TheKidFilmContextType>(
    {} as TheKidFilmContextType
);

export const TheKidFilmProvider = ({ children }: any) => { 

    return (
        <TheKidFilmContext.Provider value={{

        }}>
            {children}
        </TheKidFilmContext.Provider>
    );
}