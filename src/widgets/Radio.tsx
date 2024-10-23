import getData from "../shared/functions/getData";
import {IItem} from "../app/types";
import {RadioGroup, FormControlLabel, Radio, Box} from "@mui/material";
import {defineAnswer} from "../functoions/defineAnswer";
import changeRadio from "../functoions/changeRadio";

const data: IItem[] = getData()

function RadioComponent(props: { progress: number }) {
    const resultLocalStorage = JSON.parse(localStorage.getItem('result')!) as { title: string, correct: boolean }[];
    defineAnswer(resultLocalStorage, props.progress, data)

    function change(e: React.ChangeEvent<HTMLInputElement>) {
        resultLocalStorage.forEach((item) => {
            if (item.title === data[props.progress].title) {
                item.title = data[props.progress].title;
                item.correct = changeRadio(props.progress, e.target.value);
            }
        })
        localStorage.setItem('result', JSON.stringify(resultLocalStorage));
    }


    return <Box>
        <p>Необходимо выбрать один правильный вариант</p>
        <RadioGroup
            onChange={change}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
        >
            {data[props.progress].answers!.map((answer) => {
                return <FormControlLabel key={answer.value} value={answer.value} control={<Radio/>}
                                         label={answer.value}/>
            })}
        </RadioGroup>
    </Box>

}

export default RadioComponent;