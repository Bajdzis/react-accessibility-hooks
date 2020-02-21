import { useEffect, useCallback } from 'react';

type CallbackParam = (pressKeyNumber: number) => void;

export function useKeys(keysCode: number[], callback: CallbackParam): void {
    
    const handler = useCallback((e: KeyboardEvent) => {
        if (keysCode.includes(e.keyCode)) {
            callback(e.keyCode);
        }
    }, [keysCode, callback]);

    useEffect(() => {
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [handler]);

}
