import React from 'react'

const themes = {
    dark:{
        backgroundColor:'black',
        color:"white"
    },

    light:{
        backgroundColor:'white',
        color:"black"
    }
}

export const ThemeContext = React.createContext(themes.dark)