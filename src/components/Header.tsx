import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        <div className="flex items-center gap-4 md:gap-5">
          {/* Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white text-xl md:text-2xl"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Dinara English
          </motion.div>

          {/* Telegram */}
          <motion.a
            href="https://t.me/DinaraEng"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
            aria-label="Telegram"
          >
            <Send className="w-5 h-5 md:w-6 md:h-6" />
          </motion.a>

          {/* VK */}
          <motion.a
            href="https://vk.com/id43540516"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
            aria-label="ВКонтакте"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.868c.636.59 1.305 1.146 1.858 1.787.247.285.48.58.665.919.263.482.024.988-.396 1.017l-2.607-.001c-.673.056-1.202-.21-1.655-.662-.358-.357-.693-.735-1.041-1.1-.149-.156-.304-.301-.487-.417-.344-.218-.643-.149-.845.21-.207.364-.254.77-.278 1.178-.033.595-.26.751-.859.777-1.279.059-2.495-.136-3.627-.82-.99-.599-1.757-1.42-2.424-2.349-1.302-1.812-2.295-3.806-3.186-5.858-.188-.433-.051-.666.417-.674.778-.013 1.556-.012 2.334-.001.315.007.527.195.652.488.398.932.87 1.824 1.443 2.655.152.22.307.442.527.595.248.173.44.117.567-.16.082-.178.123-.37.145-.564.075-.663.084-1.325-.018-1.984-.061-.395-.293-.65-.687-.725-.201-.038-.172-.111-.074-.224.153-.176.297-.286.585-.286h2.157c.339.067.414.22.46.56l.002 2.387c-.004.135.067.536.31.625.193.064.32-.094.436-.211.518-.527.887-1.152 1.221-1.798.147-.284.272-.58.396-.875.092-.22.236-.33.487-.325l2.761.003c.082 0 .165.001.245.016.473.088.603.307.458.768-.197.628-.605 1.155-.999 1.676-.416.548-.86 1.075-1.274 1.626-.382.505-.352.758.126 1.186z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}