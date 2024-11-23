import { ProductCard } from '../product/ProductCard';
import { Modal } from '../ui/Modal';
import { avatars } from '../../assets/avatars';

interface WishDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  wish?: {
    id: string;
    image: string;
    title: string;
    price: string;
    currency: string;
    note?: string;
    isBooked?: boolean;
  };
  similarProducts: Array<{
    id: string;
    image: string;
    title: string;
    price: string;
    currency: string;
  }>;
  onAddToWishlist: (productId: string) => void;
  onDelete?: () => void;
  isViewingFriend?: boolean;
  onBook?: () => void;
}

export const WishDetailsModal = ({
  isOpen,
  onClose,
  wish,
  similarProducts,
  onAddToWishlist,
  onDelete,
  isViewingFriend,
  onBook
}: WishDetailsModalProps) => {
  if (!wish) return null;

  const actions = isViewingFriend ? (
    <button
      onClick={onBook}
      className="w-full bg-[#FF8812] text-white font-medium py-3 px-6 rounded-full hover:bg-[#FF8812]/90 transition-colors"
    >
      {wish.isBooked ? 'Unbook' : 'Book as Anonymous'}
    </button>
  ) : (
    <button
      onClick={onDelete}
      className="w-full text-red-500 font-medium py-3 px-6 rounded-full hover:bg-red-50 transition-colors"
    >
      Delete Wish
    </button>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Wish Details"
      actions={actions}
    >
      <div className="space-y-6">
        <div className="aspect-square rounded-[20px] overflow-hidden bg-white">
          <img
            src={wish.image}
            alt={wish.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold">{wish.title}</h3>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xl font-bold">{wish.price}</span>
            <span className="text-gray-500">{wish.currency}</span>
          </div>
        </div>

        {wish.note && (
          <div className="bg-white p-4 rounded-[20px]">
            <h4 className="font-medium mb-2">Note</h4>
            <p className="text-gray-600">{wish.note}</p>
          </div>
        )}

        <div className="bg-orange-50 p-4 rounded-[20px] flex items-center gap-4">
          <img
            src={avatars.avatar10}
            alt="Mascot"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-medium">Save on this present!</h4>
            <p className="text-sm text-gray-600">Browse our partner offers</p>
          </div>
        </div>

        {similarProducts.length > 0 && (
          <div>
            <h4 className="font-medium mb-3">Similar Products</h4>
            <div className="grid grid-cols-2 gap-3">
              {similarProducts.map(product => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAdd={() => onAddToWishlist(product.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};