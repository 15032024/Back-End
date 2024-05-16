import React, { createContext, useState } from 'react'

export const ContextFav = createContext([])


const ContexApi = ({ children }) => {
    const [favorites, setFavorites] = useState();
    return (
        <ContextFav.Provider value={{favorites,setFavorites}}>
            {children}
        </ContextFav.Provider>
    )
}

export default ContexApi