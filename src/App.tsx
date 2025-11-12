import React from 'react';
import { QrCode, Sparkles, Shield, Zap } from 'lucide-react';
import { DarkModeToggle } from './components/DarkModeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { QRTypeSelector } from './components/QRTypeSelector';
import { QRInputForm } from './components/QRInputForm';
import { QRCustomization } from './components/QRCustomization';
import { QRPreview } from './components/QRPreview';
import { QRHistory } from './components/QRHistory';
import { useQRGenerator } from './hooks/useQRGenerator';
import { useDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';
import { getTranslation } from './utils/translations';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const {
    qrData,
    setQrData,
    qrOptions,
    setQrOptions,
    currentQR,
    isGenerating,
    history,
    generateQR,
    clearHistory,
    removeFromHistory,
  } = useQRGenerator();

  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-orange-500 dark:to-red-500 rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                  {t('title')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>{t('permanentCodes')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>{t('instantGeneration')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500 dark:text-orange-400" />
                  <span>{t('highQuality')}</span>
                </div>
              </div>
              <LanguageToggle language={language} onToggle={toggleLanguage} />
              <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* QR Type Selection */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {t('chooseType')}
              </h2>
              <QRTypeSelector
                selectedType={qrData.type}
                onTypeChange={(type) => setQrData({ ...qrData, type: type as any, content: '' })}
               t={t}
              />
            </div>

            {/* Input Form */}
            <QRInputForm data={qrData} onChange={setQrData} t={t} />

            {/* Customization Options */}
            <QRCustomization options={qrOptions} onChange={setQrOptions} t={t} />
          </div>

          {/* Right Column - Preview and History */}
          <div className="space-y-4 sm:space-y-6">
            {/* QR Preview */}
            <QRPreview
              qrCode={currentQR}
              isGenerating={isGenerating}
              onRegenerate={generateQR}
              t={t}
            />

            {/* History */}
            <QRHistory 
              history={history} 
              onClearHistory={clearHistory} 
              onRemoveItem={removeFromHistory}
              t={t} 
            />
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-12 sm:mt-16 text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('featuresSubtitle')}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2">{t('permanentTitle')}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{t('permanentDesc')}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2">{t('instantTitle')}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{t('instantDesc')}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-orange-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2">{t('customizationFeatureTitle')}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{t('customizationDesc')}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-12 sm:mt-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <p>Copyright © 2025 Generador QR Pro All rights reserved | Crafted by WaveFrame Studio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;