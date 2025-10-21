"use client";

import React from "react";
import styles from "./animatedbeam.module.css";

interface AnimatedBeamProps {
  sources?: Array<{
    id: string;
    name: string;
    icon: string;
    color?: string;
  }>;
  target?: {
    id: string;
    name: string;
    icon: string;
    color?: string;
  };
  highlightedSource?: string; // ID of the source to highlight
  className?: string;
}

export default function AnimatedBeam({
  sources = [
    { id: "drive", name: "Google Drive", icon: "📁", color: "#4285f4" },
    { id: "docs", name: "Google Docs", icon: "📄", color: "#4285f4" },
    { id: "whatsapp", name: "WhatsApp", icon: "💬", color: "#25d366" },
    { id: "messenger", name: "Messenger", icon: "💬", color: "#0084ff" },
    { id: "notion", name: "Notion", icon: "📝", color: "#000000" },
  ],
  target = { id: "ai", name: "AI Model", icon: "🤖", color: "#8b5cf6" },
  highlightedSource = "whatsapp",
  className = "",
}: AnimatedBeamProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {/* Sources */}
      <div className={styles.sources}>
        {sources.map((source, index) => (
          <div key={source.id} className={styles.sourceItem}>
            <div 
              className={styles.icon}
              style={{ backgroundColor: source.color + "20" }}
            >
              <span className={styles.iconText}>{source.icon}</span>
            </div>
            <div className={styles.label}>{source.name}</div>
          </div>
        ))}
      </div>

      {/* Central AI */}
      <div className={styles.center}>
        <div 
          className={styles.centerIcon}
          style={{ backgroundColor: target.color + "20" }}
        >
          <span className={styles.iconText}>{target.icon}</span>
        </div>
        <div className={styles.centerLabel}>{target.name}</div>
      </div>

      {/* User */}
      <div className={styles.user}>
        <div className={styles.icon} style={{ backgroundColor: "#6366f120" }}>
          <span className={styles.iconText}>👤</span>
        </div>
        <div className={styles.label}>User</div>
      </div>

      {/* Animated Beams */}
      <svg className={styles.beamSvg} viewBox="0 0 800 200">
        {/* Source to AI beams */}
        {sources.map((source, index) => {
          const isHighlighted = source.id === highlightedSource;
          const startX = 60;
          const startY = 40 + (index * 30);
          const endX = 400;
          const endY = 100;
          
          return (
            <g key={`beam-${source.id}`}>
              {/* Background line */}
              <path
                d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${startY - 20} ${endX} ${endY}`}
                className={`${styles.beamPath} ${isHighlighted ? styles.highlighted : ''}`}
                stroke={isHighlighted ? source.color : "#e5e7eb"}
                strokeWidth={isHighlighted ? 3 : 2}
              />
              {/* Animated beam */}
              {isHighlighted && (
                <path
                  d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${startY - 20} ${endX} ${endY}`}
                  className={styles.animatedBeam}
                  stroke={source.color}
                  strokeWidth={2}
                />
              )}
            </g>
          );
        })}
        
        {/* AI to User beam */}
        <path
          d="M 400 100 L 740 100"
          className={styles.beamPath}
          stroke="#e5e7eb"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}
