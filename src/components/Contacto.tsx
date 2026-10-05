export default Contacto;
import { FaWhatsapp } from "react-icons/fa";

function Contacto() 
{
  return (
    <section className="bg-[#0F172A] py-24 px-12">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-white text-5xl font-bold mb-6">
          ¿Listo para digitalizar tu negocio?
        </h2>

        <p className="text-slate-300 text-xl mb-12">
          Contáctame y recibe una cotización sin compromiso para tu proyecto.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">


            <a
            href="https://wa.me/3311305700"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-green-500
            hover:bg-green-600
            transition-all
            duration-300
            text-white
            px-8
            py-4
            rounded-xl
            flex
            items-center
            justify-center
            gap-3
            font-semibold
            shadow-lg
            hover:shadow-2xl
            "
            >
              <FaWhatsapp size={24} />
               <span>WhatsApp</span>
           </a>

                </div>

             </div>
                        
          </section>
        );
      }
