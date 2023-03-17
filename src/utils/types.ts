enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

enum QuestionType {
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

