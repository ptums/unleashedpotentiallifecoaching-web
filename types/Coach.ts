import { Seo } from "./SEO";

export interface Coach {
  id?: number;
  seo?: Seo;
  name: string;
  image: {
    url: string;
    width: string | number;
    height: string | number;
  }
  welcomeMessage?: string[];
  biography?: string[];
}