import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    companyName,
    tagline,
    description,
    phone,
    email,
    orgNumber,
    address,
    social
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    heroHeading,
    heroIntro,
    heroImage,
    body,
    seoDescription
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc, title asc){
    _id,
    title,
    "slug": slug.current,
    summary,
    body,
    image
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(year desc, title asc){
    _id,
    title,
    "slug": slug.current,
    client,
    location,
    year,
    categories,
    summary,
    coverImage
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    client,
    location,
    year,
    categories,
    summary,
    body,
    coverImage,
    gallery
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`;

export const jobPostingsQuery = groq`
  *[_type == "jobPosting" && active == true] | order(deadline asc){
    _id,
    title,
    "slug": slug.current,
    employmentType,
    location,
    deadline,
    summary,
    body
  }
`;
