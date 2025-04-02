import { useEffect, useState } from 'react';
import { TextScramble } from '@/components/motion-primitives/text-scramble';

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Hiding splash screen');
            setIsVisible(false);
        }, 3000); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
            <TextScramble
                className="font-mono text-sm"
                duration={1.2}
                characterSet="#$%#^@&@&"
            >
                Welcome.....
            </TextScramble>
        </div>
    );
}