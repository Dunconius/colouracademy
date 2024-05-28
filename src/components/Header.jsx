import { NavLink } from "react-router-dom";


export default function Header(){

    return(
        <header>
            <div id="headerBranding">
                ColourAcademy
            </div>
            <nav id="headerNavbard">
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/generator"} >Generator</NavLink>
                <NavLink to={"/generator/saved"} >SavedThemes</NavLink>
            </nav>
        </header>
    )
}