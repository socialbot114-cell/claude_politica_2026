'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageSquare, Instagram, Linkedin, Youtube, ArrowUpRight, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

const footerLinks = {
  Produto: [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Preços', href: '#pricing' },
    { name: 'Integrações', href: '#integrations' },
    { name: 'API', href: '#api' },
  ],
  Empresa: [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Carreiras', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' },
  ],
  Recursos: [
    { name: 'Documentação', href: '#docs' },
    { name: 'Cases de Sucesso', href: '#cases' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'FAQ', href: '#faq' },
  ],
  Legal: [
    { name: 'Privacidade', href: '#privacy' },
    { name: 'Termos de Uso', href: '#terms' },
    { name: 'LGPD', href: '#lgpd' },
    { name: 'Segurança', href: '#security' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-subtle -z-10" />
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container-premium">
        {/* Main Footer Content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand Column */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime to-cyan flex items-center justify-center">
                  <MessageSquare className="text-black" size={24} />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-lime/20 blur-md -z-10" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                <span className="text-lime">Gov</span>
                <span className="text-white">Chat</span>
                <span className="text-purple">AI</span>
              </span>
            </div>

            <p className="text-text-secondary leading-relaxed mb-8 max-w-sm">
              Transformando o atendimento ao cidadão com inteligência artificial. Soluções sob medida para governos estaduais e municipais.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass-subtle flex items-center justify-center hover:border-lime/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-text-secondary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="group text-sm text-text-secondary hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-premium p-6"
            >
              <h4 className="font-semibold text-white mb-2">Receba novidades</h4>
              <p className="text-sm text-text-secondary mb-4">
                Dicas de IA para governos, cases e atualizações.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full input-premium text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-lime text-black font-semibold rounded-xl hover:bg-lime-light transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Inscrever-se
                  </motion.button>
                </form>
              ) : (
                <div className="flex items-center gap-2 py-3 text-lime">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-medium">Inscrito com sucesso!</span>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              &copy; 2025 GovChatAI. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              <span className="text-sm text-text-muted">Sistema operacional</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-lime text-black flex items-center justify-center shadow-xl glow-lime-soft z-50 transition-all duration-300"
      >
        <ArrowUp size={22} />
      </motion.button>

      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-lime/3 blur-[150px] -z-10" />
    </footer>
  );
}
