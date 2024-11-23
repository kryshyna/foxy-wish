import { motion } from 'framer-motion';

interface WishCardProps {
  image: string;
  title: string;
  price: string;
  currency: string;
  isBooked?: boolean;
  onClick?: () => void;
}

export const WishCard = ({ image, title, price, currency, isBooked, onClick }: WishCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer relative h-full flex flex-col"
    >
      <div className="aspect-square">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {isBooked && (
        <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          Booked
        </div>
      )}
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium text-sm line-clamp-2 mb-auto">{title}</h3>
        <div className="flex items-center gap-1 mt-2">
          <span className="font-bold">{price}</span>
          <span className="text-sm text-gray-500">{currency}</span>
        </div>
      </div>
    </motion.div>
  );
};