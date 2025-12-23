'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Clock, Award, ArrowUpRight } from 'lucide-react';

interface StatProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  icon: React.ElementType;
  color: 'lime' | 'cyan' | 'purple' | 'pink';
  delay: number;
}

function AnimatedStat({ value, suffix, prefix = '', label, description, icon: Icon, color, delay }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  const colorClasses = {
    lime: {
      bg: 'bg-lime/10',
      border: 'border-lime/20',
      text: 'text-lime',
      glow: 'group-hover:shadow-[0_0_40px_rgba(132,204,22,0.15)]',
    },
    cyan: {
      bg: 'bg-cyan/10',
      border: 'border-cyan/20',
      text: 'text-cyan',
      glow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]',
    },
    purple: {
      bg: 'bg-purple/10',
      border: 'border-purple/20',
      text: 'text-purple',
      glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]',
    },
    pink: {
      bg: 'bg-pink/10',
      border: 'border-pink/20',
      text: 'text-pink',
      glow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]',
    },
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className={`relative card-premium p-8 h-full transition-all duration-500 ${colorClasses[color].glow}`}>
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl ${colorClasses[color].bg} border ${colorClasses[color].border} flex items-center justify-center mb-6`}>
          <Icon className={colorClasses[color].text} size={24} />
        </div>

        {/* Value */}
        <div className="mb-4">
          <span className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">{prefix}{count}</span>
            <span className={colorClasses[color].text}>{suffix}</span>
          </span>
        </div>

        {/* Label */}
        <h3 className="text-xl font-semibold text-white mb-2">{label}</h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>

        {/* Decorative corner */}
        <div className={`absolute top-0 right-0 w-24 h-24 ${colorClasses[color].bg} rounded-bl-[60px] opacity-50`} />
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats: Omit<StatProps, 'delay'>[] = [
    {
      value: 70,
      suffix: '%',
      label: 'Redução de Custos',
      description: 'Economia média em custos operacionais de atendimento ao cidadão.',
      icon: TrendingUp,
      color: 'lime',
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Disponibilidade Total',
      description: 'Atendimento contínuo sem interrupções, feriados ou finais de semana.',
      icon: Clock,
      color: 'cyan',
    },
    {
      value: 500,
      suffix: 'mil',
      prefix: '+',
      label: 'Atendimentos/Mês',
      description: 'Capacidade de escala ilimitada para atender toda a população.',
      icon: Users,
      color: 'purple',
    },
    {
      value: 98,
      suffix: '%',
      label: 'Taxa de Satisfação',
      description: 'Índice de aprovação dos cidadãos com a qualidade do atendimento.',
      icon: Award,
      color: 'pink',
    },
  ];

  return (
    <section ref={containerRef} className="relative section-premium overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-lime/3 blur-[150px] -z-10"
      />

      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge-premium mb-6 inline-flex">
            <ArrowUpRight size={14} />
            Resultados Comprovados
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Impacto Real em{' '}
            <span className="gradient-text">Governos</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Números que demonstram a transformação digital no atendimento público em estados e municípios.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 glass-subtle rounded-2xl">
            <div className="flex -space-x-3">
              {['SP', 'BH', 'PR', 'RJ'].map((state, i) => (
                <div
                  key={state}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-lime to-cyan flex items-center justify-center text-black text-xs font-bold border-2 border-background"
                  style={{ zIndex: 4 - i }}
                >
                  {state}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">+50 governos confiam em nós</p>
              <p className="text-xs text-text-muted">Junte-se aos líderes da transformação digital</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />
    </section>
  );
}
