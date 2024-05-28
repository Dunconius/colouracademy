import { Link } from "react-router-dom";

export default function HomePage(){

    return <>
        <h1>React CSS Theme Generator</h1>
        <p>Generate a bunch of colour themse</p>

        <Link to={"/generator"}>Make some colours!</Link>
    </>
}