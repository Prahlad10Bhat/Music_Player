import { useRef } from 'react';

export default function Player({ src }) {
  const audioRef = useRef(null);

  return (
    <div className="player">
      <audio controls ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
