'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, TrendingUp, Zap, Users, FileText, BarChart3 } from 'lucide-react';

const beneficios = [
  {
    icon: Clock,
    titulo: 'Economia de Tempo',
    valor: '80%',
    descricao: 'menos tempo gasto com atendimentos repetitivos',
    detalhe: 'A equipe foca em demandas complexas enquanto o chatbot resolve dúvidas comuns automaticamente.',
    color: 'lime',
  },
  {
    icon: TrendingUp,
    titulo: 'Otimização do Atendimento',
    valor: '24h',
    descricao: 'de disponibilidade para o cidadão',
    detalhe: 'Atendimento ininterrupto, inclusive fora do horário comercial, feriados e finais de semana.',
    color: 'cyan',
  },
  {
    icon: Zap,
    titulo: 'Respostas Instantâneas',
    valor: '<3s',
    descricao: 'tempo médio de resposta',
    detalhe: 'O cidadão não espera na fila. Recebe atendimento imediato e humanizado.',
    color: 'purple',
  },
  {
    icon: Users,
    titulo: 'Capacidade Ampliada',
    valor: '10x',
    descricao: 'mais atendimentos simultâneos',
    detalhe: 'Atenda dezenas de cidadãos ao mesmo tempo sem sobrecarregar a equipe.',
    color: 'pink',
  },
  {
    icon: FileText,
    titulo: 'Registro Automático',
    valor: '100%',
    descricao: 'das demandas documentadas',
    detalhe: 'Todas as solicitações ficam registradas com data, horário e histórico completo.',
    color: 'lime',
  },
  {
    icon: BarChart3,
    titulo: 'Dados Estratégicos',
    valor: 'Real-time',
    descricao: 'relatórios gerenciais',
    detalhe: 'Identifique os temas mais demandados e subsidie decisões do mandato com dados concretos.',
    color: 'cyan',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
          Benefícios Estimados
        </span>
        <h2 className="text-3xl font-bold mb-3">
          O Que Seu <span className="gradient-text">Gabinete</span> Ganha
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Estimativas baseadas em benchmarks de mercado e otimização de processos com IA.
        </p>
      </motion.div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {beneficios.map((beneficio, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass rounded-2xl p-5 border border-${beneficio.color}/20 hover:border-${beneficio.color}/40 transition-all`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-${beneficio.color}/10 flex items-center justify-center flex-shrink-0`}>
                <beneficio.icon className={`text-${beneficio.color}`} size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-2xl font-bold text-${beneficio.color}`}>{beneficio.valor}</span>
                  <span className="text-sm text-gray-400">{beneficio.descricao}</span>
                </div>
                <h3 className="font-semibold mb-1">{beneficio.titulo}</h3>
                <p className="text-gray-500 text-sm">{beneficio.detalhe}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 text-center"
      >
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          *Estimativas baseadas em estudos de automação de atendimento e benchmarks do setor público.
          Resultados reais podem variar conforme volume e complexidade das demandas.
        </p>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
