import React, { useEffect, useState } from 'react';

const Grid = () => {
  const cellSize = 24;
  const glowRadius = 4;

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [hoveredCell, setHoveredCell] = useState({ row: -100, col: -100 });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleMouseMove = (e) => {
      const col = Math.floor(e.clientX / cellSize);
      const row = Math.floor(e.clientY / cellSize);
      setHoveredCell({ row, col });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const rows = Math.ceil(screenSize.height / cellSize);
  const cols = Math.ceil(screenSize.width / cellSize);

  const isGlowing = (row, col) => {
    const dx = row - hoveredCell.row;
    const dy = col - hoveredCell.col;
    return Math.sqrt(dx * dx + dy * dy) <= glowRadius;
  };

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    backgroundColor: '#ffffff',
    zIndex: 0,
    pointerEvents: 'none',
  };

  const cellStyle = (row, col) => ({
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    boxSizing: 'border-box',
    border: '1px solid',
    borderColor: isGlowing(row, col)
      ? 'rgba(0, 122, 255, 0.25)'
      : 'rgba(0, 0, 0, 0.025)',
    transition: 'border-color 0.15s ease',
  });

  return (
    <div style={containerStyle}>
      {Array.from({ length: rows }).flatMap((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <div key={`${row}-${col}`} style={cellStyle(row, col)} />
        ))
      )}
    </div>
  );
};

export default Grid;
