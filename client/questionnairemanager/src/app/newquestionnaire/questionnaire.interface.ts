// questionnaire.interface.ts

export interface Questionnaire {
    name: string;
    description: string;
    items: Item[];
}

export interface Item {
    prefix: string;  
    text: string;
    Questiontype: string;
    options: Option[];
}

export interface Option{
     value: string;
}

