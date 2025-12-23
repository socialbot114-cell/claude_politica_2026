'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FileText,
  Calendar,
  CreditCard,
  HelpCircle,
  MapPin,
  Stethoscope,
  GraduationCap,
  Car,
  ArrowRight,
  Grid3X3,
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Segunda Via de Documentos',
    description: 'IPTU, certidões, alvarás e mais',
    examples: ['2ª via IPTU', 'Certidão negativa', 'Alvará de funcionamento'],
    color: 'lime' as const,
    popular: true,
  },
  {
    icon: Calendar,
    title: 'Agendamentos',
    description: 'Consultas, atendimentos e serviços',
    examples: ['Consultas médicas', 'DETRAN', 'Assistência social'],
    color: 'purple' as const,
    popular: true,
  },
  {
    icon: CreditCard,
    title: 'Tributos e Pagamentos',
    description: 'Consulta de débitos e boletos',
    examples: ['Consulta IPTU', 'Parcelamento', 'Código de barras'],
    color: 'cyan' as const,
    popular: false,
  },
  {
    icon: HelpCircle,
    title: 'Dúvidas Frequentes',
    description: 'Respostas instantâneas 24/7',
    examples: ['Horários', 'Documentos necessários', 'Procedimentos'],
    color: 'pink' as const,
    popular: false,
  },
  {
    icon: MapPin,
    title: 'Localização de Serviços',
    description: 'Encontre unidades próximas',
    examples: ['UBS mais próxima', 'CRAS', 'Escolas'],
    color: 'lime' as const,
    popular: false,
  },
  {
    icon: Stethoscope,
    title: 'Saúde',
    description: 'Agendamentos e informações',
    examples: ['Vacinas', 'Exames', 'Medicamentos'],
    color: 'purple' as const,
    popular: true,
  },
  {
    icon: GraduationCap,
    title: 'Educação',
    description: 'Matrículas e consultas',
    examples: ['Matrícula escolar', 'Merenda', 'Transporte'],
    color: 'cyan' as const,
    popular: false,
  },
  {
    icon: Car,
    title: 'Trânsito',
    description: 'Multas e licenciamento',
    examples: ['Consulta multas', 'IPVA', 'Licenciamento'],
    color: 'pink' as const,
    popular: false,
  },
];

const colorClasses = {
  lime: {
    bg: 'bg-lime/10',
    border: 'border-lime/20',
    borderHover: 'group-hover:border-lime/40',
    text: 'text-lime',
    tag: 'bg-lime/20 text-lime',
    glow: 'group-hover:shadow-[0_0_40px_rgba(132,204,22,0.1)]',
  },
  purple: {
    bg: 'bg-purple/10',
    border: 'border-purple/20',
    borderHover: 'group-hover:border-purple/40',
    text: 'text-purple',
    tag: 'bg-purple/20 text-purple',
    glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]',
  },
  cyan: {
    bg: 'bg-cyan/10',
    border: 'border-cyan/20',
    borderHover: 'group-hover:border-cyan/40',
    text: 'text-cyan',
    tag: 'bg-cyan/20 text-cyan',
    glow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]',
  },
  pink: {
    bg: 'bg-pink/10',
    border: 'border-pink/20',
    borderHover: 'group-hover:border-pink/40',
    text: 'text-pink',
    tag: 'bg-pink/20 text-pink',
    glow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.1)]',
  },
};

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative section-premium overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-pink/3 blur-[150px] -z-10"
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
            <Grid3X3 size={14} />
            Casos de Uso
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Serviços que o{' '}
            <span className="gradient-text">Bot Oferece</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Automatize os serviços mais demandados pela população com inteligência artificial.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const colors = colorClasses[service.color];
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`relative h-full card-premium p-6 transition-all duration-500 ${colors.glow}`}>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-lime text-black text-[10px] font-bold rounded-full">
                      Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} ${colors.borderHover} flex items-center justify-center mb-4 transition-all duration-300`}>
                    <service.icon className={colors.text} size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-text-muted text-sm mb-4">{service.description}</p>

                  {/* Examples - Show on hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? 'auto' : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-1.5">
                        {service.examples.map((example, j) => (
                          <span
                            key={j}
                            className={`text-[11px] px-2 py-1 rounded-full ${colors.tag}`}
                          >
                            {example}
                          </span>
                        ))}
                      </div>
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
          <p className="text-text-secondary mb-6">
            E muito mais! Personalizamos para as necessidades do seu governo.
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 glass-subtle rounded-2xl font-medium text-white hover:border-lime/30 transition-all duration-300"
          >
            Ver Todos os Serviços
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />
    </section>
  );
}
