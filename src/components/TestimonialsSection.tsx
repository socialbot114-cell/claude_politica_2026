'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Secretário de Tecnologia',
    role: 'Governo do Estado de SP',
    avatar: 'SP',
    quote: 'Reduzimos em 65% as ligações no call center. A população aprovou e nossa equipe agora foca em casos complexos.',
    rating: 5,
    color: 'lime',
  },
  {
    name: 'Diretora de Atendimento',
    role: 'Prefeitura de Belo Horizonte',
    avatar: 'BH',
    quote: 'Em 3 meses, o chatbot já atendeu mais de 200 mil cidadãos. A satisfação subiu de 72% para 94%.',
    rating: 5,
    color: 'purple',
  },
  {
    name: 'Coordenador de TI',
    role: 'Governo do Estado do PR',
    avatar: 'PR',
    quote: 'A integração com nossos sistemas legados foi surpreendentemente simples. Estamos expandindo para mais secretarias.',
    rating: 5,
    color: 'cyan',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="relative py-20 px-4">
      {/* Section header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-lime/10 text-lime border border-lime/20 mb-4">
          Depoimentos
        </span>
        <h2 className="text-3xl font-bold mb-3">
          Quem <span className="gradient-text">Já Usa</span> Aprova
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Veja o que líderes de governos dizem sobre nossa solução.
        </p>
      </motion.div>

      {/* Testimonial card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto"
      >
        <div className="relative">
          {/* Main card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`glass rounded-3xl p-6 border border-${testimonials[currentIndex].color}/20`}
          >
            {/* Quote icon */}
            <div className={`w-10 h-10 rounded-xl bg-${testimonials[currentIndex].color}/10 flex items-center justify-center mb-4`}>
              <Quote className={`text-${testimonials[currentIndex].color}`} size={20} />
            </div>

            {/* Quote text */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br from-${testimonials[currentIndex].color} to-cyan flex items-center justify-center text-black font-bold`}
              >
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full glass flex items-center justify-center border border-gray-700 hover:border-lime/50 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? 'w-6 bg-lime'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full glass flex items-center justify-center border border-gray-700 hover:border-lime/50 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mt-12"
      >
        {['+50 Prefeituras', '+10 Estados', '5M+ Atendimentos'].map((badge, i) => (
          <div
            key={i}
            className="px-4 py-2 rounded-full glass text-sm text-gray-400 border border-gray-800"
          >
            <span className="text-lime font-semibold">{badge.split(' ')[0]}</span>{' '}
            {badge.split(' ').slice(1).join(' ')}
          </div>
        ))}
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
