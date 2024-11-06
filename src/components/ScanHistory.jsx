import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../constants';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div>
        {data.map((text) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '50px' }}>
                <span style={{ marginRight: '10px' }}>{text}</span>
                <QRCodeSVG value={text} size={100} />
            </div>
        ))}
    </div>
    );
}