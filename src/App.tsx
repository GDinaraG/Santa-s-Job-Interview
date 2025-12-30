import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { SnowBackground } from './components/SnowBackground';
import { Header } from './components/Header';

export interface Question {
  question: string;
  answers: {
    text: string;
    points: number;
  }[];
}

const questions: Question[] = [
  {
    question: "Как вы относитесь к работе в ночную смену?",
    answers: [
      { text: "Обожаю! Ночью самая волшебная атмосфера! 🌙", points: 2 },
      { text: "Нормально, если есть кофе и печеньки", points: 1 },
      { text: "Предпочитаю дневной график с 9 до 18 ⏰", points: 0 }
    ]
  },
  {
    question: "Что вы будете делать, если ребёнок попросит динозавра на Новый год?",
    answers: [
      { text: "Подарю плюшевого динозавра и книгу про них!", points: 2 },
      { text: "Скажу, что динозавры вымерли и предложу дракона", points: 1 },
      { text: "Отправлю ребёнка в музей динозавров 🦕", points: 0 }
    ]
  },
  {
    question: "Олени Санты летают благодаря волшебству. Как вы к этому относитесь?",
    answers: [
      { text: "Это же волшебно! Могу я тоже научиться летать? ✨", points: 2 },
      { text: "Круто, но я боюсь высоты", points: 1 },
      { text: "А у них есть страховка? И лицензия на полёты? 🤓", points: 0 }
    ]
  },
  {
    question: "Вы готовы работать с эльфами? Они любят петь во время работы.",
    answers: [
      { text: "Обожаю новогодние песни! Подпеваю! 🎵", points: 2 },
      { text: "Можно я буду в наушниках?", points: 1 },
      { text: "Я буду петь рок-н-ролл! 🎸", points: 0 }
    ]
  },
  {
    question: "У нас строгий дресс-код: красно-белая униформа. Ваша реакция?",
    answers: [
      { text: "Обожаю праздничные наряды! Можно с колокольчиками? 🔔", points: 2 },
      { text: "А можно я добавлю свой шарфик для индивидуальности?", points: 1 },
      { text: "Я хочу носить чёрное. Это мой стиль! 🖤", points: 0 }
    ]
  },
  {
    question: "Как вы отреагируете, если застрянете в дымоходе во время доставки?",
    answers: [
      { text: "Позову оленей на помощь и посмеюсь над ситуацией! 😄", points: 2 },
      { text: "Постараюсь выбраться сам, но немного запаникую", points: 1 },
      { text: "Буду звонить в пожарную службу! 🚒", points: 0 }
    ]
  },
  {
    question: "Ребёнок проснулся и увидел вас. Что делаете?",
    answers: [
      { text: "Скажу 'Тсс!' и подмигну волшебно ✨", points: 2 },
      { text: "Притворюсь, что я сон или галлюцинация", points: 1 },
      { text: "Убегу через окно как ниндзя!", points: 0 }
    ]
  },
  {
    question: "В Австралии летом +30°C. Как будете работать в тёплой шубе?",
    answers: [
      { text: "Это волшебная шуба! Она регулирует температуру! ❄️", points: 2 },
      { text: "Попрошу эльфов сделать летнюю версию униформы", points: 1 },
      { text: "Не поеду в Австралию. Только в холодные страны! ⛄", points: 0 }
    ]
  },
  {
    question: "Родители оставили для Санты морковку вместо печенья. Ваши действия?",
    answers: [
      { text: "Отдам морковку оленям, они обрадуются! 🥕", points: 2 },
      { text: "Съем морковку сам. Витамины полезны!", points: 1 },
      { text: "Оставлю записку: 'В следующий раз только печеньки!' 🍪", points: 0 }
    ]
  },
  {
    question: "Последний вопрос: почему вы хотите работать у Санты?",
    answers: [
      { text: "Хочу дарить радость детям по всему миру! 🎁", points: 2 },
      { text: "Мне нравятся печеньки с молоком", points: 1 },
      { text: "Слышал, у вас хороший соцпакет и отпуск летом ☀️", points: 0 }
    ]
  }
];

export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'question' | 'results'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setScreen('question');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (points: number) => {
    setScore(score + points);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen('results');
    }
  };

  const handleRestart = () => {
    setScreen('welcome');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-auto relative">
      <SnowBackground />
      <Header />
      
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      
      {screen === 'question' && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          currentScore={score}
          onAnswer={handleAnswer}
        />
      )}
      
      {screen === 'results' && (
        <ResultsScreen
          score={score}
          maxScore={questions.length * 2}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}