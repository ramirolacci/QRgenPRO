import React from 'react';
import { QRCodeOptions } from '../types/qr';

interface QRCustomizationProps {
  options: QRCodeOptions;
  onChange: (options: QRCodeOptions) => void;
  t: (key: string) => string;
}

export const QRCustomization: React.FC<QRCustomizationProps> = ({
  options,
  onChange,
  t,
}) => {
  const handleChange = (key: keyof QRCodeOptions, value: any) => {
    onChange({ ...options, [key]: value });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {t('customizationTitle')}
      </h3>
      
      <div className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('sizeLabel')}: {options.size}px
          </label>
          <input
            type="range"
            min="128"
            max="512"
            step="32"
            value={options.size}
            onChange={(e) => handleChange('size', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>128px</span>
            <span>512px</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('errorCorrectionLabel')}
          </label>
          <select
            value={options.errorCorrectionLevel}
            onChange={(e) => handleChange('errorCorrectionLevel', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
          >
            <option value="L">{t('lowError')}</option>
            <option value="M">{t('mediumError')}</option>
            <option value="Q">{t('quartileError')}</option>
            <option value="H">{t('highError')}</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('foregroundColor')}
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={options.foregroundColor}
                onChange={(e) => handleChange('foregroundColor', e.target.value)}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={options.foregroundColor}
                onChange={(e) => handleChange('foregroundColor', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('backgroundColor')}
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={options.backgroundColor}
                onChange={(e) => handleChange('backgroundColor', e.target.value)}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={options.backgroundColor}
                onChange={(e) => handleChange('backgroundColor', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};