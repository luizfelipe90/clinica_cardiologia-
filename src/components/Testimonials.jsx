import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo da Silva",
      age: "62 anos",
      text: "Fui diagnosticado com uma arritmia complexa pelo Dr. Thiago. O atendimento desde a recepção até a consulta foi impecável. Hoje tenho qualidade de vida novamente. Recomendo fortemente a clínica.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Maria Aparecida Souza",
      age: "55 anos",
      text: "Eu tinha muito medo de fazer os exames de esforço. A equipe de enfermagem e os médicos da Clínica Cardiológica foram tão atenciosos e cuidadosos que me deixaram completamente tranquila. Uma clínica de excelência.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Fernando Costa",
      age: "48 anos",
      text: "A facilidade de agendar as consultas e realizar os exames no mesmo dia e no mesmo local é no mínimo espetacular. O corpo clínico é extremamente profissional e muito assertivo nos diagnósticos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="section-container bg-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-50 border-[20px] border-primary-100"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">Vozes da Confiança</span>
        <h2 className="heading-md mb-8">Relatos de Gratidão</h2>
        <p className="text-body italic">
          A maior recompensa para o nosso trabalho é ver a saúde e a felicidade restauradas em nossos pacientes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-white rounded-3xl p-10 shadow-lg border border-primary-50 relative mt-8 hover:shadow-2xl transition-all duration-500">
            <div className="absolute -top-6 left-10">
              <Quote className="h-12 w-12 text-primary-500/20 fill-current" />
            </div>
            
            <div className="flex gap-1 mb-6 mt-4">
              {[...Array(testi.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
              ))}
            </div>
            
            <p className="text-slate-600 italic leading-relaxed mb-8">
              "{testi.text}"
            </p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
               <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
               <div>
                  <p className="font-bold text-slate-900 text-sm">{testi.name}</p>
                  <p className="text-slate-500 text-xs">{testi.age}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center relative z-10">
         <p className="text-slate-600 font-medium">Você já foi nosso paciente? <a href="#" className="text-primary-600 font-bold hover:underline">Deixe sua avaliação</a> no Google.</p>
      </div>
    </section>
  );
};

export default Testimonials;
