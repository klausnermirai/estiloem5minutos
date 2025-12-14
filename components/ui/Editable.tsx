import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Edit2, Image as ImageIcon, Save, X } from 'lucide-react';

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({ 
  id, 
  defaultText, 
  className = '', 
  tag: Tag = 'span',
  multiline = false 
}) => {
  const { isEditing, getContent, updateContent } = useAdmin();
  const [value, setValue] = useState(getContent(id, defaultText));
  const [isFocused, setIsFocused] = useState(false);

  // Atualiza o valor local se o contexto mudar (ex: reset)
  useEffect(() => {
    setValue(getContent(id, defaultText));
  }, [getContent, id, defaultText]);

  const handleBlur = () => {
    setIsFocused(false);
    updateContent(id, value);
  };

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          className={`w-full bg-yellow-50 border border-yellow-300 rounded p-1 outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${className}`}
          style={{ minHeight: '100px' }}
        />
      );
    }
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        className={`bg-yellow-50 border border-yellow-300 rounded px-1 outline-none focus:ring-2 focus:ring-yellow-500 transition-all w-full ${className}`}
      />
    );
  }

  return (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: value }} />
  );
};

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  id,
  defaultSrc,
  alt,
  className = '',
  containerClassName = ''
}) => {
  const { isEditing, getContent, updateContent } = useAdmin();
  const src = getContent(id, defaultSrc);
  const [showInput, setShowInput] = useState(false);
  const [tempSrc, setTempSrc] = useState(src);

  const handleSave = () => {
    updateContent(id, tempSrc);
    setShowInput(false);
  };

  return (
    <div className={`relative group ${containerClassName}`}>
      <img src={src} alt={alt} className={className} />
      
      {isEditing && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => setShowInput(true)}
              className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold flex items-center shadow-lg transform hover:scale-105 transition-transform"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Trocar Imagem
            </button>
          </div>

          {showInput && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-2xl z-50 w-80 border-2 border-brand-500">
              <h4 className="text-sm font-bold text-gray-700 mb-2">URL da Imagem</h4>
              <input
                type="text"
                value={tempSrc}
                onChange={(e) => setTempSrc(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 text-sm mb-3 focus:outline-none focus:border-brand-500"
                placeholder="https://..."
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowInput(false)}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
                <button
                  onClick={handleSave}
                  className="bg-brand-600 text-white px-3 py-2 rounded text-sm font-bold flex items-center"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Salvar
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
