import {IItem} from "../../app/types";
import {test} from "../assets/source"

const data: IItem[]=localStorage.getItem("data")===null?test:JSON.parse(localStorage.getItem("data")!);
function getData(){
    return data
}
export default getData;
