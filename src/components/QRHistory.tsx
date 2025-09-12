import React from 'react';
import { Download, Trash2, Clock, X } from 'lucide-react';
import { GeneratedQR } from '../types/qr';
import { downloadQRCode } from '../utils/qrGenerator';

interface QRHistoryProps {
  history: GeneratedQR[];
  onClearHistory: () => void;
  onRemoveItem: (id: string) => void;
  t: (key: string) => string;
}

export const QRHistory: React.FC<QRHistoryProps> = ({ 
  history, 
  onClearHistory, 
  onRemoveItem, 
  t 
}) => {
  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">{t('historyTitle')}</h3>
        <div className="text-center py-8">
          <Clock className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
          <p className="text-gray-500 dark:text-gray-400">{t('noHistoryMessage')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{t('historyTitle')}</h3>
        <button
          onClick={onClearHistory}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 transition-colors duration-200"
          title={t('clearHistoryTooltip')}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2 sm:space-y-3 max-h-64 overflow-y-auto">
        {history.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <img
              src={item.qrCode}
              alt="QR Code"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white truncate">
                {item.data.type.toUpperCase()}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {item.data.content.length > 30 
                  ? `${item.data.content.substring(0, 20)}...` 
                  : item.data.content}
              </p>
            </div>
            <div className="flex items-center space-x-1 flex-shrink-0">
              <button
                onClick={() => downloadQRCode(item.qrCode, `qrcode-${item.id}`)}
                className="p-1.5 sm:p-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-orange-400 transition-colors duration-200"
                title={t('downloadTooltip')}
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="p-1.5 sm:p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 transition-colors duration-200"
                title="Eliminar este código QR"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};