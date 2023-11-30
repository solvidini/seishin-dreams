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
  home?: {
    welcome: string;
    quote: string;
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
    description: string[];
  };
  music?: {
    title: string;
    description: string[];
  };
  contact?: {
    title: string;
    description: string[];
  };
}
