import React, {createContext, useContext} from 'react'

const ContextSample = () => {

    const ThemeContext = createContext('black');

    const theme = useContext(ThemeContext);
    const style = {
        width: '24px',
        height: '24px',
        background: theme
    }

    return (
        <div style={style}/>
    )
}

export default ContextSample
