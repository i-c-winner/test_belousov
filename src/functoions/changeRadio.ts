import getData from "../shared/functions/getData";
import {IItem} from "../app/types";
const data:IItem[]=getData()
function changeRadio(progress: number, answer: string) {
    const correctAnswer=data[progress].answers?.filter((answer)=>answer.isCorrect)[0].value
    return answer===correctAnswer;
}
export default changeRadio