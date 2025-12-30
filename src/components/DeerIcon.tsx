import { motion } from 'motion/react';

interface DeerIconProps {
  className?: string;
}

export function DeerIcon({ className = "w-32 h-32" }: DeerIconProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Antlers */}
      <motion.g
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "60px", originY: "40px" }}
      >
        <path d="M60 40 L50 20 L45 35 M60 40 L55 25" stroke="#8B4513" strokeWidth="3" fill="none" strokeLinecap="round" />
      </motion.g>
      
      <motion.g
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "140px", originY: "40px" }}
      >
        <path d="M140 40 L150 20 L155 35 M140 40 L145 25" stroke="#8B4513" strokeWidth="3" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* Head */}
      <ellipse cx="100" cy="90" rx="45" ry="50" fill="#d2691e" />

      {/* Ears */}
      <ellipse cx="70" cy="60" rx="15" ry="25" fill="#d2691e" />
      <ellipse cx="70" cy="65" rx="8" ry="15" fill="#cd853f" />
      <ellipse cx="130" cy="60" rx="15" ry="25" fill="#d2691e" />
      <ellipse cx="130" cy="65" rx="8" ry="15" fill="#cd853f" />

      {/* Glasses frame */}
      <g>
        <circle cx="85" cy="85" r="15" fill="none" stroke="#333333" strokeWidth="3" />
        <circle cx="115" cy="85" r="15" fill="none" stroke="#333333" strokeWidth="3" />
        {/* Bridge */}
        <line x1="100" y1="85" x2="100" y2="85" stroke="#333333" strokeWidth="3" />
        {/* Temples */}
        <line x1="70" y1="85" x2="60" y2="83" stroke="#333333" strokeWidth="2" />
        <line x1="130" y1="85" x2="140" y2="83" stroke="#333333" strokeWidth="2" />
        
        {/* Glasses shine effect */}
        <motion.ellipse
          cx="82"
          cy="80"
          rx="4"
          ry="6"
          fill="white"
          opacity="0.6"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.ellipse
          cx="112"
          cy="80"
          rx="4"
          ry="6"
          fill="white"
          opacity="0.6"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
      </g>

      {/* Eyes behind glasses */}
      <motion.g
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        style={{ originY: "85px" }}
      >
        <circle cx="85" cy="85" r="5" fill="#000000" />
        <circle cx="115" cy="85" r="5" fill="#000000" />
        {/* Eye highlights */}
        <circle cx="87" cy="83" r="2" fill="#ffffff" />
        <circle cx="117" cy="83" r="2" fill="#ffffff" />
      </motion.g>

      {/* Nose - red like Rudolph */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="8"
        ry="6"
        fill="#dc2626"
        animate={{
          fill: ["#dc2626", "#ef4444", "#dc2626"],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <ellipse cx="98" cy="99" rx="2" ry="2" fill="#ffffff" opacity="0.7" />

      {/* Smile */}
      <path d="M90 110 Q100 118 110 110" stroke="#333333" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Tie - business deer! */}
      <g>
        <rect x="95" y="115" width="10" height="8" fill="#dc2626" rx="1" />
        <polygon points="100,123 95,133 100,153 105,133" fill="#dc2626" />
        {/* Tie pattern */}
        <line x1="100" y1="125" x2="100" y2="150" stroke="#b91c1c" strokeWidth="2" />
        <ellipse cx="100" cy="140" rx="3" ry="4" fill="#991b1b" />
      </g>

      {/* Blush */}
      <ellipse cx="60" cy="95" rx="8" ry="5" fill="#ff6b6b" opacity="0.4" />
      <ellipse cx="140" cy="95" rx="8" ry="5" fill="#ff6b6b" opacity="0.4" />

      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
    </motion.svg>
  );
}
