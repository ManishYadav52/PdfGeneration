import React from 'react';
import ReportGenerator from '../components/ReportGenerator';
import { LogOut, BarChart3, Bell, Settings, Search } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Bar */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-white">Analytics</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/';
                }}
                className="flex items-center space-x-2 bg-red-500/90 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
       

        {/* Report Generator Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-white/10 to-white/5 border-b border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white">Report Generator</h3>
            <p className="text-gray-400 text-sm mt-1">Create and manage your reports</p>
          </div>
          <div className="p-6">
            <ReportGenerator />
          </div>
        </div>
      </div>
    </div>
  );
}