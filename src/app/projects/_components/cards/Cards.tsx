'use client'

// components/Cards.tsx
import React, { useState, useRef, useEffect } from 'react';
import styles from "./cards.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { Link2 } from 'lucide-react';

export default function Cards() {
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

  // Magnifying glass for Card 2
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Generate dots once and store them with consistent properties
  const [dotsData, setDotsData] = useState<Array<{x: number, y: number, color: string, type: string}>>([]);

useEffect(() => {
  const rows = 20;
  const cols = 16;
  const spacing = 15;
  const colors = {
    problem: '#ef4444',
    opportunity: '#3b82f6',
    neutral: '#999'
  };

  const dots = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const dotX = col * spacing + 3;
      const dotY = row * spacing + 3;
      
      const rand = Math.random();
      let type, color;
      if (rand < 0.2) {
        type = 'problem';
        color = colors.problem;
      } else if (rand < 0.3) {
        type = 'opportunity';
        color = colors.opportunity;
      } else {
        type = 'neutral';
        color = colors.neutral;
      }
      
      dots.push({ x: dotX, y: dotY, color, type });
    }
  }
  setDotsData(dots);
}, []); // Empty dependency array = runs once after mount
  

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const dx = x - position.x;
    const dy = y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance <= 50) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !svgRef.current) return;
    
    const rect = svgRef.current.getBoundingClientRect();
    const x = Math.max(50, Math.min(e.clientX - rect.left, rect.width - 50));
    const y = Math.max(50, Math.min(e.clientY - rect.top, rect.height - 50));
    
    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Render dots with consistent colors
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



  // Add this state in your Cards component
const [sliderPosition, setSliderPosition] = useState(150);
const [isSliding, setIsSliding] = useState(false);
const photosRef = useRef<HTMLDivElement>(null);

const handleSliderMouseDown = () => {
  setIsSliding(true);
};

const handleSliderMouseMove = (e: React.MouseEvent) => {
  if (!isSliding || !photosRef.current) return;
  
  const rect = photosRef.current.getBoundingClientRect();
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  setSliderPosition(x);
};

const handleSliderMouseUp = () => {
  setIsSliding(false);
};


  return (
    <div className={styles.cards}>
      {/* Card 1 - Prototype */}
      <div className={styles.card}>
        <div className={styles.attribution}>
          <p>Prototype</p>
        </div>
        <div className={styles.general}>
          Build and test with real data early and often
        </div>
        <div className={styles.jsonDisplay}>
          <pre>{formatJSON(jsonData)}</pre>
        </div>
        <Link href="#prototype" className={styles.foot}> <Link2 color="white" size={18} /></Link>
      </div>

      {/* Card 2 - Focus with Magnifying Glass */}
      <div className={styles.card}>
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
        <Link href="#problems" className={styles.foot}> <Link2 color="white" size={18} /></Link>
      </div>

      {/* Card 3 - Communicate */}
      <div className={styles.card}>
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
          <Image
            src="/oldbike@3x.png"
            alt="old bike"
            fill
            draggable={false}
          />
          <Image
            src="/newbike@3x.png"
            alt="new bike"
            fill
            draggable={false}
            style={{ clipPath: `inset(0px 0px 0px ${sliderPosition}px)` }}
          />
          
          {/* Optional: Add a slider line */}
          <div 
            className={styles.sliderLine}
            style={{ left: `${sliderPosition}px` }}
          />
        </div>
        <Link href="#communicate" className={styles.foot}> <Link2 color="white" size={18} /></Link>
      </div>
    </div>
  );
}