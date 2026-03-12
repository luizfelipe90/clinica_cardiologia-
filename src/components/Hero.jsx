import React from 'react';
import { ArrowRight, Calendar, Phone, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-primary-50/50 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary-100/30 blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 lg:pr-8 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 font-semibold text-xs mb-8 uppercase tracking-widest">
              <Activity className="h-4 w-4 text-primary-600" />
              <span>Cuidado Cardiovascular de Elite</span>
            </div>
            
            <h1 className="heading-lg mb-8 leading-[1.1]">
              Sua Saúde em <span className="text-gold-gradient italic">Excelência</span> Máxima
            </h1>
            
            <p className="text-body mb-8 max-w-lg">
              Oferecemos diagnósticos precisos e tratamentos avançados. Nossa equipe de especialistas está dedicada a proporcionar o melhor cuidado para o seu coração.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary group scale-105">
                 Agendar Consulta de Elite
                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicos" className="btn-secondary group">
                 Serviços Premium
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-col">
                <p className="text-4xl font-bold text-slate-900 font-serif">+15k</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Pacientes</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl font-bold text-slate-900 font-serif">+20</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Anos de Experiência</p>
              </div>
              <div className="hidden md:block">
                <p className="text-3xl font-bold text-slate-900">4.9</p>
                <p className="text-sm text-slate-500 mt-1">Avaliação Média</p>
              </div>
            </div>
          </div>
          
          {/* Feature Image / Cards Area */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[650px] border-8 border-white bg-slate-100 shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
              <img 
                src="/images/hero_logo.png" 
                alt="Clínica Cardiológica Premium Branding" 
                className="w-full h-full object-contain p-12 bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Card - Contact */}
            <div className="hidden md:flex absolute -bottom-10 -left-12 glass rounded-2xl p-8 gap-5 items-start max-w-sm border-t-4 border-t-primary-500">
              <div className="bg-gold-gradient text-white p-4 rounded-2xl shadow-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Linha Privativa</p>
                <p className="text-xl font-bold text-slate-900 font-serif">(11) 90000-0000</p>
                <a href="#contato" className="text-sm text-primary-700 font-bold hover:text-primary-800 transition-colors mt-2 inline-block">Consultoria por WhatsApp</a>
              </div>
            </div>

             {/* Floating Card - Schedule */}
             <div className="hidden lg:flex absolute top-12 -right-8 bg-white rounded-xl shadow-xl p-5 gap-3 items-center border border-slate-100">
              <div className="bg-teal-100 text-teal-600 p-2 rounded-lg">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Agendamento Fácil</p>
                <p className="text-xs text-slate-500">Sem filas de espera</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
