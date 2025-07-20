import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Layer } from './types';
import { LAYER_DATA, IMAGE_URLS, BACKGROUND_COLOR, HOVER_SOUND_URL } from './constants';
import LoadingScreen from './components/LoadingScreen';
import InteractiveMap from './components/InteractiveMap';

const App: React.FC = () => {
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const layers: Layer[] = useMemo(() => {
    return LAYER_DATA.map(layerData => ({
      ...layerData,
      url: IMAGE_URLS[layerData.name.replace(/ /g, '_')] || ''
    })).filter(layer => layer.url && layer.name !== 'Map Ledgend');
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    
    const audioPromise = new Promise<void>(resolve => {
        if (!audio) return resolve();
        if (audio.readyState > 3) return resolve(); // HAVE_ENOUGH_DATA
        
        const onCanPlayThrough = () => {
            resolve();
            audio.removeEventListener('canplaythrough', onCanPlayThrough);
            audio.removeEventListener('error', onError);
        };
        const onError = () => {
            console.error("Failed to preload audio.");
            resolve(); // Resolve anyway to not block the app
            audio.removeEventListener('canplaythrough', onCanPlayThrough);
            audio.removeEventListener('error', onError);
        };

        audio.addEventListener('canplaythrough', onCanPlayThrough);
        audio.addEventListener('error', onError);
        audio.load();
    });

    const assetUrls = layers.map(l => l.url);
    const totalAssets = assetUrls.length;
    if (totalAssets === 0) {
        Promise.all([audioPromise]).then(() => setAssetsLoaded(true));
        return;
    }

    let loadedCount = 0;
    const imagePromises = assetUrls.map(url => {
        return new Promise<void>(resolve => {
            const img = new Image();
            img.src = url;
            const onFinish = () => {
                loadedCount++;
                setLoadingProgress(current => (loadedCount / totalAssets) * 100);
                resolve();
            };
            img.onload = onFinish;
            img.onerror = () => {
                console.error(`Failed to load image: ${url}`);
                onFinish();
            };
        });
    });

    Promise.all([audioPromise, ...imagePromises]);
}, [layers]);
  
  useEffect(() => {
    if (loadingProgress >= 100) {
      setTimeout(() => setAssetsLoaded(true), 500);
    }
  }, [loadingProgress]);

  return (
    <div className="w-screen h-screen overflow-hidden" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <audio ref={audioRef} src={HOVER_SOUND_URL} preload="auto" />
      
      {!assetsLoaded && (
        <LoadingScreen progress={loadingProgress} logoUrl={IMAGE_URLS['Logo']} />
      )}

      <div className={`w-full h-full transition-opacity duration-1000 ${assetsLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {assetsLoaded && <InteractiveMap layers={layers} audioRef={audioRef} />}
      </div>
    </div>
  );
};

export default App;