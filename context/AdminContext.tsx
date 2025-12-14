import React, { createContext, useContext, useState, useEffect } from 'react';

interface ContentState {
  [key: string]: string;
}

interface AdminContextType {
  isAdmin: boolean;
  isEditing: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  toggleEditing: () => void;
  content: ContentState;
  updateContent: (key: string, value: string) => void;
  getContent: (key: string, defaultValue: string) => string;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<ContentState>({});

  // Carregar conteúdo salvo do localStorage ao iniciar
  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    
    const savedSession = localStorage.getItem('admin_session');
    if (savedSession === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (password: string) => {
    // Senha simples para demonstração
    if (password === 'admin') {
      setIsAdmin(true);
      setIsEditing(true);
      localStorage.setItem('admin_session', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setIsEditing(false);
    localStorage.removeItem('admin_session');
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const updateContent = (key: string, value: string) => {
    const newContent = { ...content, [key]: value };
    setContent(newContent);
    localStorage.setItem('site_content', JSON.stringify(newContent));
  };

  const getContent = (key: string, defaultValue: string) => {
    return content[key] || defaultValue;
  };

  return (
    <AdminContext.Provider value={{ 
      isAdmin, 
      isEditing, 
      login, 
      logout, 
      toggleEditing, 
      content, 
      updateContent,
      getContent
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};