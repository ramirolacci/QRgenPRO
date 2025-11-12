export const translations = {
  en: {
    // Header
    title: 'QR Generator Pro',
    subtitle: 'Professional QR Code Generator',
    permanentCodes: 'Permanent QR Codes',
    instantGeneration: 'Instant Generation',
    highQuality: 'High Quality',
    
    // QR Types
    chooseType: 'Choose QR Code Type',
    url: 'URL/Link',
    text: 'Text',
    email: 'Email',
    phone: 'Phone',
    wifi: 'WiFi',
    contact: 'Contact',
    
    // Input Forms
    urlLabel: 'URL or Website Link',
    urlPlaceholder: 'https://example.com',
    textLabel: 'Text Content',
    textPlaceholder: 'Enter your text here...',
    emailLabel: 'Email Address',
    emailPlaceholder: 'contact@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '+1234567890',
    
    // WiFi Form
    networkName: 'Network Name (SSID)',
    networkPlaceholder: 'MyWiFiNetwork',
    password: 'Password',
    passwordPlaceholder: 'Enter WiFi password',
    securityType: 'Security Type',
    wpaOption: 'WPA/WPA2',
    wepOption: 'WEP',
    noPasswordOption: 'No Password',
    
    // Contact Form
    fullName: 'Full Name',
    namePlaceholder: 'John Doe',
    contactPhone: 'Phone Number',
    contactPhonePlaceholder: '+1234567890',
    contactEmail: 'Email Address',
    contactEmailPlaceholder: 'john@example.com',
    
    // Customization
    customizationTitle: 'Customization Options',
    sizeLabel: 'Size',
    errorCorrectionLabel: 'Error Correction Level',
    lowError: 'Low (7%)',
    mediumError: 'Medium (15%)',
    quartileError: 'Quartile (25%)',
    highError: 'High (30%)',
    foregroundColor: 'Foreground Color',
    backgroundColor: 'Background Color',
    
    // Preview
    previewTitle: 'QR Code Preview',
    regenerateTooltip: 'Regenerate QR Code',
    downloadButton: 'Download QR Code',
    fillFormMessage: 'Fill in the form to generate\nyour QR code',
    
    // History
    historyTitle: 'Recent QR Codes',
    clearHistoryTooltip: 'Clear History',
    downloadTooltip: 'Download QR Code',
    noHistoryMessage: 'No QR codes generated yet',
    
    // Features Section
    featuresTitle: 'Professional QR Code Generation',
    featuresSubtitle: 'Generate high-quality, permanent QR codes for any purpose. Our codes are static and will work forever.',
    permanentTitle: 'Permanent QR Codes',
    permanentDesc: 'Static QR codes that never expire and work forever',
    instantTitle: 'Instant Generation',
    instantDesc: 'Real-time QR code generation with live preview',
    customizationFeatureTitle: 'High Customization',
    customizationDesc: 'Full control over colors, size, and error correction',
    
    // Footer
    footerText: '© 2025 QR Generator Pro. Built with React & TypeScript.',
  },
  es: {
    // Header
    title: 'Generador QR Pro',
    subtitle: 'Generador Profesional de Códigos QR',
    permanentCodes: 'Códigos QR Permanentes',
    instantGeneration: 'Generación Instantánea',
    highQuality: 'Alta Calidad',
    
    // QR Types
    chooseType: 'Elige el Tipo de Código QR',
    url: 'URL/Enlace',
    text: 'Texto',
    email: 'Email',
    phone: 'Teléfono',
    wifi: 'WiFi',
    contact: 'Contacto',
    
    // Input Forms
    urlLabel: 'URL o Enlace Web',
    urlPlaceholder: 'https://ejemplo.com',
    textLabel: 'Contenido de Texto',
    textPlaceholder: 'Ingresa tu texto aquí...',
    emailLabel: 'Dirección de Email',
    emailPlaceholder: 'contacto@ejemplo.com',
    phoneLabel: 'Número de Teléfono',
    phonePlaceholder: '+11 2345-6789',
    
    // WiFi Form
    networkName: 'Nombre de Red (SSID)',
    networkPlaceholder: 'MiRedWiFi',
    password: 'Contraseña',
    passwordPlaceholder: 'Ingresa la contraseña WiFi',
    securityType: 'Tipo de Seguridad',
    wpaOption: 'WPA/WPA2',
    wepOption: 'WEP',
    noPasswordOption: 'Sin Contraseña',
    
    // Contact Form
    fullName: 'Nombre Completo',
    namePlaceholder: 'Ingresa tu nombre',
    contactPhone: 'Número de Teléfono',
    contactPhonePlaceholder: '+11 2345-6789',
    contactEmail: 'Dirección de Email',
    contactEmailPlaceholder: 'ejemplo@source.com',
    
    // Customization
    customizationTitle: 'Opciones de Personalización',
    sizeLabel: 'Tamaño',
    errorCorrectionLabel: 'Nivel de Corrección de Errores',
    lowError: 'Bajo (7%)',
    mediumError: 'Medio (15%)',
    quartileError: 'Cuartil (25%)',
    highError: 'Alto (30%)',
    foregroundColor: 'Color de Primer Plano',
    backgroundColor: 'Color de Fondo',
    
    // Preview
    previewTitle: 'Vista Previa del Código QR',
    regenerateTooltip: 'Regenerar Código QR',
    downloadButton: 'Descargar Código QR',
    fillFormMessage: 'Completa el formulario para generar\ntu código QR',
    
    // History
    historyTitle: 'Códigos QR Recientes',
    clearHistoryTooltip: 'Limpiar Historial',
    downloadTooltip: 'Descargar Código QR',
    noHistoryMessage: 'No se han generado códigos QR aún',
    
    // Features Section
    featuresTitle: 'Generación Profesional de Códigos QR',
    featuresSubtitle: 'Genera códigos QR de alta calidad y permanentes para cualquier propósito. Nuestros códigos son estáticos y funcionarán para siempre.',
    permanentTitle: 'Códigos QR Permanentes',
    permanentDesc: 'Códigos QR estáticos que nunca expiran y funcionan para siempre',
    instantTitle: 'Generación Instantánea',
    instantDesc: 'Generación de códigos QR en tiempo real con vista previa en vivo',
    customizationFeatureTitle: 'Alta Personalización',
    customizationDesc: 'Control total sobre colores, tamaño y corrección de errores',
    
    // Footer
    footerText: '© 2025 Generador QR Pro. Desarrollado con React y TypeScript.',
  },
};

export const getTranslation = (language: 'en' | 'es', key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};