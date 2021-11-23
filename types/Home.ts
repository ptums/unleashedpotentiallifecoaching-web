export interface Banner {
  imageUrl: string;
  lineOne: string;
  lineTwo: string;
}

export interface FeaturdContent {
  imageUrl: string;
  header: string;
  body: {
    text: string;
  }[];
}

export interface BlockWidget {
  id: number;
  description: string;
  title: string;
  imageUrl: string | null
}