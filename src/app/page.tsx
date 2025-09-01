"use client";

import TarjetaGlobal from "@/components/tarjeta/tarjetaGloabal";
import TarjetaDinamica from "@/components/tarjetaDinamica/tarjetaDinamica";
import TarjetaTailwind from "@/components/TarjetaTailwind/TarjetaTailwind";

export default function Home() {

  const information = [
    {
      titulo: "Carlos el Rojo - global",
      contenido: "Carlos el Rojo fue un bandido Estado Unidense",
      color: "rojo",
    },
    {
      titulo: "Pancho Villa - module.css",
      descripcion: "Pancho Villa fue un bandido Mexicano",
      categoria: "Criminal",
    },
    {
      titulo: "El Chapo Guzman - inline",
      contenido: "El Chapo Guzman fue un bandido Mexicano",
      color: "azul",
    },
    {
      titulo: "Componente Dinámico",
      contenido: "lorem ipsum tua voluntatis emperator empanadum",
    },
  ];

  return (
    <main className="p-6 space-y-10">
      {/* ================= GLOBAL ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          🎨 Estilos con CSS Global
        </h2>
        <TarjetaGlobal info={information[0]} metodo="global" />
      </section>

      {/* ================= MODULES ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          🎨 Estilos con CSS Modules
        </h2>
        <div className="flex flex-wrap gap-4">
          <TarjetaGlobal info={information[1]} metodo="module" />
          <TarjetaGlobal info={information[1]} metodo="module-p" />
          <TarjetaGlobal info={information[1]} metodo="module-s" />
          <TarjetaGlobal info={information[1]} metodo="module-e" />
        </div>
      </section>

      {/* ================= INLINE ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-red-700">
          🎨 Estilos Inline / Dinámicos
        </h2>
        <TarjetaDinamica
          info={information[3]}
          colorFondo="blue"
          colorTexto="black"
          ancho="300px"
          activo={true}
        />
        
      </section>

      {/* ================= TAILWIND ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          🎨 Estilos con Tailwind CSS
        </h2>
        <TarjetaTailwind
          titulo="Tarjeta con Tailwind"
          descripcion="Diseñada usando solo clases de Tailwind."
          imagen="https://img.freepik.com/fotos-premium/bonitos-lindos-gatitos-ilustracion-realista-digital-gato-bebe-cara-frontal-buena-iluminacion_510654-340.jpg"
          etiqueta="Tailwind"
        />
      </section>
    </main>
  );
}
