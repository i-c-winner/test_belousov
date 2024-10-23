import {IItem} from "../app/types";

export function defineAnswer(resultLocalStorage: { title: string, correct: boolean }[],
                             progress: number,
                             data: IItem[]) {
    if (resultLocalStorage.filter((item) => {
        return item.title === data[progress].title
    }).length === 0) {
        resultLocalStorage.push({
            title: data[progress].title,
            correct: false
        })
        localStorage.setItem('result', JSON.stringify(resultLocalStorage));
    }
}

