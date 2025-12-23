'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, Shield, Zap, Clock, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const features = [
    { icon: Clock, text: 'Atendimento 24/7', color: 'cyan' },
    { icon: Shield, text: '100% LGPD', color: 'purple' },
    { icon: Zap, text: 'IA Avançada', color: 'lime' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Orbs with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-lime/5 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-purple/5 blur-[120px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-cyan/3 blur-[100px]"
      />

      {/* Floating Geometric Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] right-[15%] w-20 h-20 border border-lime/20 rounded-2xl"
        style={{ transform: 'rotate(15deg)' }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] left-[10%] w-16 h-16 border border-purple/20 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[60%] right-[8%] w-12 h-12 border border-cyan/20 rounded-lg"
        style={{ transform: 'rotate(-10deg)' }}
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 text-center"
      >
        {/* Premium Badge */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="badge-premium">
            <Sparkles size={14} className="text-lime" />
            <span>Inteligência Artificial para Governos</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance"
        >
          <span className="block text-white/90">Transforme o</span>
          <span className="block mt-2">
            <span className="gradient-text">Atendimento</span>
          </span>
          <span className="block text-white/90 mt-2">ao Cidadão</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed text-pretty"
        >
          Chatbots inteligentes que atendem{' '}
          <span className="text-white font-medium">24 horas por dia</span>, reduzem custos em até{' '}
          <span className="text-lime font-semibold">70%</span> e elevam a satisfação da população.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-lime text-black font-semibold rounded-2xl overflow-hidden transition-all duration-300 glow-lime-soft"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agendar Demonstração
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-lime to-lime-light opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 glass-subtle rounded-2xl font-medium text-white hover:border-lime/30 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Ver Como Funciona
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full glass-subtle border border-${feature.color}/20 hover:border-${feature.color}/40 transition-all duration-300`}
            >
              <feature.icon size={16} className={`text-${feature.color}`} />
              <span className="text-sm font-medium text-white/80">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '+50', label: 'Prefeituras', suffix: '' },
              { value: '5M', label: 'Atendimentos', suffix: '+' },
              { value: '98', label: 'Satisfação', suffix: '%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-lime">{stat.suffix}</span>
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-lime"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
