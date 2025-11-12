import React from 'react';
import { QRCodeData } from '../types/qr';

interface QRInputFormProps {
  data: QRCodeData;
  onChange: (data: QRCodeData) => void;
  t: (key: string) => string;
}

export const QRInputForm: React.FC<QRInputFormProps> = ({ data, onChange, t }) => {
  const handleContentChange = (content: string) => {
    onChange({ ...data, content });
  };

  const renderInputFields = () => {
    switch (data.type) {
      case 'url':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('urlLabel')}
              </label>
              <input
                type="url"
                value={data.content}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder={t('urlPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('textLabel')}
              </label>
              <textarea
                value={data.content}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder={t('textPlaceholder')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('emailLabel')}
              </label>
              <input
                type="email"
                value={data.content}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        );

      case 'phone':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('phoneLabel')}
              </label>
              <input
                type="tel"
                value={data.content}
                onChange={(e) => handleContentChange(e.target.value)}
                placeholder={t('phonePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        );

      case 'wifi':
        const [ssid = '', password = '', security = 'WPA'] = data.content.split('|');
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('networkName')}
              </label>
              <input
                type="text"
                value={ssid}
                onChange={(e) => handleContentChange(`${e.target.value}|${password}|${security}`)}
                placeholder={t('networkPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => handleContentChange(`${ssid}|${e.target.value}|${security}`)}
                placeholder={t('passwordPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('securityType')}
              </label>
              <select
                value={security}
                onChange={(e) => handleContentChange(`${ssid}|${password}|${e.target.value}`)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              >
                <option value="WPA">{t('wpaOption')}</option>
                <option value="WEP">{t('wepOption')}</option>
                <option value="nopass">{t('noPasswordOption')}</option>
              </select>
            </div>
          </div>
        );

      case 'vcard':
        const [name = '', phone = '', email = ''] = data.content.split('|');
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('fullName')}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleContentChange(`${e.target.value}|${phone}|${email}`)}
                placeholder={t('namePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contactPhone')}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => handleContentChange(`${name}|${e.target.value}|${email}`)}
                placeholder={t('contactPhonePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contactEmail')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleContentChange(`${name}|${phone}|${e.target.value}`)}
                placeholder={t('contactEmailPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {t(data.type)} QR Code
      </h3>
      {renderInputFields()}
    </div>
  );
};