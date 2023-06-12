"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articles = void 0;
exports.articles = [
    {
        id: "4cdef78c-ecbc-43db-a062-f856f9663eb6",
        type: "article",
        data: { title: "Статья №1" },
        nodes: [
            {
                id: "a3c83304-8fc4-49fd-997e-8e18d3c9c7eb",
                type: "heading",
                data: { level: 2 },
                nodes: [
                    {
                        id: "2a410b11-7f33-4f25-b14a-6687d3cc2c78",
                        type: "text",
                        data: { text: "Какой-то заголовок" },
                    },
                ],
            },
            {
                id: "b1528200-3555-4f9d-bd65-67d598b41032",
                type: "paragraph",
                nodes: [
                    {
                        id: "f9c51245-2c22-476f-ace5-d4bd712bc870",
                        type: "text",
                        data: { text: "Здесь описание к " },
                    },
                    {
                        id: "df0b519f-4fd3-4b15-a6f3-f56f86704042",
                        type: "text",
                        data: { text: "картинке ", marks: ["bold", "italic"] },
                    },
                    {
                        id: "881151ef-7dcd-404c-a4a4-6ac497e37f3c",
                        type: "image",
                        data: {
                            alignment: "left",
                            src: "https://shapka-youtube.ru/wp-content/uploads/2022/11/ava-s-nadpisyu-abonent-nedostupen.jpg",
                            caption: "Абонент не доступен",
                        },
                    },
                    {
                        id: "33c15786-bde0-487a-b86c-396ec7522b31",
                        type: "text",
                        data: { text: "и тут смешная картинка." },
                    },
                ],
            },
            {
                id: "752a698d-69f0-4a49-9e37-8ec6288e629c",
                type: "code",
                data: {
                    language: "C++",
                    code: "#include<iostream>\nusing namespace std;\n\nint main()\n{\nint a = 5, b = 10, temp;\n}",
                },
            },
            {
                id: "24b1cb1b-ffa1-4ab4-a17b-c0c45d7dc6ff",
                type: "checkbox",
                data: {
                    checkboxName: "Лучшие качества C++ разработчика",
                    options: [
                        {
                            id: "75617e81-07e9-424a-950a-b9555e53b1c0",
                            option: "Лидерство",
                            checked: true,
                        },
                        {
                            id: "e6a3d4d8-d7a1-495e-88ab-dec8e27f9928",
                            option: "Храбрость",
                            checked: false,
                        },
                        {
                            id: "0c4e1944-0687-4195-9381-982765b0461a",
                            option: "Отвага",
                            checked: false,
                        },
                    ],
                },
            },
            {
                id: "dcdb3b87-c1f7-41f6-a817-3682cc1ab297",
                type: "table",
                data: {
                    tableName: "tableName",
                    rows: [
                        {
                            id: "7e150b08-ed3f-4776-bf37-63b75578c8cd",
                            cols: [
                                { id: "5caef78c-ecbc-43db-a062-f856f9663eb6", value: "Имя" },
                                {
                                    id: "8vdef78c-ecbc-43db-a062-f856f9663eb6",
                                    value: "Фамилия",
                                },
                                {
                                    id: "9bdef78c-ecbc-43db-a062-f856f9663eb6",
                                    value: "Отчество",
                                },
                            ],
                        },
                        {
                            id: "23039b98-bf3a-42d1-8005-ac2f88e48ce8",
                            cols: [
                                {
                                    id: "4cdef78c-ecbc-32db-a062-f856f9663eb6",
                                    value: "Ригоревич",
                                },
                                { id: "4cdef78c-ecbc-43db-a062-f596f9663eb6", value: "Илья" },
                                {
                                    id: "4cdef78c-ecbc-43db-a062-f856f9663be3",
                                    value: "Александрович",
                                },
                            ],
                        },
                    ],
                },
            },
        ],
    },
];
