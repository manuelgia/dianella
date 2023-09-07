import React from 'react';
import CanvasBoard from '../components/CanvasBoard';

export default function Pizarra() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-screen-lg p-4">
        <h1 className="text-2xl font-semibold mb-4">Pizarra Virtual</h1>

        <div className="border border-gray-300 rounded-lg p-4">
          {/* Incluye el componente CanvasBoard aquí */}
          <CanvasBoard />
        </div>
      </div>
    </div>
  );
}
