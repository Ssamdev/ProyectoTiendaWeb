import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loading: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8">
      <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      <p className="mt-4 text-lg text-gray-600">Loading products...</p>
    </div>
  );
};