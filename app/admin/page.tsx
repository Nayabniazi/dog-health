'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Search, 
  LogOut, 
  Calendar, 
  User, 
  Dog, 
  Phone, 
  Activity,
  ChevronRight,
  RefreshCw,
  LayoutDashboard
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
    // Check if previously authenticated
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false);
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
    <div className="min-h-screen bg-gray-50 font-sans">
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

    // Simulate network delay for effect
    await new Promise(r => setTimeout(r, 800));

    if (email === 'admin@gmail.com' && password === 'admin123') {
      onLoginSuccess();
    } else {
      setError('Invalid credentials. Access denied.');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a192f] p-4">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="bg-primary px-8 py-6 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/20 p-2">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-wide">Admin Portal</h1>
          </div>
          <p className="mt-2 text-primary-100 text-sm opacity-90">Secure access for authorized personnel only.</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  placeholder="admin@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100 flex items-center gap-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-xl bg-primary py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/30 disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    Sign In Dashboard
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 p-4 text-center text-xs text-gray-400 border-t border-gray-100">
          Veterinary Regenerative Medicine Leon &copy; {new Date().getFullYear()}
        </div>
      </motion.div>
    </div>
  );
}

// --- Dashboard Component ---

function DashboardPage({ onLogout }: { onLogout: () => void }) {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
    fetchConsultations(true); // Initial load with spinner
    const interval = setInterval(() => {
        fetchConsultations(false); // Silent background update
    }, 15000); // Poll every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const filteredConsultations = consultations.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.petType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.whatsapp.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0a192f] text-white flex-shrink-0 md:h-screen sticky top-0">
        <div className="p-6 border-b border-gray-800">
          <h2 className="font-display text-xl font-bold tracking-wide text-white">Vet Admin</h2>
          <p className="text-xs text-gray-400 mt-1">Management Console</p>
        </div>
        
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 rounded-lg bg-primary/20 px-4 py-3 text-primary-400 font-medium">
            <LayoutDashboard className="h-5 w-5" />
            Overview
          </a>
          <button onClick={onLogout} className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Admin.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => fetchConsultations(true)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Requests" 
            value={consultations.length} 
            icon={<Activity className="h-6 w-6 text-blue-600" />} 
            bg="bg-blue-50"
          />
          <StatCard 
            title="Today's Leads" 
            value={consultations.filter(c => new Date(c.createdAt).toDateString() === new Date().toDateString()).length} 
            icon={<Calendar className="h-6 w-6 text-green-600" />} 
            bg="bg-green-50"
          />
        </div>

        {/* Content Area */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Consultations</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 rounded-lg border border-gray-200 py-2 pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Owner Name</th>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Pet Details</th>
                  <th className="px-6 py-4 font-medium">Symptom</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    </td>
                  </tr>
                ) : filteredConsultations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                      No consultation requests found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredConsultations.map((consultation) => (
                    <motion.tr 
                      key={consultation._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="group hover:bg-gray-50 transition-colors"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                        {new Date(consultation.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-xs">
                            {consultation.name.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-900">{consultation.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-gray-400" />
                          {consultation.whatsapp}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Dog className="h-4 w-4 text-gray-400" />
                          {consultation.petType}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                          {consultation.symptom}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a 
                          href={`https://wa.me/${consultation.whatsapp.replace(/\D/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80"
                        >
                          Message
                          <ChevronRight className="h-3 w-3" />
                        </a>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 text-xs text-gray-500 flex justify-between">
             <span>Showing {filteredConsultations.length} results</span>
             <span>Admin Panel v1.0</span>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon, bg }: { title: string, value: string | number, icon: React.ReactNode, bg: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${bg}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900 font-display">{value}</p>
      </div>
    </div>
  );
}
