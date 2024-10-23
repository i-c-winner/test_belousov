interface IItem {
    title: string,
    type: "radio" | "checkbox"| "textArea",
    answers?: ({
        value: string,
        isCorrect: boolean,
    }[])
    textArea: string
}
export type {IItem}