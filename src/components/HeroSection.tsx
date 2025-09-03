import { motion } from "framer-motion";
import serasaManDesktop from "../assets/serasamm.webp";
import serasaManMobile from "../assets/mobile.webp";
import FormSection from "./FormSection";

export default function HeroSection() {
  return (
    <section className="bg-[#FFEDF2] px-4 py-10 max-w-7xl mx-auto">
      {/* Imagem em destaque (mobile primeiro) */}
      <div className="block lg:hidden mb-6">
        <picture>
          <source srcSet={serasaManMobile} media="(max-width: 1023px)" />
          <img
            src={serasaManDesktop}
            alt="Homem Serasa"
            className="w-full max-w-xs mx-auto"
          />
        </picture>
      </div>

      {/* Texto + Imagem + Form em desktop */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Serasa Limpa Nome: <br />
            <span className="text-pink-600">
              Negocie dívidas com até 90% de desconto
            </span>
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Encontre ofertas de forma rápida e segura, com opções de parcelamento
            que facilitam a negociação das suas dívidas e ajudam a limpar o seu nome.
          </p>
          <a
            href="#formulario"
            className="mt-6 inline-block w-full sm:w-auto bg-pink-600 text-white px-6 py-3 rounded font-semibold text-center hover:bg-pink-700"
          >
            Entrar em nosso grupo para ter maiores descontos
          </a>
        </motion.div>

        {/* Imagem visível só no desktop */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex w-full lg:w-1/2 flex-col items-center"
        >
          <img
            src={serasaManDesktop}
            alt="Homem Serasa"
            className="max-w-xs sm:max-w-sm lg:max-w-md mb-6"
          />
          <div className="w-full px-2 sm:px-0">
            <FormSection />
          </div>
        </motion.div>
      </div>

      {/* Formulário no mobile */}
      <div className="mt-8 block lg:hidden">
        <FormSection />
      </div>
    </section>
  );
}
