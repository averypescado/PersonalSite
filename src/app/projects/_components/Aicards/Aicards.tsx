'use client'

// components/Cards.tsx
import React, { useState, useRef, useEffect } from 'react';
import styles from "./Aicards.module.css";
import Image from 'next/image';
import { motion } from "motion/react";

export default function AiCards() {
  // NEW: which card is hovered/focused
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const jsonData = {
    string: "Hi",
    boolean: true,
    object: { name: "Kyle", age: 30 },
    arrayOfObjects: [
      { name: "Jerry", age: 28 },
      { name: "Sally", age: 26 }
    ]
  };

  const formatValue = (value: unknown) => {
    if (value === null) return <span className={styles.jsonNull}>null</span>;
    if (typeof value === 'string') return <span className={styles.jsonString}>&apos;{value}&apos;</span>;
    if (typeof value === 'number') return <span className={styles.jsonNumber}>{value}</span>;
    if (typeof value === 'boolean') return <span className={styles.jsonBoolean}>{value.toString()}</span>;
    return JSON.stringify(value);
  };

  const formatJSON = (obj: unknown, indent = 0): React.ReactNode => {
    const spacing = '  '.repeat(indent);
    if (Array.isArray(obj)) {
      return (
        <>
          {'[\n'}
          {obj.map((item, i) => (
            <span key={i}>
              {spacing}  {typeof item === 'object' && item !== null ? formatJSON(item, indent + 1) : formatValue(item)}
              {i < obj.length - 1 ? ',' : ''}{'\n'}
            </span>
          ))}
          {spacing}{']'}
        </>
      );
    }
    if (typeof obj === 'object' && obj !== null) {
      const entries = Object.entries(obj);
      return (
        <>
          {'{\n'}
          {entries.map(([key, value], i) => (
            <span key={key}>
              {spacing}  <span className={styles.jsonKey}>&apos;{key}&apos;</span>: {
                typeof value === 'object' && value !== null 
                  ? formatJSON(value, indent + 1)
                  : formatValue(value)
              }{i < entries.length - 1 ? ',' : ''}{'\n'}
            </span>
          ))}
          {spacing}{'}'}
        </>
      );
    }
    return formatValue(obj);
  };

  // ------------------ Card 2 (Magnifying glass) ------------------
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const [dotsData, setDotsData] = useState<Array<{x: number, y: number, color: string, type: string}>>([]);

  useEffect(() => {
    const rows = 20;
    const cols = 16;
    const spacing = 15;
    const colors = { problem: '#ef4444', opportunity: '#3b82f6', neutral: '#999' };

    const dots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dotX = col * spacing + 3;
        const dotY = row * spacing + 3;
        const rand = Math.random();
        let type, color;
        if (rand < 0.2) { type = 'problem'; color = colors.problem; }
        else if (rand < 0.3) { type = 'opportunity'; color = colors.opportunity; }
        else { type = 'neutral'; color = colors.neutral; }
        dots.push({ x: dotX, y: dotY, color, type });
      }
    }
    setDotsData(dots);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dx = x - position.x;
    const dy = y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance <= 50) setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = Math.max(50, Math.min(e.clientX - rect.left, rect.width - 50));
    const y = Math.max(50, Math.min(e.clientY - rect.top, rect.height - 50));
    setPosition({ x, y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const dots = dotsData.map((dot, i) => {
    const dx = dot.x - position.x;
    const dy = dot.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const magnifyRadius = 50;
    const isMagnified = distance < magnifyRadius;
    const scale = isMagnified ? 2 : 1;
    const opacity = isMagnified ? 1 : 0.25;
    return (
      <circle
        key={i}
        cx={dot.x}
        cy={dot.y}
        r={2 * scale}
        fill={dot.color}
        opacity={opacity}
        className={styles.dot}
      />
    );
  });

  // ------------------ Card 3 (Slider) ------------------
  const [sliderPosition, setSliderPosition] = useState(150);
  const [isSliding, setIsSliding] = useState(false);
  const photosRef = useRef<HTMLDivElement>(null);

  const handleSliderMouseDown = () => setIsSliding(true);
  const handleSliderMouseMove = (e: React.MouseEvent) => {
    if (!isSliding || !photosRef.current) return;
    const rect = photosRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition(x);
  };
  const handleSliderMouseUp = () => setIsSliding(false);

  // ------------- Shared hover/focus behavior (no reordering) -------------
  // If a card is hovered at index i:
  // - cards with index < i (in front) move down to reveal the hovered card
  // - the hovered card lifts slightly
  // - cards behind it stay where they are

  const frontOffsets: Record<number, number[]> = {
    0: [],                 // hovering card 0 → nobody is in front
    1: [288],               // hovering card 1 → card 0 moves down 72px
    2: [288, 288],          // hovering card 2 → card 0 moves 120px, card 1 moves 72px
  };

  const defaultFrontOffset = 72;

const getAnimForIndex = (i: number) => {
  if (activeIndex === null) {
    return { y: 0, scale: 1}
  }

  if (i === activeIndex) {
    // The hovered card lifts a hair
    return { y: -6, scale: 1}
  }

  if (i < activeIndex) {
    // This card sits "in front" of the hovered card → push it down by a tunable amount
    const offsets = frontOffsets[activeIndex] ?? [];
    const delta = offsets[i] ?? defaultFrontOffset; // e.g., when active=2: i=0 uses 120, i=1 uses 72
    return { y: delta, scale: 1}
  }

  // Cards behind the hovered one don’t move
  return { y: 0, scale: 1}
};
  const hoverHandlers = (i: number) => ({
    onHoverStart: () => setActiveIndex(i),
    onHoverEnd:   () => setActiveIndex(null),
    onFocus:      () => setActiveIndex(i),
    onBlur:       () => setActiveIndex(null),
  });

  const transition = { type: "spring" as const, mass: 0.6, stiffness: 380, damping: 28 };

  return (
    <div className={styles.cards}>
      {/* Card 1 - Prototype (index 0; usually front-most) */}
      <motion.div
        className={styles.card}
        {...hoverHandlers(0)}
        animate={getAnimForIndex(0)}
        transition={transition}
      >
        <div className={styles.attribution}>
          <p>Prototype</p>
        </div>
        <div className={styles.general}>
          Build and test with real data early and often
        </div>
        <div className={styles.jsonDisplay}>
          <pre>{formatJSON(jsonData)}</pre>
        </div>
      </motion.div>

      {/* Card 2 - Focus (index 1; middle) */}
      <motion.div
        className={styles.card}
        {...hoverHandlers(1)}
        animate={getAnimForIndex(1)}
        transition={transition}
      >
        <div className={styles.attribution}>
          <p>Focus</p>
        </div>
        <div className={styles.general}>
          Focus on real user problems and opportunities
        </div>
        <div className={styles.magnifyArea}>
          <svg
            ref={svgRef}
            width="100%"
            height="380px"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {dots}
            <circle
              cx={position.x}
              cy={position.y}
              r="50"
              fill="none"
              stroke="#C5C1C1"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
        </div>
      </motion.div>

      {/* Card 3 - Communicate (index 2; back) */}
      <motion.div
        className={styles.card}
        {...hoverHandlers(2)}
        animate={getAnimForIndex(2)}
        transition={transition}
      >
        <div className={styles.attribution}>
          <p>Communicate</p>
        </div>
        <div className={styles.general}>
          Design for today and tomorrow. Clearly communicate.
        </div>
        <div 
          ref={photosRef}
          className={styles.photos}
          onMouseDown={handleSliderMouseDown}
          onMouseMove={handleSliderMouseMove}
          onMouseUp={handleSliderMouseUp}
          onMouseLeave={handleSliderMouseUp}
          style={{ cursor: isSliding ? 'grabbing' : 'grab' }}
        >
          <Image src="/oldbike@3x.png" alt="old bike" fill draggable={false} />
          <Image
            src="/newbike@3x.png"
            alt="new bike"
            fill
            draggable={false}
            style={{ clipPath: `inset(0px 0px 0px ${sliderPosition}px)` }}
          />
          <div className={styles.sliderLine} style={{ left: `${sliderPosition}px` }} />
        </div>
      </motion.div>
    </div>
  );
}
