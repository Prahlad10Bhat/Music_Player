import { useEffect, useState } from 'react';
import Player from '@/components/Player';

export default function Home() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('/api/tracks')
      .then(res => res.json())
      .then(data => setTracks(data));
  }, []);

  return (
    <main className="container">
      <h1>🎵 My Music</h1>
      <div className="track-list">
        {tracks.map(track => (
          <div key={track.id} className="track">
            <h3>{track.title}</h3>
            <Player src={track.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
