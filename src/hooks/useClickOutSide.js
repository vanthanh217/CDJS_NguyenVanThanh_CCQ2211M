import { useEffect, useRef } from 'react';

export default function (handler) {
    const domNode = useRef();
    useEffect(() => {
        const handlerFunc = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', handlerFunc);

        return () => {
            document.removeEventListener('mousedown', handlerFunc);
        };
    });

    return domNode;
}
