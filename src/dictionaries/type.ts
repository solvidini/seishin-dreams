export interface Dictionary {
  common?: {
    home: string;
    about: string;
    books: string;
    contact: string;
    music: string;
    prints: string;
    wallpapers: string;
  };
  about?: {
    title: string;
    description: string[];
  };
}
