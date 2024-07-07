import { colors } from "@mtfu/tokens";
// import { getContrast } from "polished"

export function ColorsGrid(){
    return Object.entries(colors).map(([ key, color ]) => {
        console.log(color);
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem'}}>
                <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        fontFamily: "monospace", 
                        color: color == "#FFF"  ? "#000" : "#FFF",
                    }}>
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        )
    })
}