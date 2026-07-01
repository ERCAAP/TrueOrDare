import { ref, get } from 'firebase/database';
import { database } from './firebase';

export const getQuestions = async (type: 'truth' | 'dare', level: number) => {
  const questionsRef = ref(database, `questions/${type}/level${level}`);
  const snapshot = await get(questionsRef);
  return snapshot.val();
}; 