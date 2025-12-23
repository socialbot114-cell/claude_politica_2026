'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  MessageSquare,
  Mic,
  Smartphone,
  GitBranch,
  Users,
  BarChart3,
  FileText,
  Building2,
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Atendimento Inteligente',
    description: 'Interação em linguagem natural, sem menus engessados. Respostas adaptadas ao tom institucional do vereador.',
    color: 'lime',
    gradient: 'from-lime to-cyan',
  },
  {
    icon: Mic,
    title: 'Mensagem do Vereador',
    description: 'Áudio gravado pelo próprio vereador acolhendo o cidadão, com texto institucional de apresentação.',
    color: 'purple',
    gradient: 'from-purple to-pink',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Oficial',
    description: 'Um único número oficial do gabinete, centralizando todo o atendimento com identidade clara.',
    color: 'cyan',
    gradient: 'from-cyan to-lime',
  },
  {
    icon: GitBranch,
    title: 'Direcionamento Automático',
    description: 'Classificação automática da demanda pela IA e encaminhamento para Chefia ou Assessoria do Gabinete.',
    color: 'pink',
    gradient: 'from-pink to-purple',
  },
  {
    icon: Users,
    title: 'Atendimento Humano',
    description: 'Quando necessário, transferência para atendente com sistema de fila que evita perda de mensagens.',
    color: 'lime',
    gradient: 'from-lime to-cyan',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Estratégicos',
    description: 'Dados sobre assuntos mais demandados, horários de pico e perfil das demandas para subsidiar o mandato.',
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
          Tudo que seu{' '}
          <span className="gradient-text">Gabinete</span> Precisa
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Uma plataforma completa para modernizar o atendimento e fortalecer a escuta social.
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

      {/* Value proposition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="glass rounded-2xl p-6 max-w-md mx-auto border border-lime/20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FileText className="text-lime" size={24} />
            <h3 className="font-semibold text-lg">Gestão do Mandato</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Não é apenas um chatbot. É uma <span className="text-lime font-semibold">ferramenta de gestão do mandato parlamentar</span> que
            fortalece a imagem de vereador acessível e mandato moderno.
          </p>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
