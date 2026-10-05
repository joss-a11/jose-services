
      export default Yo;
      function Yo() {
        return (
          <section className="bg-white py-24 px-12 ">
            <div className="max-w-7xl mx-auto">

              <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Información */}
                <div>

                  <h2 className=" text-[#2E6092] text-6xl  px-12 font-bold  mb-8">
                    Sobre mí
                  </h2>

                <p className="text-[#2E6092] px-12 leading-8 mt-20">
                  Mi nombre es José de Jesús Sánchez Ríos y actualmente estudio
                  Ingeniería en Sistemas.

                  <br /><br />

                    Tengo experiencia en desarrollo web,CRM, automatización de procesos,
                    redes Cisco y soporte técnico.

                  <br /><br />

                    Actualmente participo en el desarrollo
                    de sistemas ERP empresariales,
                    fortaleciendo mis conocimientos en
                    desarrollo backend y soluciones de negocio.

                    <br /><br />

                    Mi objetivo es ayudar a emprendedores
                    y empresas a aprovechar la tecnología
                    mediante páginas web, sistemas
                    personalizados y automatización.
                  </p>

                </div>

                {/* Imagen */}

                <img
                    src="/images/informacion/yo.jpg"
              />

                </div>

            </div>
                        
          </section>
        );
      }

