import {useEffect, useState} from "react";
import getData from "../shared/functions/getData";
import {IItem} from "../app/types";
import Result from "./Result";
import {Box} from "@mui/material";
import Radio from "../widgets/Radio";
import TextArea from "../widgets/TextArea";
import Checkbox from "../widgets/Checkbox";

const data: IItem[]=getData()

function Item(props: {progress: number,
    setProgress: React.Dispatch<React.SetStateAction<number>>,
    setButtonsIsVisible:  React.Dispatch<React.SetStateAction<boolean>>}) {
    if (props.progress<data.length){
        localStorage.setItem('progress', JSON.stringify(props.progress))
    } else {
        localStorage.setItem("progress",JSON.stringify(-1));
    }
    const component={
        radio: <Radio progress={props.progress}/>,
        textArea: <TextArea progress={props.progress}/>,
        checkbox: <Checkbox progress={props.progress}/>
    }
    return <Box>
        {(props.progress<data.length)?component[data[props.progress].type]:<Result
            setProgress= {props.setProgress}
            setButtonsIsVisible={props.setButtonsIsVisible}/>}
    </Box>
}
export default Item;