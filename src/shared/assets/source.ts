const test = [{
    title: "Что есть планета",
    type: "radio",
    answers: [{
        value: "Марс",
        isCorrect: true
    },
        {
            value: "Луна",
            isCorrect: false
        },
        {
            value: "Солнце",
            isCorrect: false
        },
        {
            value: "Комета",
            isCorrect: false
        }]
},
    {
        title: "Что из этого живое",
        type: "checkbox",
        answers: [
            {
                value: "Кошка",
                isCorrect: true
            },
            {
                value: "Стол",
                isCorrect: false
            },
            {
                value: "Машина",
                isCorrect: false
            }, {
                value: "Собака",
                isCorrect: true
            }]
    },
    {
        title: "Что такое атом",
        type: "textArea",
    }
]
export { test }