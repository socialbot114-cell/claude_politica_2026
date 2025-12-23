'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  produto: [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Preços', href: '#pricing' },
    { name: 'Integrações', href: '#integrations' },
    { name: 'API', href: '#api' },
  ],
  empresa: [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Carreiras', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' },
  ],
  recursos: [
    { name: 'Documentação', href: '#docs' },
    { name: 'Cases de Sucesso', href: '#cases' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'FAQ', href: '#faq' },
  ],
  legal: [
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
  return (
    <footer className="relative pt-16 pb-8 px-4 border-t border-gray-800">
      {/* Logo and description */}
      <div className="max-w-md mx-auto mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime to-cyan flex items-center justify-center">
            <MessageSquare className="text-black" size={20} />
          </div>
          <h3 className="text-xl font-bold">
            <span className="text-lime">Gov</span>
            <span className="text-white">Chat</span>
            <span className="text-purple">AI</span>
          </h3>
        </div>
        <p className="text-gray-400 text-sm mb-6">
          Transformando o atendimento ao cidadão com inteligência artificial.
          Soluções sob medida para governos estaduais e municipais.
        </p>

        {/* Social links */}
        <div className="flex gap-3">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center border border-gray-800 hover:border-lime/50 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={18} className="text-gray-400" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Links grid */}
      <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-12">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-sm font-semibold mb-4 capitalize">{category}</h4>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-lime transition-colors inline-flex items-center gap-1 group"
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
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="max-w-md mx-auto mb-12">
        <div className="glass rounded-2xl p-6 border border-gray-800">
          <h4 className="font-semibold mb-2">Receba novidades</h4>
          <p className="text-sm text-gray-400 mb-4">
            Dicas de IA para governos, cases e atualizações.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-lime/50 focus:outline-none text-sm placeholder:text-gray-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-4 py-3 bg-lime text-black font-medium rounded-xl hover:bg-lime-dark transition-colors"
            >
              Assinar
            </motion.button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-md mx-auto pt-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2024 GovChatAI. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
            <span>Sistema operacional</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-lime text-black flex items-center justify-center shadow-lg glow-lime z-50"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-lime/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
}
