'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Shield, ChevronDown, Mic } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-lime/30 rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-md mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Chatbot com IA para Gabinetes</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          Modernize o{' '}
          <span className="gradient-text">Mandato</span>{' '}
          do Vereador
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg mb-8"
        >
          Atendimento 24h, registro de demandas e dados estratégicos para fortalecer a{' '}
          <span className="text-lime font-semibold">escuta social</span> e a transparência do gabinete.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-3 mb-10"
        >
          <button className="w-full py-4 px-6 bg-lime text-black font-semibold rounded-2xl hover:bg-lime-dark transition-all duration-300 glow-lime active:scale-95">
            Agendar Demonstração
          </button>
          <button className="w-full py-4 px-6 glass text-white font-medium rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
            <MessageSquare size={20} />
            Ver Como Funciona
          </button>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[
            { icon: Zap, text: 'Respostas Instantâneas', color: 'lime' },
            { icon: Mic, text: 'Áudio do Vereador', color: 'purple' },
            { icon: Shield, text: 'LGPD Compliant', color: 'cyan' },
          ].map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-${item.color}/10 text-${item.color} border border-${item.color}/20`}
            >
              <item.icon size={14} />
              {item.text}
            </motion.span>
          ))}
        </motion.div>

        {/* Phone mockup preview */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mx-auto w-64 float"
        >
          <div className="phone-mockup p-2 relative overflow-hidden">
            <div className="phone-notch" />
            <div className="rounded-[32px] overflow-hidden bg-gradient-to-b from-gray-900 to-black p-4 pt-10 min-h-[400px]">
              {/* Chat interface preview */}
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime to-cyan flex items-center justify-center">
                    <MessageSquare size={18} className="text-black" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Gabinete Vereador</p>
                    <p className="text-xs text-lime">Online agora</p>
                  </div>
                </div>

                {/* Messages */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="bg-gray-800 rounded-2xl rounded-tl-sm p-3 max-w-[85%]"
                >
                  <p className="text-xs">Olá! Seja bem-vindo ao gabinete. Como posso ajudar?</p>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="bg-lime text-black rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto"
                >
                  <p className="text-xs">Quero registrar uma demanda sobre iluminação pública</p>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="bg-gray-800 rounded-2xl rounded-tl-sm p-3 max-w-[85%]"
                >
                  <p className="text-xs">Entendi! Vou registrar sua demanda. Qual o endereço do local?</p>
                </motion.div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex gap-1 px-3 py-2"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Glow effect behind phone */}
          <div className="absolute -inset-4 bg-gradient-to-r from-lime/20 via-cyan/20 to-purple/20 blur-3xl -z-10 rounded-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-gray-500" size={24} />
      </motion.div>
    </section>
  );
}
