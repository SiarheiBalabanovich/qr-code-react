import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div>
            {data.map((text) => (
                <div 
                    key={text} 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '50px' }}
                >
                    <span style={{ marginRight: '10px' }}>{text}</span>
                    <QRCodeSVG value={text} size={100} />
                </div>
            ))}
        </div>
    );
};