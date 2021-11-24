import { Seo } from "./SEO";

export interface Coach {
  id: number;
  seo: Seo;
  name: string;
  image: {
    url: string;
    width: string;
    height: string;
  }
  welcomeMessage: string[],
  biography: string[],
}