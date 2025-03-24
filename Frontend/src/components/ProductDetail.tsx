import React, { useEffect } from 'react';
import { Star, Package, X, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Handle click outside modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <div className="relative w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-gray-400" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50 rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-gray-700">{product.rating} rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">{product.stock} in stock</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className="text-green-600">-{product.discountPercentage}% OFF</span>
                )}
              </div>
              <span className="text-gray-600">{product.brand}</span>
            </div>
          </div>

          {product.images.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Product Images</h3>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div 
                    key={index}
                    className="relative w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center"
                  >
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};