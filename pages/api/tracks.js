import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'tracks', 'tracks.json');
  const jsonData = fs.readFileSync(filePath);
  const tracks = JSON.parse(jsonData);
  res.status(200).json(tracks);
}
