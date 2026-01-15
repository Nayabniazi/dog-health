'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  Mail, 
  Search, 
  LogOut, 
  RefreshCw,
  LayoutDashboard,
  MessageCircle,
  Clock,
  Menu,
  X
} from 'lucide-react';

type Consultation = {
  _id: string;
  name: string;
  whatsapp: string;
  petType: string;
  symptom: string;
  createdAt: string;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Check authentication on client mount
    const timer = setTimeout(() => {
      const auth = localStorage.getItem('admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
      setCheckingAuth(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('admin_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  if (checkingAuth) return null;

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 selection:bg-gray-200">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <LoginPage key="login" onLoginSuccess={handleLoginSuccess} />
        ) : (
          <DashboardPage key="dashboard" onLogout={handleLogout} />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Login Component ---

function LoginPage({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 600));

    if (email === 'admin@gmail.com' && password === 'admin123') {
      onLoginSuccess();
    } else {
      setError('Credenciales inválidas.');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div 

        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-sm"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-24 w-auto items-center justify-center relative">
            <Image 
              src="/images/header-logo.png" 
              alt="Logo" 
              width={200} 
              height={100}
              className="h-full w-auto object-contain drop-shadow-sm" 
            />
          </div>
          <h1 className="text-xl font-semibold tracking-tight !text-white">Acceso Administrativo</h1>
          <p className="mt-2 text-sm text-white/70">Por favor ingresa tus credenciales para continuar.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-0"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-0"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-3 text-xs font-medium text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-white py-2.5 text-sm font-medium text-secondary transition-all hover:bg-gray-100 disabled:opacity-70"
          >
            {loading ? 'Autenticando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// --- Dashboard Component ---

function DashboardPage({ onLogout }: { onLogout: () => void }) {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchConsultations = async (showLoading = false) => {
    if (showLoading) setLoading(true);
    try {
      const response = await fetch('/api/consultations');
      if (response.ok) {
        const data = await response.json();
        setConsultations(data);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations(true);
    const interval = setInterval(() => fetchConsultations(false), 15000);
    return () => clearInterval(interval);
  }, []);

  const filteredConsultations = consultations.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.petType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.whatsapp.includes(searchTerm)
  );

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile Sidebar Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 transform border-r border-white/10 bg-secondary text-white transition-transform duration-200 ease-in-out md:static md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-white p-1 flex items-center justify-center shadow-sm relative">
              <Image 
                src="/images/header-logo.png" 
                alt="Logo" 
                fill
                sizes="40px"
                className="object-contain" 
              />
            </div>
            <span className="font-semibold tracking-tight text-white">Admin Veterinaria</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden text-white/70 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 mt-4">
          <a href="#" className="flex items-center gap-3 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white">
            <LayoutDashboard className="h-4 w-4 text-white/70" />
            Panel de Control
          </a>
          <div className="pt-4 pb-2">
             <div className="px-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">Configuración</div>
          </div>
          <button onClick={onLogout} className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <LogOut className="h-4 w-4 text-white/70" />
            Cerrar Sesión
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
           <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-xs">
                 A
              </div>
              <div className="flex flex-col overflow-hidden">
                 <span className="text-xs font-medium text-white truncate">Administrador</span>
                 <span className="text-[10px] text-white/50 truncate">admin@gmail.com</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#fafafa]">
        {/* Top Header */}
        <header className="h-16 flex-shrink-0 border-b border-gray-100 bg-white px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1 -ml-1 text-gray-500 hover:text-gray-900"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Resumen</h1>
          </div>
          <div className="flex items-center gap-3">
             <button 
                onClick={() => fetchConsultations(true)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Actualizar"
             >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
             </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
            <StatCard 
              label="Solicitudes Totales" 
              value={consultations.length} 
            />
            <StatCard 
              label="Nuevas Hoy" 
              value={consultations.filter(c => new Date(c.createdAt).toDateString() === new Date().toDateString()).length}
              highlight 
            />
          </div>

          {/* Table Container */}
          <div className="rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            {/* Table Toolbar */}
            <div className="border-b border-gray-50 px-4 md:px-5 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
               <h2 className="text-sm font-medium text-gray-900">Consultas</h2>
               <div className="relative w-full md:w-auto">
                  <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Filtrar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-9 w-full md:w-64 rounded-md border border-gray-200 bg-gray-50 pl-8 pr-3 text-xs outline-none focus:border-gray-300 focus:bg-white transition-all"
                  />
               </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px] md:min-w-0">
                <thead className="bg-gray-50/50 text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                  <tr>
                    <th className="px-5 py-3">Paciente</th>
                    <th className="px-5 py-3">Contacto</th>
                    <th className="px-5 py-3">Motivo</th>
                    <th className="px-5 py-3">Recibido</th>
                    <th className="px-5 py-3 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loading && consultations.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-12 text-center">
                        <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
                      </td>
                    </tr>
                  ) : filteredConsultations.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-12 text-center text-xs text-gray-400">
                        No se encontraron solicitudes.
                      </td>
                    </tr>
                  ) : (
                    filteredConsultations.map((consultation) => (
                      <motion.tr 
                        key={consultation._id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="group hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 border border-white shadow-sm shrink-0">
                              {consultation.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{consultation.name}</div>
                              <div className="text-xs text-gray-500">{consultation.petType}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                            {consultation.whatsapp}
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-700">
                            {consultation.symptom}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <Clock className="h-3 w-3" />
                            {new Date(consultation.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <a 
                            href={`https://wa.me/${consultation.whatsapp.replace(/\D/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-green-600 hover:border-green-200 transition-all"
                          >
                            <MessageCircle className="h-3 w-3" />
                            Chat
                          </a>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between text-[10px] text-gray-400">
               <span>{filteredConsultations.length} registros</span>
               <span>Sincronizado</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, highlight = false }: { label: string, value: number, highlight?: boolean }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <div className="text-xs font-medium text-gray-500">{label}</div>
      <div className={`mt-1 text-2xl font-bold tracking-tight ${highlight ? 'text-gray-900' : 'text-gray-700'}`}>
        {value}
      </div>
    </div>
  );
}
