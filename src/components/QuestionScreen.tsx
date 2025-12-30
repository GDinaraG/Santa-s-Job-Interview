import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../App';
import { DeerIcon } from './DeerIcon';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  currentScore: number;
  onAnswer: (points: number) => void;
}

const feedbackMessages = [
  // Отличные ответы (2 балла) - Санта одобряет
  [
    "Хо-хо-хо! Санта одобряет! 🎅",
    "Рудольф кивает с восторгом! 🦌",
    "Миссис Клаус аплодирует! 👏",
    "Идеально! Санта улыбается! ✨",
    "Все олени топают копытами! 🎄",
    "Санта записывает вас в список! 📝",
    "Хо-хо-хо! Великолепно! 🌟",
    "Эльфы танцуют от радости! 💃",
    "Санта смеётся от удовольствия! 😄",
    "Вы точно в духе праздника! 🎁"
  ],
  // Нормальные ответы (1 балл) - Эльфы довольны
  [
    "Эльфы кивают! Неплохо! 👍",
    "Разумный подход! Эльфы согласны! 🧝",
    "Главный эльф одобряет! ⭐",
    "Практично! Эльфам нравится! 🔧",
    "Хорошая мысль! Эльфы записали! 📋",
    "Эльфы совещаются... Подходит! 🤝",
    "Реалистично! Эльфы кивают! ✅",
    "Главный эльф улыбнулся! 😊",
    "Эльфы шепчутся... Берём! 💼",
    "Честно! Эльфам нравится! 👌"
  ],
  // Саркастические ответы (0 баллов) - Снеговику нравится!
  [
    "Снеговик Фрости смеётся! ☃️",
    "Пингвины аплодируют! 🐧",
    "Йети хохочет! Креативно! ✨",
    "Снежная королева заинтригована! ❄️",
    "Джек Фрост одобряет дерзость! 🌬️",
    "Снеговик: 'Мой человек!' 😎",
    "Это же гениально, по-другому! 🎪"
  ]
];

export function QuestionScreen({
  question,
  questionNumber,
  totalQuestions,
  currentScore,
  onAnswer
}: QuestionScreenProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackData, setFeedbackData] = useState<{ message: string; points: number } | null>(null);

  const handleAnswerClick = (points: number) => {
    const feedbackList = feedbackMessages[2 - points];
    const randomFeedback = feedbackList[questionNumber % feedbackList.length];
    
    setFeedbackData({ message: randomFeedback, points });
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setTimeout(() => {
        onAnswer(points);
      }, 300);
    }, 1500);
  };

  const progress = ((questionNumber - 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen w-full p-6 py-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Progress bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl border-2 border-red-200"
        >
          <div className="flex justify-between mb-3 text-gray-800 font-semibold">
            <span>Вопрос {questionNumber} из {totalQuestions}</span>
            <span>Баллов: {currentScore}</span>
          </div>
          <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden border-2 border-blue-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-green-500 via-red-500 to-green-500 relative"
            >
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Deer */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <DeerIcon className="w-36 h-36 mx-auto" />
        </motion.div>

        {/* Question card */}
        <motion.div
          key={questionNumber}
          initial={{ x: 100, opacity: 0, rotateY: 20 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          exit={{ x: -100, opacity: 0 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 mb-6 shadow-2xl border-4 border-red-200"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.answers.map((answer, index) => (
              <motion.button
                key={index}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, type: "spring" }}
                whileHover={{ 
                  scale: 1.03, 
                  x: 10,
                  boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleAnswerClick(answer.points)}
                className="w-full p-5 bg-gradient-to-r from-red-50 to-green-50 hover:from-red-100 hover:to-green-100 rounded-2xl text-left transition-all text-gray-800 border-3 border-red-200 hover:border-red-400 shadow-lg font-medium"
              >
                {answer.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Feedback overlay */}
      <AnimatePresence>
        {showFeedback && feedbackData && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 5, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 0.6 }}
              className={`px-12 py-8 rounded-3xl text-white font-bold text-2xl md:text-3xl shadow-2xl border-4 ${
                feedbackData.points === 2
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-300'
                  : feedbackData.points === 1
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 border-yellow-300'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 border-pink-300'
              }`}
            >
              {feedbackData.message}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}