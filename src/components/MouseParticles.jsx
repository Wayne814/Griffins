import { useEffect, useRef } from 'react';

function MouseParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSpark = (x, y) => {
      const spark = document.createElement('div');
      spark.className = 'spark';
      
      // Random offset and angle for spread effect
      const angle = Math.random() * Math.PI * 2;
      const velocity = 1 + Math.random() * 2;
      const offsetX = Math.cos(angle) * velocity;
      const offsetY = Math.sin(angle) * velocity;
      
      spark.style.left = x + 'px';
      spark.style.top = y + 'px';
      spark.style.setProperty('--offset-x', offsetX);
      spark.style.setProperty('--offset-y', offsetY);
      
      container.appendChild(spark);
      
      // Remove after animation completes
      setTimeout(() => {
        spark.remove();
      }, 800);
    };

    let lastX = 0;
    let lastY = 0;
    let throttleTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      
      // Throttle particle creation (every 10ms)
      if (now - throttleTime < 10) return;
      throttleTime = now;
      
      const { clientX, clientY } = e;
      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only create sparks if mouse moved a minimum distance
      if (distance > 2) {
        createSpark(clientX, clientY);
        lastX = clientX;
        lastY = clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="mouse-particles-container" />;
}

export default MouseParticles;
