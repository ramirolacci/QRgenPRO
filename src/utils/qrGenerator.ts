import QRCode from 'qrcode';
import { QRCodeOptions, QRCodeData } from '../types/qr';

export const generateQRCode = async (
  data: QRCodeData,
  options: QRCodeOptions
): Promise<string> => {
  try {
    const qrString = await QRCode.toDataURL(data.content, {
      width: options.size,
      margin: 2,
      errorCorrectionLevel: options.errorCorrectionLevel,
      color: {
        dark: options.foregroundColor,
        light: options.backgroundColor,
      },
    });
    return qrString;
  } catch (error) {
    throw new Error('Error generating QR code');
  }
};

export const formatQRContent = (data: QRCodeData): string => {
  switch (data.type) {
    case 'url':
      return data.content.startsWith('http') ? data.content : `https://${data.content}`;
    case 'email':
      return `mailto:${data.content}`;
    case 'phone':
      return `tel:${data.content}`;
    case 'wifi':
      // Format: WIFI:T:WPA;S:NetworkName;P:Password;H:false;;
      const [ssid, password, security] = data.content.split('|');
      return `WIFI:T:${security || 'WPA'};S:${ssid};P:${password};H:false;;`;
    case 'vcard':
      // Simple vCard format
      const [name, phone, email] = data.content.split('|');
      return `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`;
    default:
      return data.content;
  }
};

export const downloadQRCode = (qrCode: string, filename: string = 'qrcode') => {
  const link = document.createElement('a');
  link.download = `${filename}.png`;
  link.href = qrCode;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};