import { useState, useEffect, useRef } from 'react';

export interface CursorState {
  x: number;
  y: number;
  smoothX: number;
  smoothY: number;
  isHovering: boolean;
  isClicking: boolean;
  isVisible: boolean;
  isTouchDevice: boolean;
}

export const useCustomCursor = (): CursorState => {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    smoothX: -100,
    smoothY: -100,
    isHovering: false,
    isClicking: false,
    isVisible: false,
    isTouchDevice: false,
  });

  const mousePos = useRef({ x: -100, y: -100 });
  const smoothPos = useRef({ x: -100, y: -100 });
  const isHoveringRef = useRef(false);
  const isVisibleRef = useRef(false);
  const isClickingRef = useRef(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check for touch / mobile device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setCursor((prev) => ({ ...prev, isTouchDevice: true }));
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        smoothPos.current = { x: e.clientX, y: e.clientY };
      }

      // Detect if hovering over an interactive element or project card
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          target.closest('[data-cursor-magnetic]') ||
          target.closest('.group')
        );
        isHoveringRef.current = isInteractive;
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
    };

    // Smooth physics loop for magnetic trailing
    const render = () => {
      // Linear interpolation (lerp) factor: 0.18 for sleek responsiveness
      const lerp = 0.18;
      smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * lerp;
      smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * lerp;

      setCursor({
        x: mousePos.current.x,
        y: mousePos.current.y,
        smoothX: smoothPos.current.x,
        smoothY: smoothPos.current.y,
        isHovering: isHoveringRef.current,
        isClicking: isClickingRef.current,
        isVisible: isVisibleRef.current,
        isTouchDevice: false,
      });

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return cursor;
};
