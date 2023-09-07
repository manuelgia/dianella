import React from 'react';
import CanvasBoard from './CanvasBoard';

export default function Pizarra() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-screen-lg p-4">
        <h1 className="text-2xl font-semibold mb-4">Pizarra Virtual</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sección del Canvas */}
          <div className="md:col-span-2">
            <div className="border border-gray-300 rounded-lg p-4">
              <CanvasBoard />
            </div>
          </div>

          {/* Sección de los Botones */}
          <div className="md:col-span-1 space-y-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <button
                id="drawing-mode"
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
              >
                Enter drawing mode
              </button>
              <button
                id="clear-canvas"
                className="bg-red-500 text-white rounded p-2 hover:bg-red-600"
              >
                Clear
              </button>
            </div>

            {/* Sección de Ajustes */}
            <div className="border border-gray-300 rounded-lg p-4">
              {/* Agrega aquí los controles para los ajustes */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
