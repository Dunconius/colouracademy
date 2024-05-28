import { useEffect, setState } from "react";
import { useBaseColourGlobalData, useBaseColourGlobalDispatch } from "../contexts/baseColourContext";


export default function GeneratorPage(){
    
    // first var is readonly value, 2nd is function to edit that value
    let [formBaseColour, setFormBaseColour] = setState("#000000");

    // Base colour from global state
    let baseColourGlobal = useBaseColourGlobalData();
    let setBaseColourGlobal = useBaseColourGlobalDispatch();

    // On componenet mount, set local form value to global state value
    useEffect(() => {
        setFormBaseColour(baseColourGlobal);
    }, [baseColourGlobal]);

    return(
        <div>
            {/* base colour input form */}
            <h1>{formBaseColour}</h1>

            {/* CSS theme generator componenet */}
        </div>
    )


}