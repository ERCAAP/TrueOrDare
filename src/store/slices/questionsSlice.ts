import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Question interface'ini tanımlayalım
interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface QuestionsState {
  questions: Question[];
  currentQuestion: number;
  loading: boolean;
  error: string | null;
}

// QuestionService tipini tanımlayalım
interface QuestionService {
  getQuestions: (category?: string, difficulty?: string) => Promise<Question[]>;
}

// Geçici bir questionService oluşturalım
const questionService: QuestionService = {
  getQuestions: async (category?: string, difficulty?: string) => {
    // Firebase entegrasyonu yapılana kadar örnek veri döndürelim
    return [
      {
        id: '1',
        text: 'Örnek Soru 1',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
        category: 'general',
        difficulty: 'easy'
      }
    ];
  }
};

const initialState: QuestionsState = {
  questions: [],
  currentQuestion: 0,
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk<
  Question[],
  { category?: string; difficulty?: string },
  { rejectValue: string }
>(
  'questions/fetchQuestions',
  async ({ category, difficulty }, { rejectWithValue }) => {
    try {
      return await questionService.getQuestions(category, difficulty);
    } catch (error) {
      return rejectWithValue('Sorular yüklenirken bir hata oluştu');
    }
  }
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    nextQuestion: (state: QuestionsState) => {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      }
    },
    resetQuestions: (state: QuestionsState) => {
      state.currentQuestion = 0;
      state.questions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state: QuestionsState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state: QuestionsState, action: PayloadAction<Question[]>) => {
          state.loading = false;
          state.questions = action.payload;
        }
      )
      .addCase(
        fetchQuestions.rejected,
        (state: QuestionsState, action) => {
          state.loading = false;
          state.error = action.payload || 'Sorular yüklenirken bir hata oluştu';
        }
      );
  },
});

export const { nextQuestion, resetQuestions } = questionsSlice.actions;
export default questionsSlice.reducer; 