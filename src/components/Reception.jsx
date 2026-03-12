import React from 'react';
import { Coffee, Wifi, Music, Sparkles } from 'lucide-react';

const Reception = () => {
  return (
    <section id="ambiente" className="section-container bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-30"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">Primeira Classe</span>
        <h2 className="heading-md mb-8">Ambiente Exclusivo e Acolhedor</h2>
        <p className="text-body italic">
          Entendemos que o cuidado começa no primeiro passo. Nossa recepção foi projetada para oferecer 
          tranquilidade, conforto e privacidade antes mesmo da sua consulta.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold-gradient rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white">
              <img 
                src="/images/reception.png" 
                alt="Recepção Premium da Clínica Cardiológica" 
                className="w-full h-full object-cover aspect-video lg:aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-xl hidden md:block border border-white/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold-gradient rounded-2xl text-white">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-serif font-bold text-slate-900">Padrão Elite</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Conforto Absoluto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="mt-16 lg:mt-0 lg:pl-10">
            <div className="space-y-12">
              
              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-600">
                  <Coffee className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Concierge & Café Gourmet</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Desfrute de uma seleção exclusiva de cafés e chás enquanto aguarda, em um espaço planejado para o seu relaxamento.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-600">
                  <Wifi className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Conectividade e Climatização</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ambiente Wi-Fi de alta velocidade e climatização inteligente, garantindo o máximo conforto térmico e digital.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-600">
                  <Music className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Sonorização Terapêutica</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Uma trilha sonora ambiente cuidadosamente curada para reduzir o estresse e promover uma sensação de paz interior.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-16 p-8 rounded-3xl bg-gold-gradient text-white shadow-lg">
              <p className="font-serif italic text-xl">
                "Nosso espaço foi idealizado para que você se sinta em casa, com a segurança de estar em um centro de excelência médica mundial."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-1px bg-white/30"></div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Arquitetura Sensorial</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reception;
