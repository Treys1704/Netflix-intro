import React, { useEffect } from 'react';

interface NetflixLoaderProps {
    //letter?: 'N' | 'E' | 'T' | 'F' | 'L' | 'I' | 'X';
    onComplete?: () => void;
}

const NetflixLoader: React.FC<NetflixLoaderProps> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete?.();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    // Generate an array of numbers from 1 to n
    const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

    const BrushEffect = () => (
        <div className="effect-brush">
            {range(31).reverse().map((i) => (
                <span key={`fur-${i}`} className={`fur-${i}`} />
            ))}
        </div>
    );

    const LightsEffect = () => (
        <div className="effect-lumieres">
            {range(28).map((i) => (
                <span key={`lamp-${i}`} className={`lamp-${i}`} />
            ))}
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="netflix-intro">
                    <div className="helper-1">
                        <BrushEffect />
                        <LightsEffect />
                    </div>

                    <div className="helper-2">
                        <BrushEffect />
                    </div>
                    <div className="helper-3">
                        <BrushEffect />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetflixLoader;