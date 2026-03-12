import React from 'react';
import { Target, Eye, HeartHandshake, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-container bg-white">
      <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Images */}
        <div className="lg:col-span-5 relative mb-12 lg:mb-0">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Recepção da clínica" 
              className="rounded-2xl object-cover h-64 w-full shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Aparelho de eletrocardiograma" 
              className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-gradient rounded-full p-5 shadow-2xl border-4 border-white">
            <HeartHandshake className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">Nossa Herança</span>
          <h2 className="heading-md mb-8">Tradição e Inovação no Cuidado com a Vida</h2>
          
          <p className="text-body mb-6">
            A Clínica Cardiológica nasceu com o propósito de oferecer medicina cardiovascular de excelência, 
            aliando tecnologia de ponta a um atendimento humanizado. Prevenimos, diagnosticamos e tratamos 
            doenças do coração para que nossos pacientes vivam plenamente.
          </p>
          <p className="text-body mb-8">
            Nossa estrutura moderna garante conforto, precisão e segurança em todos os procedimentos, 
            desde consultas preventivas até exames complexos.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {/* Box Missão */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary-600 hover:shadow-xl transition-all group">
              <div className="bg-primary-50 p-3 rounded-xl inline-block mb-4">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">Nossa Missão</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Promover saúde cardiovascular com ética, qualidade e acolhimento, melhorando a qualidade de vida de cada paciente.
              </p>
            </div>

             {/* Box Visão */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary-400 hover:shadow-xl transition-all group">
              <div className="bg-primary-50 p-3 rounded-xl inline-block mb-4">
                <Eye className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">Nossa Visão</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ser referência nacional em cardiologia integrada, reconhecida pela precisão médica e inovação tecnológica.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {[
              "Equipe multidisciplinar altamente qualificada",
              "Equipamentos de última geração para diagnósticos",
              "Atendimento humanizado e focado no bem-estar",
              "Ampla rede de convênios atendida"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
