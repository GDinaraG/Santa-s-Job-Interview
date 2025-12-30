import { motion } from 'motion/react';
import { DeerIcon } from './DeerIcon';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative z-10">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <DeerIcon className="w-48 h-48 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-5xl md:text-6xl font-bold text-red-500 drop-shadow-lg"
        >
          Блитцен, главный по найму 🦌💼
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl border-4 border-red-200"
        >
          <p className="text-xl text-gray-800 leading-relaxed">
            Хо-хо-хо! Добро пожаловать! Санта Клаус ищет новых помощников в свою команду. 
            Готовы пройти собеседование? 🎅
          </p>
        </motion.div>

        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 60px rgba(220, 38, 38, 0.4)",
            rotate: [0, -2, 2, -2, 0]
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-10 py-5 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ backgroundSize: "200% 100%" }}
          />
          <span className="relative">Начать интервью 🎄</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4 text-white/80"
        >
          <span className="text-3xl">❄️</span>
          <span className="text-sm">Готовьтесь к весёлому интервью!</span>
          <span className="text-3xl">🎁</span>
        </motion.div>
      </div>
    </div>
  );
}