export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export enum QuestionType {
    MULTIPLE = "multiple",
    BOOLEAN = "boolean"
}

export type Question = {
    category: string;
    type: QuestionType;
    difficulty: Difficulty;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export type Result = {
    category: string;
    type: QuestionType;
    difficulty: Difficulty;
    finalScore: number;
    datePlayed: Date;
}

export type GameInfo = {
    category: string;
    type: QuestionType;
    difficulty: Difficulty;
    questions: Question[];
}

