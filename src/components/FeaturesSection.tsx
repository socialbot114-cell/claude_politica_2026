'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  MessageSquare,
  Brain,
  Shield,
  Smartphone,
  BarChart3,
  Headphones,
  FileText,
  Building2,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IA Generativa Avançada',
    description: 'Powered by GPT-4 e Claude, oferecendo respostas naturais e contextualizadas.',
    color: 'lime',
    gradient: 'from-lime to-cyan',
  },
  {
    icon: Smartphone,
    title: 'Multi-canal',
    description: 'WhatsApp, Telegram, Site, App e todos os canais em uma única plataforma.',
    color: 'purple',
    gradient: 'from-purple to-pink',
  },
  {
    icon: Shield,
    title: '100% LGPD',
    description: 'Dados criptografados e armazenados em servidores brasileiros.',
    color: 'cyan',
    gradient: 'from-cyan to-lime',
  },
  {
    icon: BarChart3,
    title: 'Analytics em Tempo Real',
    description: 'Dashboard completo com métricas de atendimento e satisfação.',
    color: 'pink',
    gradient: 'from-pink to-purple',
  },
  {
    icon: Headphones,
    title: 'Escalação Inteligente',
    description: 'Transferência automática para atendentes quando necessário.',
    color: 'lime',
    gradient: 'from-lime to-cyan',
  },
  {
    icon: FileText,
    title: 'Base de Conhecimento',
    description: 'Treine o bot com documentos, FAQs e regulamentos do governo.',
    color: 'purple',
    gradient: 'from-purple to-pink',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-20 px-4">
      {/* Section header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-purple/10 text-purple border border-purple/20 mb-4">
          Funcionalidades
        </span>
        <h2 className="text-3xl font-bold mb-3">
          Tudo que sua{' '}
          <span className="gradient-text">Prefeitura</span> Precisa
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Uma plataforma completa para revolucionar o atendimento ao cidadão.
        </p>
      </motion.div>

      {/* Features grid */}
      <div className="grid gap-4 max-w-md mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setActiveFeature(activeFeature === i ? null : i)}
            className="cursor-pointer"
          >
            <div
              className={`glass rounded-2xl p-5 card-interactive border ${
                activeFeature === i
                  ? `border-${feature.color}/50 glow-${feature.color}`
                  : 'border-gray-800'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <feature.icon className="text-black" size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <motion.p
                    initial={false}
                    animate={{
                      height: activeFeature === i ? 'auto' : '0',
                      opacity: activeFeature === i ? 1 : 0,
                    }}
                    className="text-gray-400 text-sm overflow-hidden"
                  >
                    {feature.description}
                  </motion.p>
                  {activeFeature !== i && (
                    <p className="text-gray-500 text-xs">Toque para ver mais</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Government buildings illustration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-center gap-4 mt-12"
      >
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className={`w-16 h-20 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 flex items-end justify-center pb-2 border border-gray-700`}
          >
            <Building2 className="text-gray-600" size={24} />
          </motion.div>
        ))}
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
