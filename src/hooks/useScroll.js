import { useState } from 'react';

export default function useScroll() {
    const [active, setActive] = useState(false);
    window.addEventListener('scroll', function () {
        if (this.window.scrollY > 150) {
            setActive(true);
        } else {
            setActive(false);
        }
    });
    return { active };
}
