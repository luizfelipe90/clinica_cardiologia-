import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const doctors = [
    {
      name: 'Dr. Roberto Almeida',
      specialty: 'Cardiologia Clínica e Preventiva',
      crm: 'CRM 12345 / RQE 6789',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Especialista em prevenção de doenças cardiovasculares com mais de 15 anos de atuação.',
    },
    {
      name: 'Dra. Camila Soares',
      specialty: 'Ecocardiografia e Imagem',
      crm: 'CRM 54321 / RQE 9876',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Referência em diagnósticos por imagem do coração, com doutorado pela USP.',
    },
    {
      name: 'Dr. Thiago Mendes',
      specialty: 'Arritmologia Clínica',
      crm: 'CRM 24680 / RQE 1357',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Especialista no tratamento de arritmias cardíacas complexas e implante de marcapassos.',
    },
  ];

  return (
    <section id="equipe" className="section-container bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">Nossa Elite Médica</span>
        <h2 className="heading-md mb-8">Profissionais de Excelência</h2>
        <p className="text-body italic">
          Nossa equipe é formada por médicos de renome nacional, dedicados a oferecer a você o mais alto padrão da medicina cardiovascular.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {doctors.map((doc, index) => (
          <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-700 group border-b-8 border-primary-100/50">
            <div className="relative overflow-hidden h-96">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="w-full h-full object-cover object-top grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Linkedin className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-1 font-serif">{doc.name}</h3>
              <p className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-4">{doc.specialty}</p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 italic">
                "{doc.description}"
              </p>
              
              <div className="pt-6 border-t border-slate-100">
                <a href="#contato" className="btn-secondary w-full py-3 text-[10px] tracking-[0.2em]">
                  CONSULTORIA EXCLUSIVA
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
