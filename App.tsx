
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FarmProvider, useFarm } from './context/FarmContext';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Animals } from './pages/Animals';
import { Flocks } from './pages/Flocks';
import { Breeds } from './pages/Breeds';
import { AIAnalytics } from './pages/AIAnalytics';
import { Health } from './pages/Health';
import { Financials } from './pages/Financials';
import { Inventory } from './pages/Inventory';
import { Breeding } from './pages/Breeding';
import { Reports } from './pages/Reports';
import { Partners } from './pages/Partners';
import { Users } from './pages/Users';
import { Calendar } from './pages/Calendar';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { isRTL } = useFarm();
  return (
    <div className="flex min-h-screen bg-slate-50 transition-all duration-300">
      <Sidebar />
      <main className={`flex-1 transition-all duration-300 ${isRTL ? 'mr-64' : 'ml-64'}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
      </main>
    </div>
  );
};

const ProtectedApp = () => {
    const { isAuthenticated, currentUser } = useFarm();

    if (!isAuthenticated) {
        return <Login />;
    }

    return (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/flocks" element={<Flocks />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/health" element={<Health />} />
            <Route path="/breeding" element={<Breeding />} />
            
            {/* Role Based Routes Protection */}
            {['Admin', 'Manager', 'Partner'].includes(currentUser?.role || '') && (
                <Route path="/financials" element={<Financials />} />
            )}
            
            {['Admin', 'Manager', 'Worker'].includes(currentUser?.role || '') && (
                <Route path="/inventory" element={<Inventory />} />
            )}
            
            {currentUser?.role === 'Admin' && (
                <>
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/settings" element={<Settings />} />
                </>
            )}

            <Route path="/reports" element={<Reports />} />
            <Route path="/ai-analytics" element={<AIAnalytics />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
    );
};

const App: React.FC = () => {
  return (
    <FarmProvider>
      <Router>
        <ProtectedApp />
      </Router>
    </FarmProvider>
  );
};

export default App;
