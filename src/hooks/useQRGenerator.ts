import { useState, useCallback, useEffect } from 'react';
import { QRCodeData, QRCodeOptions, GeneratedQR } from '../types/qr';
import { generateQRCode, formatQRContent } from '../utils/qrGenerator';
import { useLocalStorage } from './useLocalStorage';

export const useQRGenerator = () => {
  const [qrData, setQrData] = useState<QRCodeData>({
    type: 'url',
    content: '',
  });

  const [qrOptions, setQrOptions] = useState<QRCodeOptions>({
    size: 256,
    errorCorrectionLevel: 'M',
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
  });

  const [currentQR, setCurrentQR] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useLocalStorage<GeneratedQR[]>('qr-history', []);

  const generateQR = useCallback(async () => {
    if (!qrData.content.trim()) {
      setCurrentQR(null);
      return;
    }

    setIsGenerating(true);
    try {
      const formattedContent = formatQRContent(qrData);
      const qrCode = await generateQRCode(
        { ...qrData, content: formattedContent },
        qrOptions
      );
      
      setCurrentQR(qrCode);
      
      // Add to history
      const newQR: GeneratedQR = {
        id: Date.now().toString(),
        data: qrData,
        options: qrOptions,
        qrCode,
        timestamp: new Date(),
      };
      
      setHistory(prev => [newQR, ...prev.slice(0, 9)]); // Keep last 10
    } catch (error) {
      console.error('Error generating QR code:', error);
      setCurrentQR(null);
    } finally {
      setIsGenerating(false);
    }
  }, [qrData, qrOptions]);

  const clearHistory = () => {
    setHistory([]);
  };

  const removeFromHistory = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  // Auto-generate QR when data or options change
  useEffect(() => {
    const timeoutId = setTimeout(generateQR, 300);
    return () => clearTimeout(timeoutId);
  }, [generateQR]);

  return {
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
  };
};