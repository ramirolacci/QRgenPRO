import React from 'react';
import { Link, Type, Mail, Phone, Wifi, User } from 'lucide-react';
import { getTranslation } from '../utils/translations';

interface QRTypeSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  t: (key: string) => string;
}

export const QRTypeSelector: React.FC<QRTypeSelectorProps> = ({
  selectedType,
  onTypeChange,
  t,
}) => {
  const qrTypes = [
    { id: 'url', labelKey: 'url', icon: Link, color: 'bg-blue-500' },
    { id: 'text', labelKey: 'text', icon: Type, color: 'bg-green-500' },
    { id: 'email', labelKey: 'email', icon: Mail, color: 'bg-red-500' },
    { id: 'phone', labelKey: 'phone', icon: Phone, color: 'bg-yellow-500' },
    { id: 'wifi', labelKey: 'wifi', icon: Wifi, color: 'bg-purple-500' },
    { id: 'vcard', labelKey: 'contact', icon: User, color: 'bg-indigo-500' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
      {qrTypes.map((type) => {
        const Icon = type.icon;
        const isSelected = selectedType === type.id;
        
        return (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`
              relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 group
              ${isSelected 
                ? 'border-purple-500 dark:border-orange-500 bg-purple-50 dark:bg-orange-900/20 shadow-lg scale-105' 
                : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-purple-300 dark:hover:border-orange-400 hover:shadow-md hover:scale-102'
              }
            `}
          >
            <div className={`
              w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 mx-auto transition-all duration-300
              ${isSelected ? type.color : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'}
            `}>
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <span className={`
              text-xs sm:text-sm font-medium transition-colors duration-300
              ${isSelected ? 'text-purple-700 dark:text-orange-300' : 'text-gray-700 dark:text-gray-300'}
            `}>
              {t(type.labelKey)}
            </span>
          </button>
        );
      })}
    </div>
  );
};