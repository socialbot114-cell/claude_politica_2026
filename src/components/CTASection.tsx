'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Mail, CheckCircle2, Building2, User, AtSign, ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    submitted: false,
    loading: false,
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });

    setTimeout(() => {
      setFormState({ ...formState, loading: false, submitted: true });
    }, 1500);
  };

  const inputFields = [
    {
      name: 'name',
      label: 'Nome completo',
      placeholder: 'Seu nome',
      type: 'text',
      icon: User,
    },
    {
      name: 'email',
      label: 'Email institucional',
      placeholder: 'email@governo.br',
      type: 'email',
      icon: AtSign,
    },
    {
      name: 'organization',
      label: 'Órgão / Secretaria',
      placeholder: 'Ex: Secretaria de Tecnologia',
      type: 'text',
      icon: Building2,
    },
    {
      name: 'phone',
      label: 'Telefone',
      placeholder: '(11) 99999-9999',
      type: 'tel',
      icon: Phone,
    },
  ];

  return (
    <section ref={containerRef} className="relative section-premium overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-gradient-subtle -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-lime/3 blur-[200px] -z-10" />

      <div className="container-premium">
        <div className="max-w-5xl mx-auto">
          {!formState.submitted ? (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Left Side - Content */}
              <div className="text-center lg:text-left">
                <span className="badge-premium mb-6 inline-flex">
                  <Sparkles size={14} />
                  Demonstração Gratuita
                </span>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                  Transforme o{' '}
                  <span className="gradient-text">Atendimento</span>{' '}
                  Hoje
                </h2>

                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Solicite uma demonstração personalizada e veja como a IA pode revolucionar o atendimento ao cidadão na sua prefeitura ou estado.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Demonstração personalizada para seu contexto',
                    'Análise gratuita de viabilidade',
                    'Proposta sem compromisso',
                    'Implementação em até 7 dias',
                  ].map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-lime" />
                      </div>
                      <span className="text-text-secondary">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Alternative Contact */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-center justify-center gap-2 px-5 py-3 glass-subtle rounded-xl text-sm hover:border-lime/30 transition-all duration-300"
                  >
                    <Phone size={16} className="text-lime" />
                    <span className="text-text-secondary">(11) 99999-9999</span>
                  </a>
                  <a
                    href="mailto:contato@govchatai.com.br"
                    className="flex items-center justify-center gap-2 px-5 py-3 glass-subtle rounded-xl text-sm hover:border-purple/30 transition-all duration-300"
                  >
                    <Mail size={16} className="text-purple" />
                    <span className="text-text-secondary">contato@govchatai.com.br</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <form onSubmit={handleSubmit} className="card-premium p-8 space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Solicite uma demonstração</h3>
                    <p className="text-sm text-text-muted">Preencha seus dados e entraremos em contato</p>
                  </div>

                  {inputFields.map((field, i) => (
                    <motion.div
                      key={field.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      <label className="label-premium">{field.label}</label>
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === field.name ? 'text-lime' : 'text-text-muted'}`}>
                          <field.icon size={18} />
                        </div>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formState[field.name as keyof typeof formState] as string}
                          onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 input-premium"
                          required={field.name !== 'phone'}
                        />
                      </div>
                    </motion.div>
                  ))}

                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={formState.loading}
                    className="group w-full py-4 px-6 bg-lime text-black font-semibold rounded-2xl glow-lime-soft transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState.loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <>
                        <Send size={18} />
                        Solicitar Demonstração
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-center text-text-muted">
                    Ao enviar, você concorda com nossa{' '}
                    <a href="#" className="text-lime hover:underline">Política de Privacidade</a>
                  </p>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-lg mx-auto py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-lime/20 flex items-center justify-center"
              >
                <CheckCircle2 className="text-lime" size={48} />
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold mb-4"
              >
                Recebemos sua solicitação!
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-text-secondary mb-8"
              >
                Nossa equipe entrará em contato em até <span className="text-lime font-semibold">24 horas</span> para agendar sua demonstração.
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormState({ name: '', email: '', organization: '', phone: '', submitted: false, loading: false })}
                className="px-8 py-4 glass-subtle rounded-2xl font-medium text-white hover:border-lime/30 transition-all duration-300"
              >
                Enviar outra solicitação
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />
    </section>
  );
}
