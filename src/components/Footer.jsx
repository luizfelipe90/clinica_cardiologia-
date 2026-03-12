import React from 'react';
import { HeartPulse, Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={scrollToTop}>
              <div className="p-2 rounded-lg bg-gold-gradient">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-serif">
                Clínica <span className="text-primary-600">Cardiológica</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Clínica especializada em medicina cardiovascular. Nosso compromisso é com a qualidade e 
              prolongamento da sua vida através de diagnósticos precisos e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-gold-gradient flex items-center justify-center transition-all duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-gold-gradient flex items-center justify-center transition-all duration-300">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-gold-gradient flex items-center justify-center transition-all duration-300">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Página Inicial</a></li>
              <li><a href="#sobre" className="hover:text-primary-400 transition-colors">Sobre a Clínica</a></li>
              <li><a href="#servicos" className="hover:text-primary-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#equipe" className="hover:text-primary-400 transition-colors">Corpo Clínico</a></li>
              <li><a href="#depoimentos" className="hover:text-primary-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Consultas Cardiológicas</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Exames Diagnósticos</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Check-up Preventivo</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Acompanhamento Esportivo</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Segunda Opinião Médica</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato Rápido</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-slate-400">(11) 90000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-slate-400">contato@cardiovida.com.br</span>
              </li>
            </ul>
            <button className="mt-6 btn-primary w-full py-2.5 text-sm" onClick={() => window.location.href="#contato"}>
               Agendar Consulta
            </button>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Clínica Clínica Cardiológica. Todos os direitos reservados. Responsável Técnico: Dr. Roberto Almeida (CRM 12345)
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
             <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-transform hover:-translate-y-1 focus:outline-none z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
