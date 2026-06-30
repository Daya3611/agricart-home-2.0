"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
    const pathname = usePathname();
    const [show, setShow] = useState<boolean>(true);
    const [isFading, setIsFading] = useState<boolean>(false);

    useEffect(() => {
        // 1. Show the loader when pathname changes
        setShow(true);
        setIsFading(false);
        document.body.style.overflow = 'hidden';

        // 2. Start fading out after a short delay
        const timer1 = setTimeout(() => {
            setIsFading(true);
        }, 500);

        // 3. Remove from DOM completely after fade transition completes
        const timer2 = setTimeout(() => {
            setShow(false);
            document.body.style.overflow = 'auto';
        }, 2000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            document.body.style.overflow = 'auto';
        };
    }, [pathname]); // This dependency array ensures it runs on every page navigation!

    if (!show) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-white transition-opacity duration-300 ease-out ${isFading ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="flex flex-col items-center gap-8">
                {/* Logo with a gentle pulse */}
                <div className="relative animate-pulse">
                    <img
                        src="/img/logo2.png"
                        alt="Agricart"
                        className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
                    />
                </div>

                {/* Elegant loading dots */}
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-bounce shadow-sm shadow-green-200" style={{ animationDelay: '0ms' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-bounce shadow-sm shadow-emerald-200" style={{ animationDelay: '150ms' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-bounce shadow-sm shadow-teal-200" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
}
