const videoData = [
  {
    id: 1,
    title: "Sonnenuntergang am Strand",
    description: "Wunderschöner Sonnenuntergang mit Meereswellen",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/1118874/pexels-photo-1118874.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    category: "Natur",
    tags: ["Strand", "Sonnenuntergang", "Meer", "Wellen", "Entspannung"],
    duration: "0:30",
    views: 1250,
    likes: 0,
    uploadDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Stadtlichter bei Nacht",
    description: "Zeitraffer der nächtlichen Stadtbeleuchtung",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    category: "Stadt",
    tags: ["Stadt", "Nacht", "Zeitraffer", "Lichter", "Urban"],
    duration: "0:25",
    views: 2340,
    likes: 0,
    uploadDate: "2024-01-20"
  },
  {
    id: 3,
    title: "Berge und Wolken",
    description: "Majestätische Berglandschaft mit ziehenden Wolken",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/2670209/2670209-uhd_2560_1440_25fps.mp4",
    category: "Natur",
    tags: ["Berge", "Wolken", "Landschaft", "Natur", "Himmel", "Panorama"],
    duration: "0:40",
    views: 890,
    likes: 0,
    uploadDate: "2024-02-01"
  },
  {
    id: 4,
    title: "Kaffee wird eingeschenkt",
    description: "Nahaufnahme von frisch gebrühtem Kaffee",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_30fps.mp4",
    category: "Essen",
    tags: ["Kaffee", "Getränke", "Nahaufnahme"],
    duration: "0:15",
    views: 3200,
    likes: 0,
    uploadDate: "2024-02-10"
  },
  {
    id: 5,
    title: "Workout im Fitnessstudio",
    description: "Intensive Trainingseinheit mit Gewichten",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/4754103/4754103-uhd_2560_1440_25fps.mp4",
    category: "Sport",
    tags: ["Fitness", "Training", "Sport", "Gesundheit", "Gym"],
    duration: "0:35",
    views: 1580,
    likes: 0,
    uploadDate: "2024-02-15"
  },
  {
    id: 6,
    title: "Nordlichter Aurora",
    description: "Spektakuläre Aurora Borealis am Nachthimmel",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/857001/857001-hd_1920_1080_25fps.mp4",
    category: "Natur",
    tags: ["Nordlichter", "Aurora", "Nacht", "Himmel", "Naturphänomen", "Spektakulär"],
    duration: "0:45",
    views: 4500,
    likes: 0,
    uploadDate: "2024-02-20"
  },
  {
    id: 7,
    title: "Coding am Laptop",
    description: "Programmierer bei der Arbeit",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/3617003/3617003-uhd_2560_1440_30fps.mp4",
    category: "Technologie",
    tags: ["Coding", "Programmieren", "Laptop", "Arbeit", "Technologie"],
    duration: "0:28",
    views: 2100,
    likes: 0,
    uploadDate: "2024-02-25"
  },
  {
    id: 8,
    title: "Drohnenflug über Wald",
    description: "Luftaufnahme eines dichten Waldes",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/3571550/3571550-uhd_2560_1440_25fps.mp4",
    category: "Natur",
    tags: ["Drohne", "Wald", "Luftaufnahme", "Bäume", "Aerial"],
    duration: "0:50",
    views: 1920,
    likes: 0,
    uploadDate: "2024-03-01"
  },
  {
    id: 9,
    title: "Street Food Markt",
    description: "Bunter Markt mit verschiedenen Speisen",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4",
    category: "Essen",
    tags: ["Street Food", "Markt", "Essen", "Kultur", "Menschen"],
    duration: "0:38",
    views: 2780,
    likes: 0,
    uploadDate: "2024-03-05"
  },
  {
    id: 10,
    title: "Surfer am Morgen",
    description: "Surfer warten auf die perfekte Welle",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/3571069/3571069-uhd_2560_1440_30fps.mp4",
    category: "Sport",
    tags: ["Surfen", "Meer", "Sport", "Wellen", "Strand", "Action"],
    duration: "0:33",
    views: 3450,
    likes: 0,
    uploadDate: "2024-03-10"
  },
  {
    id: 11,
    title: "Zeitraffer Wolken",
    description: "Schnell ziehende Wolkenformationen",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/854400/854400-hd_1920_1080_30fps.mp4",
    category: "Natur",
    tags: ["Wolken", "Zeitraffer", "Himmel", "Natur"],
    duration: "0:20",
    views: 1650,
    likes: 0,
    uploadDate: "2024-03-15"
  },
  {
    id: 12,
    title: "Gaming Setup",
    description: "Modernes Gaming-Setup mit RGB-Beleuchtung",
    type: "video",
    thumbnail: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl: "https://videos.pexels.com/video-files/5760992/5760992-uhd_2560_1440_25fps.mp4",
    category: "Technologie",
    tags: ["Gaming", "Setup", "RGB", "Computer", "Technologie"],
    duration: "0:22",
    views: 2890,
    likes: 0,
    uploadDate: "2024-03-20"
  }
];

const categories = ["Alle", "Natur", "Stadt", "Sport", "Essen", "Technologie"];

function getAllTags() {
  const tagSet = new Set();
  videoData.forEach(video => {
    video.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
