import React from 'react';
import { Heart, Activity, Users, Phone, Calendar, Clock, MapPin } from 'lucide-react';

const test = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> Emergency: +254 700 000 000</span>
          <span className="hidden md:flex items-center gap-1"><Clock size={14} /> 24/7 Care</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={14} /> Rumuruti Town, Kenya</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">Rumuruti Community</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Our Doctors</a>
          <a href="#" className="hover:text-blue-600 transition">Community</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2">
          <Calendar size={18} /> Book Appointment
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <Activity size={600} className="text-blue-600 translate-x-1/4 -translate-y-1/4" />
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
              Serving our community since 2024
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Your support. <br />
              <span className="text-blue-600">Their access.</span> <br />
              A healthier future.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              Rumuruti Community Hospital is dedicated to providing world-class healthcare 
              that remains accessible to everyone. We believe quality care is a right, not a privilege.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all">
                Donate to Support
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-blue-600 px-8 py-4 rounded-xl font-bold transition-all">
                View Services
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-3xl p-4">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d3b9a8ec81c2?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Hospital Facility" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Patients Served</p>
                  <p className="text-2xl font-bold text-slate-900">12,400+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Comprehensive Care For You</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="text-rose-500" />, title: "Maternal Health", desc: "Dedicated care for mothers and newborns with modern delivery suites." },
              { icon: <Activity className="text-blue-500" />, title: "Emergency Care", desc: "24/7 emergency response and trauma center equipped for any situation." },
              { icon: <Users className="text-emerald-500" />, title: "Community Outreach", desc: "Mobile clinics reaching the most remote areas of Rumuruti." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Activity className="text-blue-400" size={24} />
              <span className="text-xl font-bold">Rumuruti Community Hospital</span>
            </div>
            <p className="max-w-xs">Your support. Their access. A healthier future for everyone in our community.</p>
          </div>
          <div className="flex gap-6 text-white font-medium">
            <a href="#" className="hover:text-blue-400 transition">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms</a>
            <a href="#" className="hover:text-blue-400 transition">Careers</a>
          </div>
        </div>
        <div className="text-center pt-8 text-sm">
          © 2026 Rumuruti Community Hospital. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default test;