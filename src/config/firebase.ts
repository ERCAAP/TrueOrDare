// Firebase yapılandırması için tip tanımlamaları
interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

// Mock veri tipleri
interface QuestionData {
  text: string;
  options: string[];
  correctAnswer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface FirebaseDoc {
  id: string;
  data: () => QuestionData;
}

// Geçici mock veritabanı
const mockQuestions: FirebaseDoc[] = [
  {
    id: '1',
    data: () => ({
      text: 'En son ne zaman yalan söyledin?',
      options: ['Bugün', 'Dün', 'Geçen Hafta', 'Hatırlamıyorum'],
      correctAnswer: 'Hatırlamıyorum',
      category: 'truth',
      difficulty: 'easy'
    })
  },
  {
    id: '2',
    data: () => ({
      text: 'Hiç kimseye söylemediğin bir sırrın var mı?',
      options: ['Evet', 'Hayır', 'Belki', 'Söylemek istemiyorum'],
      correctAnswer: 'Evet',
      category: 'truth',
      difficulty: 'medium'
    })
  }
];

// Mock Firebase API
class MockFirestore {
  private static instance: MockFirestore;
  apps: any[] = [];

  collection(collectionName: string) {
    return {
      where: (_field: string, _operator: string, _value: any) => ({
        get: async () => ({
          docs: mockQuestions
        })
      }),
      get: async () => ({
        docs: mockQuestions
      })
    };
  }

  static getInstance(): MockFirestore {
    if (!MockFirestore.instance) {
      MockFirestore.instance = new MockFirestore();
    }
    return MockFirestore.instance;
  }

  initializeApp(config: FirebaseConfig) {
    if (this.apps.length === 0) {
      this.apps.push(config);
    }
    return this;
  }
}

// Firebase başlatma fonksiyonu
export const initializeFirebase = () => {
  try {
    const mockFirebase = MockFirestore.getInstance();
    if (mockFirebase.apps.length === 0) {
      mockFirebase.initializeApp(firebaseConfig);
    }
    console.log('Mock Firebase initialized');
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
};

// Mock auth
export const auth = {
  currentUser: null,
  signInWithEmailAndPassword: async () => Promise.resolve(),
  signOut: async () => Promise.resolve(),
  onAuthStateChanged: (callback: (user: null) => void) => {
    callback(null);
    return () => {};
  }
};

// Firebase config
const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
};

// Export mock instances
export const db = MockFirestore.getInstance();
export const firestore = MockFirestore.getInstance();
export const dbFirestore = MockFirestore.getInstance();

export default {
  db,
  auth,
  firestore,
  initializeFirebase
}; 