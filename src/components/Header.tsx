

// function Header() {
//   return (
//     <section className="min-h-screen bg-slate-900 flex items-center justify-center">
//       <div className="text-center px-6 max-w-4xl">

//         <h1 className="text-5xl font-bold text-white mb-6">
//           Desarrollo Web, CRM y Soluciones Tecnológicas
//         </h1>

//         <h2 className="text-2xl text-blue-400 mb-4">
//           José de Jesús Sánchez Ríos
//         </h2>

//         <p className="text-lg text-slate-300 mb-8">
//           Ayudo a negocios y emprendedores a digitalizar procesos mediante
//           páginas web, sistemas CRM, automatización, redes y soporte técnico.
//         </p>


        
//             <img
//               src="/images/header.png"
              
//             />

//         {/* <a
//           href="https://wa.me/5210000000000"
          
//         </a> */}

//       </div>
//     </section>
//   );
// }

// export default Header;
export default Header;
function Header() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/header.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Filtro azul */}
      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Desarrollo Web, CRM y Soluciones Tecnológicas
        </h1>

        <h2 className="text-2xl md:text-3xl text-blue-300 mb-4">
          José de Jesús Sánchez Ríos
        </h2>

        <p className="text-lg md:text-xl text-slate-200 mb-8">
          Ayudo a negocios y emprendedores a digitalizar procesos mediante
          páginas web, sistemas CRM, automatización, redes y soporte técnico.
        </p>

        {/* <a
          href="https://wa.me/521XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 transition
           */}
           </div>
   </section>
  );
}

