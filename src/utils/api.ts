import type { Question } from './types';

export async function getQuestions(difficulty: string = 'easy', amount: number = 10): Promise<Question[]> {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`,
  );
  const { results } = await response.json();
  return results;
}