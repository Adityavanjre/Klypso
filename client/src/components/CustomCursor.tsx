import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the trailing circle
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[99999] hidden md:block">
            {/* Main Dot */}
            <motion.div
                className="absolute w-3 h-3 bg-[#C5A059] rounded-full shadow-[0_0_15px_#C5A059]"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    scale: isHovering ? 0.3 : 1
                }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="absolute w-10 h-10 border border-[#C5A059]/30 rounded-full"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: isHovering ? 2 : 1,
                    opacity: isHovering ? 0.8 : 0.4,
                    borderWidth: isHovering ? '1px' : '0.5px'
                }}
            />
        </div>
    );
};

export default CustomCursor;
