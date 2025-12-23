'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Clock, TrendingDown, Star } from 'lucide-react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}

function AnimatedStat({ value, suffix, label, icon: Icon, color, delay }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

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
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className={`glass rounded-3xl p-6 text-center card-interactive border border-${color}/20`}>
        <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-${color}/10 flex items-center justify-center`}>
          <Icon className={`text-${color}`} size={28} />
        </div>
        <div className="text-4xl font-bold mb-1">
          <span className={`text-${color}`}>{count}</span>
          <span className="text-gray-400">{suffix}</span>
        </div>
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-3xl bg-${color}/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 70, suffix: '%', label: 'Redução de Custos', icon: TrendingDown, color: 'lime' },
    { value: 24, suffix: '/7', label: 'Disponibilidade', icon: Clock, color: 'cyan' },
    { value: 500, suffix: 'mil', label: 'Atendimentos/mês', icon: Users, color: 'purple' },
    { value: 98, suffix: '%', label: 'Satisfação', icon: Star, color: 'pink' },
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Section header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-lime/10 text-lime border border-lime/20 mb-4">
          Resultados Comprovados
        </span>
        <h2 className="text-3xl font-bold mb-3">
          Números que <span className="gradient-text">Transformam</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Veja o impacto real que nossa solução traz para governos estaduais em todo o Brasil.
        </p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {stats.map((stat, i) => (
          <AnimatedStat key={i} {...stat} delay={i * 0.1} />
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
