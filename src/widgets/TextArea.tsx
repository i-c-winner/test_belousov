import getData from "../shared/functions/getData";
import {IItem} from "../app/types";
import {Box} from "@mui/material";
import {Textarea} from "@mui/joy";

const data: IItem[] = getData()

function TextAreaComponent(props: { progress: number }) {
    function change(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const resultLocalStorage = localStorage.getItem('textarea') === null ?
            [] : JSON.parse(localStorage.getItem('textarea')!) as { title: string, text: string }[];
        const newLocalStorage = resultLocalStorage.filter((item) => {
            return item.title !== data[props.progress].title
        })
        newLocalStorage.push({title: data[props.progress].title, text: e.target.value});
        localStorage.setItem('textarea', JSON.stringify(newLocalStorage))
    }

    return <Box>
        <Textarea onChange={change}/>
    </Box>

}

export default TextAreaComponent;