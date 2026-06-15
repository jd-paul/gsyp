import type React from "react"
import { motion } from "framer-motion"

interface AppCardProps {
  image: string
  title: string
  description: string
  onClick: () => void
}

export const AppCard: React.FC<AppCardProps> = ({ image, title, description, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer w-72 flex flex-col rounded-xl border border-[#f1f1ef] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f1f1ef]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-[#37352f] mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#9b9a97] leading-relaxed line-clamp-3 mb-4 flex-1">
          {description}
        </p>
        <span className="text-xs font-mono uppercase tracking-wider text-[#d9730d]">
          Open resource
        </span>
      </div>
    </motion.div>
  )
}
