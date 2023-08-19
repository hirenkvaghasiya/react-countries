import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client"

import countries from './constants/countries'

const App = () => {
    return (
        <>
            <ul style={{ listStyleType: "square" }}>
                {
                    countries.map(country => <li key={country.name}>{country.flag + " " + country.name + " | " + country.code + " (" + country.dial_code + ")"}</li>)
                }
            </ul>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);