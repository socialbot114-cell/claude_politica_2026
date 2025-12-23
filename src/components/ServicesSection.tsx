'use client';

import { motion, useInView } from 'framer-motion';
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
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Segunda Via de Documentos',
    description: 'IPTU, certidões, alvarás e mais',
    examples: ['2ª via IPTU', 'Certidão negativa', 'Alvará de funcionamento'],
    color: 'lime',
  },
  {
    icon: Calendar,
    title: 'Agendamentos',
    description: 'Consultas, atendimentos e serviços',
    examples: ['Consultas médicas', 'DETRAN', 'Assistência social'],
    color: 'purple',
  },
  {
    icon: CreditCard,
    title: 'Tributos e Pagamentos',
    description: 'Consulta de débitos e boletos',
    examples: ['Consulta IPTU', 'Parcelamento', 'Código de barras'],
    color: 'cyan',
  },
  {
    icon: HelpCircle,
    title: 'Dúvidas Frequentes',
    description: 'Respostas instantâneas 24/7',
    examples: ['Horários', 'Documentos necessários', 'Procedimentos'],
    color: 'pink',
  },
  {
    icon: MapPin,
    title: 'Localização de Serviços',
    description: 'Encontre unidades próximas',
    examples: ['UBS mais próxima', 'CRAS', 'Escolas'],
    color: 'lime',
  },
  {
    icon: Stethoscope,
    title: 'Saúde',
    description: 'Agendamentos e informações',
    examples: ['Vacinas', 'Exames', 'Medicamentos'],
    color: 'purple',
  },
  {
    icon: GraduationCap,
    title: 'Educação',
    description: 'Matrículas e consultas',
    examples: ['Matrícula escolar', 'Merenda', 'Transporte'],
    color: 'cyan',
  },
  {
    icon: Car,
    title: 'Trânsito',
    description: 'Multas e licenciamento',
    examples: ['Consulta multas', 'IPVA', 'Licenciamento'],
    color: 'pink',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-20 px-4">
      {/* Section header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-pink/10 text-pink border border-pink/20 mb-4">
          Casos de Uso
        </span>
        <h2 className="text-3xl font-bold mb-3">
          Serviços que o{' '}
          <span className="gradient-text">Bot Oferece</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Automatize os serviços mais demandados pela população.
        </p>
      </motion.div>

      {/* Services grid */}
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setExpandedService(expandedService === i ? null : i)}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`glass rounded-2xl p-4 h-full border ${
                expandedService === i
                  ? `border-${service.color}/50`
                  : 'border-gray-800'
              } transition-all`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-3`}
              >
                <service.icon className={`text-${service.color}`} size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
              <p className="text-gray-500 text-xs">{service.description}</p>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedService === i ? 'auto' : 0,
                  opacity: expandedService === i ? 1 : 0,
                  marginTop: expandedService === i ? 12 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="pt-3 border-t border-gray-800">
                  <p className="text-xs text-gray-400 mb-2">Exemplos:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.examples.map((example, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2 py-1 rounded-full bg-${service.color}/10 text-${service.color}`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-10"
      >
        <p className="text-gray-400 text-sm mb-4">
          E muito mais! Personalizamos para as necessidades do seu governo.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 glass rounded-xl text-sm font-medium border border-lime/30 text-lime hover:bg-lime/10 transition-all"
        >
          Ver Todos os Serviços
        </motion.button>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
