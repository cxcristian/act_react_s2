"use client";

export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className=" p-4 m-2 w-64 bg-white text-gray-800 shadow-lg rounded-lg  ">
      {/* Imagen */}
      <img src={imagen} alt={titulo} className="w-full h-40 object-cover rounded-lg mb-3" />

      {/* Contenido */}
      <h2 className="text-lg font-bold mb-2">{titulo}</h2>
      <p className="text-sm text-gray-600 mb-3">{descripcion}</p>

      {/* Etiqueta */}
      <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-1 rounded-full self-start">
        {etiqueta}
      </span>
    </div>
  );
}
