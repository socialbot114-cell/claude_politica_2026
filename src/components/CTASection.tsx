'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    submitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormState({ ...formState, submitted: true });
    }, 500);
  };

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime/5 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="relative max-w-md mx-auto"
      >
        {!formState.submitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-lime to-cyan flex items-center justify-center"
              >
                <Send className="text-black" size={28} />
              </motion.div>
              <h2 className="text-3xl font-bold mb-3">
                Transforme o{' '}
                <span className="gradient-text">Atendimento</span>
              </h2>
              <p className="text-gray-400">
                Solicite uma demonstração gratuita e veja a IA em ação.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-4 rounded-2xl bg-card border border-gray-800 focus:border-lime/50 focus:outline-none transition-colors placeholder:text-gray-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Email institucional"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-4 rounded-2xl bg-card border border-gray-800 focus:border-lime/50 focus:outline-none transition-colors placeholder:text-gray-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Órgão / Secretaria"
                  value={formState.organization}
                  onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                  className="w-full px-4 py-4 rounded-2xl bg-card border border-gray-800 focus:border-lime/50 focus:outline-none transition-colors placeholder:text-gray-500"
                  required
                />
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 bg-lime text-black font-semibold rounded-2xl hover:bg-lime-dark transition-all glow-lime flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Solicitar Demonstração
              </motion.button>
            </form>

            {/* Alternative contact */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <a
                href="tel:+5511999999999"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl text-sm hover:bg-white/5 transition-colors"
              >
                <Phone size={16} className="text-lime" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </a>
              <a
                href="mailto:contato@govchatai.com.br"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl text-sm hover:bg-white/5 transition-colors"
              >
                <Mail size={16} className="text-purple" />
                <span className="text-gray-400">contato@govchatai.com.br</span>
              </a>
            </motion.div>
          </>
        ) : (
          /* Success state */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-lime/20 flex items-center justify-center"
            >
              <CheckCircle2 className="text-lime" size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Recebemos sua solicitação!</h3>
            <p className="text-gray-400 mb-6">
              Nossa equipe entrará em contato em até 24 horas.
            </p>
            <button
              onClick={() => setFormState({ name: '', email: '', organization: '', submitted: false })}
              className="px-6 py-3 glass rounded-xl text-sm font-medium border border-lime/30 text-lime hover:bg-lime/10 transition-all"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-8 w-12 h-12 rounded-xl bg-purple/10 border border-purple/20"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-8 w-8 h-8 rounded-full bg-lime/10 border border-lime/20"
      />
    </section>
  );
}
