import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gold-gradient rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(212,175,55,0.4)] relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/20 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-900/10 blur-3xl opacity-50"></div>
          
          <div className="lg:grid lg:grid-cols-2 relative z-10">
            {/* Contact Info container */}
            <div className="p-10 md:p-16 text-white text-left">
              <span className="text-white/80 font-bold tracking-widest uppercase text-xs mb-4 block border-b border-white/20 pb-2 w-fit">Atendimento Exclusivo</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Agende sua experiência premium</h2>
              <p className="text-white/90 mb-12 text-lg leading-relaxed italic">
                Sua saúde merece o mais alto padrão de cuidado. Conecte-se com a elite da cardiologia.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-serif">Telefone & WhatsApp</h3>
                    <p className="text-white/80">(11) 90000-0000</p>
                    <p className="text-white/80">(11) 3000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-serif">E-mail Especializado</h3>
                    <p className="text-white/80">agendamento@clinicacardiologica.com.br</p>
                    <p className="text-white/80">contato@clinicacardiologica.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-serif">Endereço</h3>
                    <p className="text-white/80">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-white/80">São Paulo - SP, 01310-100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-serif">Horário Seletivo</h3>
                    <p className="text-white/80">Segunda a Sexta: 07h às 19h</p>
                    <p className="text-white/80">Sábado: 08h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form container */}
            <div className="bg-white p-10 md:p-16 m-4 lg:m-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-slate-50 focus:bg-white"
                    placeholder="João da Silva"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone/WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-slate-50 focus:bg-white"
                      placeholder="(11) 90000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Interesse</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-slate-50 focus:bg-white"
                    >
                      <option>Consulta Médica</option>
                      <option>Exames</option>
                      <option>Dúvidas em Geral</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem (opcional)</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-slate-50 focus:bg-white resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full btn-primary py-4 text-lg">
                  Enviar Solicitação
                </button>
                
                <p className="text-center text-xs text-slate-500 mt-4">
                  Ao enviar, você concorda com a nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
