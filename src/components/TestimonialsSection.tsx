'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Eduardo',
    role: 'Secretário de Tecnologia',
    organization: 'Governo do Estado de SP',
    avatar: 'SP',
    quote: 'Reduzimos em 65% as ligações no call center. A população aprovou e nossa equipe agora foca em casos complexos. A implementação foi surpreendentemente rápida.',
    rating: 5,
    metrics: { reduction: '65%', satisfaction: '94%' },
    color: 'lime' as const,
  },
  {
    name: 'Ana Paula Ferreira',
    role: 'Diretora de Atendimento',
    organization: 'Prefeitura de Belo Horizonte',
    avatar: 'BH',
    quote: 'Em 3 meses, o chatbot já atendeu mais de 200 mil cidadãos. A satisfação subiu de 72% para 94%. Não imaginávamos resultados tão expressivos.',
    rating: 5,
    metrics: { reduction: '72%', satisfaction: '94%' },
    color: 'purple' as const,
  },
  {
    name: 'Roberto Mendes',
    role: 'Coordenador de TI',
    organization: 'Governo do Estado do PR',
    avatar: 'PR',
    quote: 'A integração com nossos sistemas legados foi surpreendentemente simples. Estamos expandindo para mais secretarias e os resultados são consistentes.',
    rating: 5,
    metrics: { reduction: '58%', satisfaction: '96%' },
    color: 'cyan' as const,
  },
];

const colorClasses = {
  lime: {
    bg: 'bg-lime/10',
    border: 'border-lime/20',
    text: 'text-lime',
    avatar: 'from-lime to-cyan',
  },
  purple: {
    bg: 'bg-purple/10',
    border: 'border-purple/20',
    text: 'text-purple',
    avatar: 'from-purple to-pink',
  },
  cyan: {
    bg: 'bg-cyan/10',
    border: 'border-cyan/20',
    text: 'text-cyan',
    avatar: 'from-cyan to-lime',
  },
};

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const colors = colorClasses[currentTestimonial.color];

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
          <span className="badge-premium mb-6 inline-flex">
            <MessageSquare size={14} />
            Depoimentos
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Quem{' '}
            <span className="gradient-text">Já Usa</span>{' '}
            Aprova
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Veja o que líderes de governos em todo o Brasil dizem sobre nossa solução.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`card-premium p-8 md:p-12 border ${colors.border}`}
              >
                <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                  {/* Content */}
                  <div>
                    {/* Quote Icon */}
                    <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}>
                      <Quote className={colors.text} size={22} />
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </blockquote>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.avatar} flex items-center justify-center text-black font-bold text-lg`}>
                        {currentTestimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">{currentTestimonial.name}</p>
                        <p className="text-text-secondary">{currentTestimonial.role}</p>
                        <p className="text-text-muted text-sm">{currentTestimonial.organization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="hidden md:flex flex-col gap-4">
                    <div className={`p-6 rounded-2xl ${colors.bg} border ${colors.border} text-center`}>
                      <div className={`text-4xl font-bold ${colors.text} mb-1`}>
                        {currentTestimonial.metrics.reduction}
                      </div>
                      <div className="text-sm text-text-muted">Redução de custos</div>
                    </div>
                    <div className={`p-6 rounded-2xl ${colors.bg} border ${colors.border} text-center`}>
                      <div className={`text-4xl font-bold ${colors.text} mb-1`}>
                        {currentTestimonial.metrics.satisfaction}
                      </div>
                      <div className="text-sm text-text-muted">Satisfação</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass-subtle flex items-center justify-center hover:border-lime/30 transition-all duration-300"
              >
                <ChevronLeft size={22} />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? 'w-8 bg-lime'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass-subtle flex items-center justify-center hover:border-lime/30 transition-all duration-300"
              >
                <ChevronRight size={22} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            { value: '+50', label: 'Prefeituras' },
            { value: '+10', label: 'Estados' },
            { value: '5M+', label: 'Atendimentos' },
          ].map((badge, i) => (
            <div
              key={i}
              className="px-6 py-3 glass-subtle rounded-full"
            >
              <span className="text-lime font-bold">{badge.value}</span>{' '}
              <span className="text-text-secondary">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />
    </section>
  );
}
