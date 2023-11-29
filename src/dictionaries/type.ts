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
  books?: {
    title: string;
  };
  prints?: {
    title: string;
  };
  wallpapers?: {
    title: string;
  };
  music?: {
    title: string;
  };
  contact?: {
    title: string;
  };
}
