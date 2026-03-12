import React from 'react';
import { Activity, Heart, Stethoscope, Beaker, FileHeart, ActivitySquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Consultas Cardiológicas',
      description: 'Avaliação clínica completa, prevenção e diagnóstico de condições cardiovasculares com nossos especialistas.',
      color: 'bg-primary-50',
    },
    {
      icon: <FileHeart className="h-8 w-8" />,
      title: 'Eletrocardiograma (ECG)',
      description: 'Exame rápido e indolor que registra a atividade elétrica do coração, fundamental para detectar arritmias.',
      color: 'bg-primary-100',
    },
    {
      icon: <ActivitySquare className="h-8 w-8" />,
      title: 'Ecocardiograma',
      description: 'Ultrassom do coração que permite avaliar o tamanho, a espessura e o funcionamento das válvulas e do músculo cardíaco.',
      color: 'bg-primary-50',
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Holter 24 Horas',
      description: 'Monitoramento contínuo da atividade do coração durante um dia inteiro para identificar problemas no ritmo cardíaco.',
      color: 'bg-primary-100',
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: 'Teste Ergométrico',
      description: 'Avaliação da resposta do coração ao esforço físico, essencial para diagnosticar doença arterial coronariana.',
      color: 'bg-primary-50',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'MAPA',
      description: 'Monitorização Ambulatorial da Pressão Arterial, fundamental para o diagnóstico e controle da hipertensão.',
      color: 'bg-primary-100',
    },
  ];

  return (
    <section id="servicos" className="section-container bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Nossos Serviços</span>
        <h2 className="heading-md mb-6">Diagnóstico completo para o seu coração</h2>
        <p className="text-body">
          Oferecemos uma estrutura completa de exames cardiológicos em um só lugar, garantindo
          agilidade no diagnóstico e precisão no seu tratamento.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${service.color} text-primary-600 mb-8 border border-primary-200/50 shadow-inner group-hover:bg-gold-gradient group-hover:text-white group-hover:shadow-lg transition-all duration-500`}>
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">{service.title}</h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>
            
            <a href="#contato" className="inline-flex items-center text-primary-700 font-bold text-xs uppercase tracking-widest hover:text-primary-800 border-b border-primary-200 pb-1">
               Solicitar Agendamento
               <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
