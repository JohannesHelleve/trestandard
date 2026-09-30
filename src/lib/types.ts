import type { Image, PortableTextBlock } from "sanity";

/** Sanity image plus the `alt` field our schemas attach to every image. */
export type SanityImage = Image & { alt?: string };

export type SiteSettings = {
  companyName: string;
  tagline?: string;
  description?: string;
  phone?: string;
  email?: string;
  orgNumber?: string;
  address?: {
    street?: string;
    postalCode?: string;
    city?: string;
    mapsUrl?: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
};

export type PageContent = {
  title: string;
  heroHeading: string;
  heroIntro: string;
  heroImage?: SanityImage | null;
  /** Rich text from Sanity. When absent, `paragraphs` is rendered instead. */
  body?: PortableTextBlock[] | null;
  /** Bundled prose used until an editor fills the page in Sanity. */
  paragraphs: string[];
  seoDescription?: string;
};

export type Service = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  body?: PortableTextBlock[] | null;
  image?: SanityImage | null;
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  client?: string;
  location?: string;
  year?: number;
  categories?: string[];
  summary?: string;
  body?: PortableTextBlock[] | null;
  coverImage?: SanityImage | null;
  gallery?: SanityImage[] | null;
};

export type JobPosting = {
  _id: string;
  title: string;
  slug: string;
  employmentType?: string;
  location?: string;
  deadline?: string;
  summary?: string;
  body?: PortableTextBlock[] | null;
};

