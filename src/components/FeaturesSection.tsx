'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Brain,
  Shield,
  Smartphone,
  BarChart3,
  Headphones,
  FileText,
  Layers,
  ArrowRight,
  Check,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IA Generativa Avançada',
    description: 'Powered by GPT-4 e Claude, oferecendo respostas naturais, contextualizadas e humanizadas.',
    highlights: ['Compreensão de linguagem natural', 'Respostas contextuais', 'Aprendizado contínuo'],
    color: 'lime' as const,
  },
  {
    icon: Smartphone,
    title: 'Integração Multi-canal',
    description: 'WhatsApp, Telegram, Site, App e todos os canais em uma única plataforma unificada.',
    highlights: ['WhatsApp Business API', 'Web widget', 'Telegram & mais'],
    color: 'purple' as const,
  },
  {
    icon: Shield,
    title: 'Conformidade LGPD',
    description: 'Dados criptografados e armazenados em servidores brasileiros com total segurança.',
    highlights: ['Criptografia end-to-end', 'Servidores no Brasil', 'Auditoria completa'],
    color: 'cyan' as const,
  },
  {
    icon: BarChart3,
    title: 'Analytics em Tempo Real',
    description: 'Dashboard completo com métricas de atendimento, satisfação e insights acionáveis.',
    highlights: ['Métricas em tempo real', 'Relatórios automáticos', 'Insights de IA'],
    color: 'pink' as const,
  },
  {
    icon: Headphones,
    title: 'Escalação Inteligente',
    description: 'Transferência automática para atendentes humanos quando realmente necessário.',
    highlights: ['Detecção de frustração', 'Handoff suave', 'Contexto preservado'],
    color: 'lime' as const,
  },
  {
    icon: FileText,
    title: 'Base de Conhecimento',
    description: 'Treine o bot com documentos, FAQs e regulamentos do seu governo.',
    highlights: ['Upload de documentos', 'Extração automática', 'Atualização fácil'],
    color: 'purple' as const,
  },
];

const colorClasses = {
  lime: {
    bg: 'bg-lime/10',
    bgHover: 'group-hover:bg-lime/15',
    border: 'border-lime/20',
    borderHover: 'group-hover:border-lime/40',
    text: 'text-lime',
    glow: 'group-hover:shadow-[0_0_60px_rgba(132,204,22,0.1)]',
    gradient: 'from-lime/20 to-lime/0',
  },
  purple: {
    bg: 'bg-purple/10',
    bgHover: 'group-hover:bg-purple/15',
    border: 'border-purple/20',
    borderHover: 'group-hover:border-purple/40',
    text: 'text-purple',
    glow: 'group-hover:shadow-[0_0_60px_rgba(168,85,247,0.1)]',
    gradient: 'from-purple/20 to-purple/0',
  },
  cyan: {
    bg: 'bg-cyan/10',
    bgHover: 'group-hover:bg-cyan/15',
    border: 'border-cyan/20',
    borderHover: 'group-hover:border-cyan/40',
    text: 'text-cyan',
    glow: 'group-hover:shadow-[0_0_60px_rgba(6,182,212,0.1)]',
    gradient: 'from-cyan/20 to-cyan/0',
  },
  pink: {
    bg: 'bg-pink/10',
    bgHover: 'group-hover:bg-pink/15',
    border: 'border-pink/20',
    borderHover: 'group-hover:border-pink/40',
    text: 'text-pink',
    glow: 'group-hover:shadow-[0_0_60px_rgba(236,72,153,0.1)]',
    gradient: 'from-pink/20 to-pink/0',
  },
};

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative section-premium overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full bg-purple/5 blur-[150px] -z-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-lime/5 blur-[120px] -z-10"
      />

      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="badge-purple mb-6 inline-flex">
            <Layers size={14} />
            Funcionalidades
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Tudo que seu{' '}
            <span className="gradient-text">Governo</span>{' '}
            Precisa
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Uma plataforma completa e robusta para revolucionar o atendimento ao cidadão.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const colors = colorClasses[feature.color];
            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`relative h-full card-premium p-8 transition-all duration-500 ${colors.glow}`}>
                  {/* Gradient Overlay */}
                  <div className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.bgHover} border ${colors.border} ${colors.borderHover} flex items-center justify-center mb-6 transition-all duration-300`}>
                      <feature.icon className={colors.text} size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">{feature.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, j) => (
                        <motion.li
                          key={j}
                          initial={false}
                          animate={{
                            x: hoveredIndex === i ? 0 : -8,
                            opacity: hoveredIndex === i ? 1 : 0.6,
                          }}
                          transition={{ duration: 0.3, delay: j * 0.05 }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check size={14} className={colors.text} />
                          <span className="text-text-secondary group-hover:text-white/80 transition-colors">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      y: hoveredIndex === i ? 0 : 10,
                    }}
                    className="absolute bottom-6 right-6"
                  >
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <ArrowRight size={18} className={colors.text} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 glass-subtle rounded-2xl font-medium text-white hover:border-lime/30 transition-all duration-300"
          >
            Ver todas as funcionalidades
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />
    </section>
  );
}
