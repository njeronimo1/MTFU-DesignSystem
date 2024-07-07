import { Typografy } from "../Typografy/Typografy";
import { BoxCountStyle } from "./styled";

export type BoxCountProps = {
    title: string;
    image: string;
    count: string;
    alt: string;
}


export function BoxCount({ title, image, count, alt }: BoxCountProps){
    return  (
        <BoxCountStyle>
            <div className="box_count_header">
                <img src={image} alt={alt} />
                <Typografy type="title" children={title} align="center" color="black" fontWeight={900} />
            </div>
            <div className="box_count_content">
                <span>{count}</span>
            </div>
        </BoxCountStyle>
    )
}