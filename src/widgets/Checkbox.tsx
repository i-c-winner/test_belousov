import getData from "../shared/functions/getData";
import {IItem} from "../app/types";
import {defineAnswer} from "../functoions/defineAnswer";
import {FormControlLabel, FormGroup, Checkbox, Box} from "@mui/material";
import {useEffect, useState} from "react";

const data: IItem[] = getData();


function CheckboxComponent(props: { progress: number }) {
    const resultLocalStorage = JSON.parse(localStorage.getItem('result')!) as { title: string, correct: boolean }[]
    const [checkedData, setCheckedData] = useState<string[]>([]);
    defineAnswer(resultLocalStorage, props.progress, data)
    const correctAnswer = data[props.progress].answers!.filter((answer) => {
        return answer.isCorrect
    })

    function change(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            if (!checkedData.includes(e.target.value)) {
                const newCheckedData = [e.target.value, ...checkedData]
                setCheckedData(newCheckedData)
            }
        } else {
            if (checkedData.includes(e.target.value)) {
                const newCheckedData = checkedData.filter((item: string) => {
                    return item !== e.target.value
                })
                setCheckedData(newCheckedData)
            }
        }
    }

    useEffect(() => {
        let result = true
        if (checkedData.length === correctAnswer.length) {
      correctAnswer.forEach((answer)=>{
          if (!checkedData.includes(answer.value)) {
              result = false
          }
      })
        } else {
            result = false
        }
        const resultLocalStorage = JSON.parse(localStorage.getItem('result')!) as { title: string, correct: boolean }[]

        const newResultLocalStorage = resultLocalStorage.filter((answer) => {
            return answer.title !== data[props.progress].title
        })
        newResultLocalStorage.push({title: data[props.progress].title, correct: result})

        localStorage.setItem('result', JSON.stringify(newResultLocalStorage))
    }, [checkedData, correctAnswer, props.progress])

    return <Box>
        <p>{data[props.progress].title}</p>
        <p>Необходимо выбрать несколько правильных вариантов</p>
        <FormGroup onChange={change}>
            {data[props.progress].answers!.map((answer) => {
                return <FormControlLabel key={answer.value} value={answer.value} control={<Checkbox/>}
                                         label={answer.value}/>
            })}
        </FormGroup>
    </Box>
    return (<p>checkbox</p>)
}

export default CheckboxComponent;