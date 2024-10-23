import React, {useEffect} from "react";
import {Box, Button} from "@mui/material";


function Result(props: {
setButtonsIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setProgress: React.Dispatch<React.SetStateAction<number>>
}) {
    const answers = localStorage.getItem('result') === null ? [] :
        JSON.parse(localStorage.getItem("result")!) as { title: string, correct: boolean }[];
    const textarea = localStorage.getItem('textarea') === null ? [] :
        JSON.parse(localStorage.getItem("textarea")!) as { title: string, text: string }[];


    function reset() {
        localStorage.setItem("result", JSON.stringify([]));
        localStorage.setItem("textarea", JSON.stringify([]));
        localStorage.setItem("progress", JSON.stringify(-1));
        props.setProgress(-1)
    }

    useEffect(() => {
        props.setButtonsIsVisible(false)
    }, [props]);
    return <Box>
        <p>Результаты</p>
        {answers.map((answer) => {
            return <Box>
                <p>{answer.title} : {answer.correct? "Верно" : "Не верно"}</p>

            </Box>
        })}
        {textarea.map((answer)=>{
            return <p>{answer.title}: {answer.text}</p>
        })}
        <Button onClick={reset}>Начать заново</Button>
    </Box>
}

export default Result;