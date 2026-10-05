export default Servicios;

function Servicios() {
  return (

    <section className="bg-white py-24 px-12">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-[#2E6092] text-6xl font-bold mb-16 text-center">
          Servicios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
            <h3 className="text-2xl font-bold text-[#2E6092] mb-4">
              🌐 Desarrollo Web
            </h3>

            <p className="text-gray-600">
              Landing pages, sitios empresariales y portafolios profesionales.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
            <h3 className="text-2xl font-bold text-[#2E6092] mb-4">
              📊 CRM y Sistemas
            </h3>

            <p className="text-gray-600">
              Desarrollo de CRM personalizados para clientes y ventas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
            <h3 className="text-2xl font-bold text-[#2E6092] mb-4">
              🌐 Redes Cisco
            </h3>

            <p className="text-gray-600">
              Diseño de direccionamiento IP, subneteo y consultoría básica.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
            <h3 className="text-2xl font-bold text-[#2E6092] mb-4">
              🖥️ Soporte Técnico
            </h3>

            <p className="text-gray-600">
              Mantenimiento preventivo y correctivo de equipos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
            <h3 className="text-2xl font-bold text-[#2E6092] mb-4">
              ⚙️ Automatización
            </h3>

            <p className="text-gray-600">
              Optimización de procesos mediante herramientas tecnológicas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
            <h3 className="text-2xl font-bold text-[#2E6092] mb-4">
              🎨 Diseño Digital
            </h3>

            <p className="text-gray-600">
              Invitaciones digitales, flyers y material publicitario.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}