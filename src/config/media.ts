/**
 * Auto-generated Media Assets from Pexels API
 * Project: notion-worker-ops
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "30996447",
    "url": "https://images.pexels.com/photos/30996447/pexels-photo-30996447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Workers on scaffolding during statue construction, showcasing building process.",
    "avg_color": "#7F807A"
},
  editorialPhotos: [
    {
    "id": "31199539",
    "url": "https://images.pexels.com/photos/31199539/pexels-photo-31199539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A female factory worker using a computer in an industrial environment.",
    "avg_color": "#4E4D52"
},
    {
    "id": "34478323",
    "url": "https://images.pexels.com/photos/34478323/pexels-photo-34478323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "An adult construction worker in a hard hat and vest ascending stairs inside a building.",
    "avg_color": "#44433E"
},
    {
    "id": "32845691",
    "url": "https://images.pexels.com/photos/32845691/pexels-photo-32845691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Two industrial workers in protective gear operate a machine in a Russian factory setting.",
    "avg_color": "#586470"
}
  ],
  ambientVideo: {
    "id": "17599632",
    "videoUrl": "https://videos.pexels.com/video-files/17599632/17599632-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/17599632/3d-arcadian-cgi-digital-17599632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
