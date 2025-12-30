import { motion } from 'motion/react';
import { DeerIcon } from './DeerIcon';
import { Gift, Sparkles, Cookie, Snowflake, Star, TreePine, Wand2, Utensils, ShieldCheck } from 'lucide-react';

interface ResultsScreenProps {
  score: number;
  maxScore: number;
  onRestart: () => void;
}

export function ResultsScreen({ score, maxScore, onRestart }: ResultsScreenProps) {
  const percentage = (score / maxScore) * 100;

  let resultData: {
    title: string;
    role: string;
    boss: string;
    message: string;
    emoji: string;
    color: string;
    gradient: string;
    icon: JSX.Element;
  };

  if (percentage >= 80) {
    resultData = {
      title: "Вы приняты!",
      role: "Главный помощник Санты",
      boss: "Сам Санта Клаус",
      message: "Поздравляю! Вы приняты в элитную команду Санты! Вас ждёт красно-белая униформа с золотыми пуговицами и личный олень! 🎅",
      emoji: "🎄",
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-600",
      icon: <TreePine className="w-20 h-20" />
    };
  } else if (percentage >= 60) {
    resultData = {
      title: "Отлично!",
      role: "Координатор мастерской эльфов",
      boss: "Главный эльф Пеппер",
      message: "Отлично! Эльфы выбрали вас руководить упаковкой подарков! У вас будет своя секция в мастерской и команда весёлых помощников! ⭐",
      emoji: "⭐",
      color: "text-yellow-600",
      gradient: "from-yellow-500 to-orange-600",
      icon: <Star className="w-20 h-20" />
    };
  } else if (percentage >= 40) {
    resultData = {
      title: "Замечательно!",
      role: "Тестировщик игрушек и сладостей",
      boss: "Миссис Клаус",
      message: "Замечательно! Миссис Клаус приглашает вас на кухню тестировать печеньки и проверять качество игрушек! Вкусная работа! 🍪",
      emoji: "🍪",
      color: "text-orange-600",
      gradient: "from-orange-500 to-red-600",
      icon: <Cookie className="w-20 h-20" />
    };
  } else if (percentage >= 20) {
    resultData = {
      title: "Интересно!",
      role: "Охранник снежного периметра",
      boss: "Снеговик Фрости",
      message: "Фрости впечатлён вашей дерзостью! Вы приняты в команду снежной безопасности! Будете патрулировать Северный полюс и следить за пингвинами! ⛄",
      emoji: "⛄",
      color: "text-blue-600",
      gradient: "from-blue-500 to-cyan-600",
      icon: <Snowflake className="w-20 h-20" />
    };
  } else {
    resultData = {
      title: "Невероятно!",
      role: "Директор по креативным решениям",
      boss: "Йети и Морозко",
      message: "Невероятно! Ваш нестандартный подход покорил Йети и Морозко! Вы будете придумывать самые безумные идеи для праздника! ✨",
      emoji: "🎪",
      color: "text-purple-600",
      gradient: "from-purple-500 to-pink-600",
      icon: <Sparkles className="w-20 h-20" />
    };
  }

  // Определяем персонажа в зависимости от результата - используем иконки вместо эмодзи
  let characterIcon: JSX.Element;
  if (percentage >= 80) {
    characterIcon = <TreePine className="w-8 h-8 text-green-600" />; // Санта - елка
  } else if (percentage >= 60) {
    characterIcon = <Wand2 className="w-8 h-8 text-yellow-600" />; // Эльф - волшебная палочка
  } else if (percentage >= 40) {
    characterIcon = <Utensils className="w-8 h-8 text-orange-600" />; // Миссис Клаус - приборы
  } else if (percentage >= 20) {
    characterIcon = <Snowflake className="w-8 h-8 text-blue-400" />; // Снеговик - снежинка
  } else {
    characterIcon = <Sparkles className="w-8 h-8 text-purple-600" />; // Йети - искры
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative z-10">
      <div className="max-w-3xl w-full text-center">
        {/* Deer */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-6"
        >
          <DeerIcon className="w-40 h-40 mx-auto" />
        </motion.div>

        {/* Big emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.6 }}
          className="text-8xl mb-6"
        >
          {resultData.emoji}
        </motion.div>

        {/* Results card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-red-200"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            className={`text-4xl md:text-5xl font-bold ${resultData.color} mb-6`}
          >
            {resultData.title}
          </motion.h2>

          {/* Job card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={`mb-6 p-6 rounded-2xl bg-gradient-to-r ${resultData.gradient} shadow-xl border-4 border-white/50`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="text-white">
                {resultData.icon}
              </div>
            </div>
            <div className="text-sm text-white/90 mb-2">Ваша новая должность:</div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-3">
              {resultData.role}
            </div>
            <div className="text-white/95 font-medium">
              Ваш руководитель: {resultData.boss}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-lg text-gray-800 leading-relaxed mb-8"
          >
            {resultData.message}
          </motion.p>

          {/* Progress bar with character */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mb-8"
          >
            <div className="text-lg text-gray-700 mb-3">
              ✨ Новогоднее волшебство определило вашу роль! ✨
            </div>
            <div className="relative w-full h-6 bg-blue-100 rounded-full overflow-hidden border-2 border-blue-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${resultData.gradient} relative`}
              >
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />
              </motion.div>
              
              {/* Character appears at the end */}
              <motion.div
                initial={{ scale: 0, x: 0 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 3.5, type: "spring", bounce: 0.6 }}
                className="absolute right-1 top-1/2 -translate-y-1/2 text-3xl"
              >
                {characterIcon}
              </motion.div>
            </div>
          </motion.div>

          {/* Restart button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.9 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)",
              rotate: [0, -2, 2, -2, 0]
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="px-10 py-5 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            Пройти собеседование снова 🔄
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="mt-6 text-white/80 text-sm flex items-center justify-center gap-3"
        >
          <Gift className="w-5 h-5" />
          <span>С наступающим Новым Годом!</span>
          <Gift className="w-5 h-5" />
        </motion.div>
      </div>
    </div>
  );
}