import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './qrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        
        const scannedValue = result[0]?.rawValue;
        if (!scannedValue || scannedValue.trim() === '') return;

        setScanned(scannedValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, scannedValue])
        );
    };

    return (
        <div className={s.container}>
            <Scanner
                onScan={scanHandler}
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: { width: 300 }
                }} 
                />
            <p className={s.result}>{scanned}</p>
        </div>
    );
};