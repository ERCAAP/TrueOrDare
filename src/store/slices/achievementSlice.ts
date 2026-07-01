import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Achievement {
  id: string;
  title: string;
  description: string;
  isUnlocked: boolean;
  category: string;
  icon: string;
}

interface AchievementState {
  achievements: Achievement[];
  loading: boolean;
  error: string | null;
}

const initialState: AchievementState = {
  achievements: [],
  loading: false,
  error: null,
};

const achievementSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    setAchievements: (state, action: PayloadAction<Achievement[]>) => {
      state.achievements = action.payload;
    },
    unlockAchievement: (state, action: PayloadAction<string>) => {
      const achievement = state.achievements.find(a => a.id === action.payload);
      if (achievement) {
        achievement.isUnlocked = true;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setAchievements, unlockAchievement, setLoading, setError } = achievementSlice.actions;
export default achievementSlice.reducer; 