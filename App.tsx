import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Layer } from './types';
import { LAYER_DATA, IMAGE_URLS, BACKGROUND_COLOR, HOVER_SOUND_URL } from './constants';
import LoadingScreen from './components/LoadingScreen';
import InteractiveMap from './components/InteractiveMap';

const App: React.FC = () => {
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [readyToEnter, setReadyToEnter] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const layers: Layer[] = useMemo(() => {
    return LAYER_DATA.map(layerData => ({
      ...layerData,
      url: IMAGE_URLS[layerData.name.replace(/ /g, '_')] || ''
    })).filter(layer => layer.url && layer.name !== 'Map Ledgend');
  }, []);

  useEffect(() => {
    const assetUrls = layers.map(l => l.url);
    const totalAssets = assetUrls.length + 1; // +1 for the audio file
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      setLoadingProgress((loadedCount / totalAssets) * 100);
    };

    // Preload Audio
    const audio = audioRef.current;
    if (audio) {
      if (audio.readyState > 3) { // HAVE_ENOUGH_DATA
        updateProgress();
      } else {
        const onCanPlayThrough = () => {
          updateProgress();
          audio.removeEventListener('canplaythrough', onCanPlayThrough);
          audio.removeEventListener('error', onError);
        };
        const onError = () => {
          console.error("Failed to preload audio.");
          updateProgress(); // Still count it as "loaded" to not block the app
          audio.removeEventListener('canplaythrough', onCanPlayThrough);
          audio.removeEventListener('error', onError);
        };
        audio.addEventListener('canplaythrough', onCanPlayThrough);
        audio.addEventListener('error', onError);
        audio.load();
      }
    } else {
        // If no audio element, count it as loaded.
        updateProgress();
    }

    // Preload Images
    if (assetUrls.length === 0) return;
    
    assetUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      const onFinish = () => {
        updateProgress();
      };
      img.onload = onFinish;
      img.onerror = () => {
        console.error(`Failed to load image: ${url}`);
        onFinish(); // Count it as loaded even on error
      };
    });
}, [layers]);
  
  useEffect(() => {
    if (loadingProgress >= 100) {
      setTimeout(() => setReadyToEnter(true), 500);
    }
  }, [loadingProgress]);

  const handleEnter = () => {
    setAssetsLoaded(true);
  };

  return (
    <div className="w-screen h-screen overflow-hidden" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <audio ref={audioRef} src={HOVER_SOUND_URL} preload="auto" />
      
      {!assetsLoaded && (
        <LoadingScreen 
            progress={loadingProgress} 
            logoUrl={IMAGE_URLS['Logo']} 
            readyToEnter={readyToEnter}
            onEnter={handleEnter}
        />
      )}

      <div className={`w-full h-full transition-opacity duration-1000 ${assetsLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {assetsLoaded && <InteractiveMap layers={layers} audioRef={audioRef} />}
      </div>
    </div>
  );
};

export default App;
