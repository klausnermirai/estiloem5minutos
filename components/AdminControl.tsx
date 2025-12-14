import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Settings, LogOut, Edit3, Eye, Lock } from 'lucide-react';

export const AdminControl: React.FC = () => {
  const { isAdmin, isEditing, login, logout, toggleEditing } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setIsOpen(false);
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAdmin) {
    return (
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        {isEditing && (
           <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-center border border-yellow-300 animate-pulse">
             Modo Edição Ativo
           </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={toggleEditing}
            className={`p-4 rounded-full shadow-xl transition-all ${
              isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 hover:bg-gray-700'
            } text-white`}
            title={isEditing ? "Visualizar Site" : "Editar Conteúdo"}
          >
            {isEditing ? <Eye className="w-6 h-6" /> : <Edit3 className="w-6 h-6" />}
          </button>
          
          <button
            onClick={logout}
            className="p-4 bg-red-600 hover:bg-red-700 rounded-full shadow-xl text-white transition-all"
            title="Sair do modo desenvolvedor"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 p-3 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full shadow-lg opacity-50 hover:opacity-100 transition-all"
        title="Acesso Desenvolvedor"
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="bg-brand-900 p-6 text-white text-center">
              <Lock className="w-12 h-12 mx-auto mb-2 opacity-80" />
              <h3 className="text-xl font-bold font-serif">Área do Desenvolvedor</h3>
              <p className="text-brand-200 text-sm">Digite a senha para editar o site</p>
            </div>
            
            <form onSubmit={handleLogin} className="p-6">
              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha (admin)"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-500 transition-colors"
                  autoFocus
                />
                {error && <p className="text-red-500 text-xs mt-2">Senha incorreta.</p>}
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-md"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};