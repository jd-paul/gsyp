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
            whileTap={{ scale: 0.95 }}
            className="rounded-xl p-6 cursor-pointer w-64 max-h-80 flex flex-col justify-between transition-colors duration-300 overflow-hidden"
            onClick={onClick}
        >
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                    <img src={image} alt={title} className="object-contain" />
                </div>
                <h2 className="text-xl font-semibold text-gray-200 mb-2">{title}</h2>
                <p className="text-gray-400 text-sm font-light line-clamp-3">
                    {description}
                </p>
            </div>
            <div className="mt-4 text-[#F58F29] text-sm font-medium text-center">
                Click to access resource...
            </div>
        </motion.div>
    )
}
