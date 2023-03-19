import {Difficulty, QuestionType} from './types';
import type { Question } from './types';

type Category = {
  id: number;
  name: string;
  icon: string[];
};

export const categories: Category[] = [
  { id: -1, name: 'Any', icon: ['fas', 'dice'] },
  { id: 9, name: 'General Knowledge', icon: ['fas', 'brain'] },
  { id: 10, name: 'Entertainment: Books', icon: ['fas', 'book'] },
  { id: 11, name: 'Entertainment: Film', icon: ['fas', 'film'] },
  { id: 12, name: 'Entertainment: Music', icon: ['fas', 'music'] },
  { id: 13, name: 'Entertainment: Musicals & Theatres', icon: ['fas', 'masks-theater'] },
  { id: 14, name: 'Entertainment: Television', icon: ['fas', 'tv'] },
  { id: 15, name: 'Entertainment: Video Games', icon: ['fas', 'gamepad'] },
  { id: 16, name: 'Entertainment: Board Games', icon: ['fas', 'chess-bishop'] },
  { id: 17, name: 'Science & Nature', icon: ['fas', 'leaf'] },
  { id: 18, name: 'Science: Computers', icon: ['fas', 'computer'] },
  { id: 19, name: 'Science: Mathematics', icon: ['fas', 'calculator'] },
  { id: 20, name: 'Mythology', icon: ['fas', 'bolt'] },
  { id: 21, name: 'Sports', icon: ['fas', 'medal'] },
  { id: 22, name: 'Geography', icon: ['fas', 'map'] },
  { id: 23, name: 'History', icon: ['fas', 'landmark'] },
  { id: 24, name: 'Politics', icon: ['fas', 'landmark-dome'] },
  { id: 25, name: 'Art', icon: ['fas', 'palette'] },
  { id: 26, name: 'Celebrities', icon: ['fas', 'star'] },
  { id: 27, name: 'Animals', icon: ['fas', 'paw'] },
  { id: 28, name: 'Vehicles', icon: ['fas', 'car'] },
  { id: 29, name: 'Entertainment: Comics', icon: ['fas', 'book-open'] },
  { id: 30, name: 'Science: Gadgets', icon: ['fas', 'binoculars'] },
  { id: 31, name: 'Entertainment: Japanese Anime & Manga', icon: ['fas', 'dragon'] },
  { id: 32, name: 'Entertainment: Cartoon & Animations', icon: ['fas', 'display'] },
];

export const questionTypes: {id: number, name: string, type: QuestionType, icon: string[]}[] = [{id: 0, name: "Multiple Choice", type: QuestionType.MULTIPLE, icon: ["fas", "list-check"]}, {id: 1, name: "True or False", type: QuestionType.BOOLEAN, icon: ["fas", "spell-check"]}];

export const difficulties: {id: number, name: string, difficulty: Difficulty, icon: string[]}[] = [{id: 0, name: "Easy", difficulty: Difficulty.EASY, icon: ['fas', 'face-smile-beam']}, {id: 1, name: "Medium", difficulty: Difficulty.MEDIUM, icon: ['fas', 'face-meh']}, {id: 2, name: "Hard", difficulty: Difficulty.HARD, icon: ['fas', 'skull']}];



export async function getQuestions(type: QuestionType, difficulty: Difficulty = 'easy' as Difficulty, category: number|string): Promise<Question[]> {
  category === " " ? category = "" : category;
  const response = await fetch(
    `https://opentdb.com/api.php?amount=5&encode=url3986&difficulty=${difficulty}&type=${type}&category=${category}`,
  );
  const { results } = await response.json();
  return results;
}