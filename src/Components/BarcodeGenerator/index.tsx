import React, { useRef, useState, useEffect } from 'react';
import Quagga from 'quagga';
import BottomMenu from '../BottomMenu';
import { BarcodeScannerContainer, EnterBarcodeButton } from './styles';
import Header from '../Header/index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductSearchPage from '../ProductSearchPage';

const BarcodeScanner = ({ onBarcodeDetected }: any) => {
  const scannerRef = useRef(null);
  const [isScannerActive, setIsScannerActive] = useState(false);

  const navigate = useNavigate();

  
  const [showProductSearch, setShowProductSearch] = useState(false);

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

          Quagga.onDetected(async (data: any) => {
            console.log(data);

            const barcode = data.codeResult.code;

            console.log(barcode);

            onBarcodeDetected(barcode);
            Quagga.stop(); 
            setIsScannerActive(false); 

            // try {
            //   const response = await axios.get(`http://localhost:5000/products/7897312400184`);
            //   const productData = response.data.products[barcode];
            //   console.log(productData);
            
            //   console.log(productData);
            // } catch (error) {
            //   console.error('Erro ao buscar informações do produto:', error);
            // }

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

  const handleEnterBarcodeClick = () => {
    setIsScannerActive(false); 
    // navigate('/product-search'); 
    setShowProductSearch(true);
  };

  return (
    <>
    <Header />
    {!showProductSearch && 
      <BarcodeScannerContainer>
        {isScannerActive ? (
          <div ref={scannerRef}>
            <button onClick={() => setIsScannerActive(false)}>Stop Scanner</button>
          </div>
        ) : (
          <button onClick={() => setIsScannerActive(true)}>Start Scanner</button>
        )}
        <EnterBarcodeButton onClick={handleEnterBarcodeClick}>
          Digitar código de barras
        </EnterBarcodeButton>
        <BottomMenu />
      </BarcodeScannerContainer>}

      {showProductSearch && <ProductSearchPage />}
    </>
  );
};

export default BarcodeScanner;
