import React, { useRef, useState, useEffect } from 'react';
import Quagga from 'quagga';
import BottomMenu from '../BottomMenu';
import { BarcodeScannerContainer } from './styles';
import Header from '../Header/index';

const BarcodeScanner = ({ onBarcodeDetected }: any) => {
  const scannerRef = useRef(null);
  const [isScannerActive, setIsScannerActive] = useState(false);

  useEffect(() => {
    let scannerInstance: any;

    if (isScannerActive) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: scannerRef.current,
            constraints: {
              width: 640,
              height: 480,
              facingMode: 'environment',
            },
          },
          decoder: {
            readers: [
              'ean_reader',      // EAN 13
              'ean_8_reader',    // EAN 8
              'upc_reader',      // UPC
              'code_128_reader', // Code 128
            ],
          },
        },
        (err: any) => {
          if (err) {
            console.error('Error initializing Quagga:', err);
            return;
          }
          scannerInstance = Quagga.start();

          Quagga.onDetected((data: any) => {
            const barcode = data.codeResult.code;
            onBarcodeDetected(barcode);
            Quagga.stop(); 
            setIsScannerActive(false); 
          });

          return () => {
            scannerInstance && scannerInstance.stop();
          };
        }
      );
    }

    return () => {
      scannerInstance && scannerInstance.stop();
    };
  }, [isScannerActive, onBarcodeDetected]);

  return (
    <>
      <Header />
      <BarcodeScannerContainer>
        {isScannerActive ? (
          <div ref={scannerRef}>
            <button onClick={() => setIsScannerActive(false)}>Stop Scanner</button>
          </div>
        ) : (
          <button onClick={() => setIsScannerActive(true)}>Start Scanner</button>
        )}
        <BottomMenu />
      </BarcodeScannerContainer>
    </>
  );
};

export default BarcodeScanner;
