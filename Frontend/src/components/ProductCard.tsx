import React from 'react';
import { Star, Package, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
        <ImageIcon className="w-12 h-12 text-gray-400" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Package className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{product.stock}</span>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="ml-2 text-sm text-green-600">-{product.discountPercentage}%</span>
            )}
          </div>
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>
      </div>
    </div>
  );
};