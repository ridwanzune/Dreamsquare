import React, { useMemo, CSSProperties } from 'react';
import { Layer } from '../types';
import { NON_INTERACTIVE_LAYER_NAMES } from '../constants';
import { capitalizeWords } from '../utils';

interface MapLayerProps {
  layer: Layer;
  isHovered: boolean;
  onHover: (name: string | null) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Tooltip: React.FC<{ name: string }> = ({ name }) => (
  <div 
    className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full px-6 py-3 bg-gradient-to-b from-gray-900 to-black/80 text-white text-3xl rounded-lg shadow-2xl whitespace-nowrap pointer-events-none z-[101] border border-teal-400/50"
    style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
  >
    {name}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-5 h-5 bg-black/80 transform rotate-45 -mb-2.5 border-r border-b border-teal-400/50"></div>
  </div>
);


const MapLayer: React.FC<MapLayerProps> = ({ layer, isHovered, onHover, audioRef }) => {
  const isInteractive = !NON_INTERACTIVE_LAYER_NAMES.includes(layer.name);

  const handleMouseEnter = () => {
    if (isInteractive) {
      onHover(layer.name);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      }
    }
  };

  const style: CSSProperties = useMemo(() => ({
    left: layer.x,
    top: layer.y,
    width: layer.width,
    height: layer.height,
    zIndex: isInteractive ? (isHovered ? 100 : layer.index) : layer.index,
    pointerEvents: isInteractive ? 'auto' : 'none',
    userSelect: 'none',
  }), [layer, isHovered, isInteractive]);

  return (
    <div
      style={style}
      className={`absolute ${layer.name === 'Logo' ? 'map-logo' : ''}`}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={layer.url}
        alt={layer.name}
        className={`w-full h-full object-contain transition-transform duration-200 ease-in-out ${isInteractive ? 'cursor-pointer' : ''} ${isHovered ? 'scale-110' : 'scale-100'}`}
        style={{ transformOrigin: 'center center' }}
        draggable="false"
      />
      {isHovered && <Tooltip name={capitalizeWords(layer.name)} />}
    </div>
  );
};

export default React.memo(MapLayer);