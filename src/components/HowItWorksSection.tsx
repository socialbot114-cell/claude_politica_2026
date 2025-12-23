'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Settings, Rocket, Trophy, ArrowRight, Zap } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Importação de Dados',
    description: 'Envie documentos, FAQs, regulamentos e informações sobre serviços públicos. Nossa IA processa e indexa tudo automaticamente.',
    duration: '1-2 dias',
    color: 'lime' as const,
  },
  {
    icon: Settings,
    step: '02',
    title: 'Configuração da IA',
    description: 'Personalize o tom de voz, fluxos de atendimento, regras de negócio e integrações com sistemas existentes.',
    duration: '2-3 dias',
    color: 'cyan' as const,
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Deploy & Integração',
    description: 'Integre com WhatsApp, Telegram, site institucional e outros canais. Tudo em poucos cliques.',
    duration: '1 dia',
    color: 'purple' as const,
  },
  {
    icon: Trophy,
    step: '04',
    title: 'Resultados Imediatos',
    description: 'Comece a atender cidadãos 24/7, acompanhe métricas em tempo real e veja a transformação acontecer.',
    duration: 'Contínuo',
    color: 'pink' as const,
  },
];

const colorClasses = {
  lime: {
    bg: 'bg-lime/10',
    border: 'border-lime/30',
    text: 'text-lime',
    line: 'from-lime',
  },
  cyan: {
    bg: 'bg-cyan/10',
    border: 'border-cyan/30',
    text: 'text-cyan',
    line: 'from-cyan',
  },
  purple: {
    bg: 'bg-purple/10',
    border: 'border-purple/30',
    text: 'text-purple',
    line: 'from-purple',
  },
  pink: {
    bg: 'bg-pink/10',
    border: 'border-pink/30',
    text: 'text-pink',
    line: 'from-pink',
  },
};

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative section-premium overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-gradient-subtle -z-10" />

      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="badge-cyan mb-6 inline-flex">
            <Zap size={14} />
            Implementação Simples
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Do Zero ao{' '}
            <span className="gradient-text">Resultado</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Em apenas <span className="text-white font-medium">7 dias</span>, transforme completamente o atendimento do seu governo.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Progress Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              style={{ height: lineProgress }}
              className="w-full bg-gradient-to-b from-lime via-cyan via-purple to-pink"
            />
          </div>

          {/* Steps */}
          {steps.map((step, i) => {
            const colors = colorClasses[step.color];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Indicator */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex flex-col items-center justify-center`}
                  >
                    <step.icon className={colors.text} size={20} />
                    <span className={`text-xs font-bold ${colors.text} mt-0.5`}>{step.step}</span>
                  </motion.div>

                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className={`absolute inset-0 rounded-2xl ${colors.bg}`}
                  />
                </div>

                {/* Content Card */}
                <div className={`flex-1 pl-24 md:pl-0 ${isEven ? 'md:pr-[calc(50%+3rem)]' : 'md:pl-[calc(50%+3rem)]'}`}>
                  <div className="card-premium p-8 group hover:border-white/10 transition-all duration-300">
                    {/* Duration Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-medium mb-4`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current" />
                      {step.duration}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 glass-strong rounded-3xl">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Pronto para começar?</h3>
              <p className="text-text-secondary">Implantação completa em até <span className="text-lime font-semibold">7 dias</span></p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-8 py-4 bg-lime text-black font-semibold rounded-2xl glow-lime-soft transition-all duration-300"
            >
              Agendar Demonstração
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />
    </section>
  );
}
