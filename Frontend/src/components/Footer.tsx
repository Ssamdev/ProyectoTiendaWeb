import React from 'react';
import { ShoppingBag } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-semibold text-gray-800">Product Catalog</span>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Product Catalog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};