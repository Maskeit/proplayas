"use client"
import React, { useState, useEffect, useRef } from 'react';
import { scroller } from 'react-scroll';

interface FullPageScrollProps {
    children: React.ReactNode;
}

export const FullPageScroll: React.FC<FullPageScrollProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = React.Children.count(children);
    const startYRef = useRef(0);
    const scrollTimeout = useRef<number | null>(null);
    const isScrolling = useRef(false); // Para controlar que el scroll no se active varias veces.

    const handleTouchStart = (event: React.TouchEvent) => {
        const touches = event.touches[0];
        startYRef.current = touches.clientY;
    };

    const handleTouchEnd = (event: React.TouchEvent) => {
        const endY = event.changedTouches[0].clientY;
        if (Math.abs(startYRef.current - endY) > 10) {
            if(startYRef.current > endY) {
                setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
            } else {
                setCurrentSlide(prev => Math.max(prev - 1, 0));
            }
        }
    };

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (!isScrolling.current) {
                isScrolling.current = true;
                const { deltaY } = event;
                if (deltaY > 0) {
                    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
                } else if (deltaY < 0) {
                    setCurrentSlide(prev => Math.max(prev - 1, 0));
                }

                if (scrollTimeout.current) {
                    window.cancelAnimationFrame(scrollTimeout.current);
                }

                scrollTimeout.current = window.requestAnimationFrame(() => {
                    isScrolling.current = false;
                });
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [totalSlides]);

    useEffect(() => {
        scroller.scrollTo(`slide-${currentSlide}`, {
            duration: 1200,
            delay: 0,
            smooth: 'easeInOutCubic',
            containerId: 'containerElement'
        });
    }, [currentSlide]);

    return (
        <div id="containerElement" style={{ overflowY: 'scroll', height: '100vh' }}>
            {React.Children.map(children, (child, index) => (
                <div id={`slide-${index}`} style={{ height: '100vh', position: 'relative' }}>
                    {child}
                </div>
            ))}
        </div>
    );
};
