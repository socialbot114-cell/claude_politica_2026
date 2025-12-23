'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Settings, Rocket, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Importação de Dados',
    description: 'Envie documentos, FAQs e informações sobre serviços públicos.',
    color: 'lime',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Configuração da IA',
    description: 'Personalize o tom de voz, fluxos e regras de atendimento.',
    color: 'cyan',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Deploy em Minutos',
    description: 'Integre com WhatsApp, site e outros canais instantaneamente.',
    color: 'purple',
  },
  {
    icon: Trophy,
    step: '04',
    title: 'Resultados Imediatos',
    description: 'Comece a atender cidadãos e acompanhe as métricas.',
    color: 'pink',
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-cyan/10 text-cyan border border-cyan/20 mb-4">
          Implementação Simples
        </span>
        <h2 className="text-3xl font-bold mb-3">
          Do Zero ao{' '}
          <span className="gradient-text">Resultado</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Em apenas 4 passos, transforme o atendimento do seu governo.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative max-w-md mx-auto">
        {/* Connection line */}
        <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-lime via-cyan to-purple opacity-30" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative flex items-start gap-5 mb-8 last:mb-0"
          >
            {/* Step indicator */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative z-10 w-16 h-16 rounded-2xl bg-${step.color}/10 border border-${step.color}/30 flex flex-col items-center justify-center flex-shrink-0`}
            >
              <step.icon className={`text-${step.color}`} size={20} />
              <span className={`text-xs font-bold text-${step.color} mt-0.5`}>{step.step}</span>

              {/* Pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className={`absolute inset-0 rounded-2xl bg-${step.color}/20`}
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-12 relative mx-auto max-w-xs"
      >
        <div className="glass rounded-3xl p-6 text-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-lime via-cyan to-purple flex items-center justify-center"
          >
            <Rocket className="text-black" size={36} />
          </motion.div>
          <h4 className="font-semibold mb-2">Pronto para Decolar?</h4>
          <p className="text-sm text-gray-400 mb-4">
            Implantação em até <span className="text-lime font-semibold">7 dias</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-lime text-black font-semibold rounded-xl hover:bg-lime-dark transition-all"
          >
            Começar Agora
          </motion.button>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-purple/20 border border-purple/30"
        />
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-lime/20 border border-lime/30"
        />
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
