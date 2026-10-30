import { sanityClient } from 'sanity:client';
import { aduTypeDefaults, homeContentDefaults, portfolioDefaults, websiteSettingsDefaults } from '../data/sanity-defaults.js';

const homeQuery = `*[_type == "homePageContent" && _id == "homePageContent"][0]{
  heroStages[]{..., "imageUrl": coalesce(image.asset->url, imageUrl)},
  process,
  gallery{..., items[]{..., "imageUrl": coalesce(image.asset->url, imageUrl)}},
  faq,
  testimonials,
  contact{..., "imageUrl": coalesce(image.asset->url, imageUrl)}
}`;

const aduQuery = `*[_type == "aduContent" && _id == "aduContent"][0]{
  types[]{..., "imageUrl": coalesce(image.asset->url, imageUrl), "socialImageUrl": socialImage.asset->url,
    gallery[]{..., "imageUrl": coalesce(image.asset->url, imageUrl)}}
}`;

const portfolioQuery = `*[_type == "portfolioContent" && _id == "portfolioContent"][0]{
  projects[]{..., "slug": slug.current, "cover": coalesce(coverImage.asset->url, coverUrl),
    gallery[]{..., "imageUrl": coalesce(image.asset->url, imageUrl)}},
  reviews[]{..., "imageUrl": coalesce(image.asset->url, imageUrl)}, reviewPlatforms
}`;

const settingsQuery = `*[_type == "websiteSettings" && _id == "websiteSettings"][0]`;
const internalPagesQuery = `*[_type == "internalPageContent" && _id == "internalPageContent"][0]{
  pages[]{..., "heroImageUrl": coalesce(heroImage.asset->url, heroImageUrl)}
}`;

async function fetchOrFallback(label, query, fallback) {
  try {
    const data = await sanityClient.fetch(query);
    return data || fallback;
  } catch (error) {
    console.warn(`[Sanity] Could not load ${label}; using the site defaults.`, error);
    return fallback;
  }
}

export async function getHomeContent() {
  const content = await fetchOrFallback('home content', homeQuery, homeContentDefaults);
  return {
    ...homeContentDefaults,
    ...content,
    types: { ...homeContentDefaults.types, ...content.types },
    heroStages: content.heroStages?.length ? content.heroStages : homeContentDefaults.heroStages,
    process: { ...homeContentDefaults.process, ...content.process, steps: content.process?.steps?.length ? content.process.steps : homeContentDefaults.process.steps },
    gallery: { ...homeContentDefaults.gallery, ...content.gallery, items: content.gallery?.items?.length ? content.gallery.items : homeContentDefaults.gallery.items },
    faq: { ...homeContentDefaults.faq, ...content.faq, items: content.faq?.items?.length ? content.faq.items : homeContentDefaults.faq.items },
    testimonials: (Array.isArray(content.testimonials) ? content.testimonials : homeContentDefaults.testimonials)
      .filter((review) => review.published !== false),
    contact: { ...homeContentDefaults.contact, ...content.contact },
  };
}

export async function getAduTypes() {
  const content = await fetchOrFallback('ADU type content', aduQuery, { types: aduTypeDefaults });
  return (content.types?.length ? content.types : aduTypeDefaults).map((item) => ({
    ...item,
    src: item.imageUrl || item.src,
    best: item.bestFor || item.best,
    d: item.description || item.d,
    plans: (item.plans || []).map((plan) => Array.isArray(plan) ? plan : [plan.name, plan.squareFeet]),
    gallery: (item.gallery || []).map((image) => typeof image === 'string' ? image : image.imageUrl).filter(Boolean),
    faq: (item.faqs || item.faq || []).map((entry) => Array.isArray(entry) ? entry : [entry.question, entry.answer]),
    long: item.overview || item.long,
    pros: item.benefits || item.pros || [],
    cons: item.considerations || item.cons || [],
    time: item.buildTime || item.time,
    hero: item.imageUrl || item.hero,
    metaTitle: item.metaTitle || (item.name + ' | Pacific West Home Builders'),
    metaDescription: item.metaDescription || [item.tag, item.description].filter(Boolean).join('. '),
  }));
}

export async function getPortfolioContent() {
  const content = await fetchOrFallback('portfolio content', portfolioQuery, portfolioDefaults);
  const projectItems = Array.isArray(content.projects) ? content.projects : portfolioDefaults.projects;
  const reviewItems = Array.isArray(content.reviews) ? content.reviews : portfolioDefaults.reviews;
  const projects = projectItems.filter((project) => project.published !== false).map((project) => ({
    ...project,
    slug: typeof project.slug === 'string' ? project.slug : project.slug?.current,
    cover: project.cover || project.coverUrl || project.coverImageUrl,
    gallery: Array.isArray(project.gallery) ? project.gallery.map((item) => typeof item === 'string' ? item : item.imageUrl).filter(Boolean) : [],
  }));
  const reviews = reviewItems.filter((review) => review.published !== false).map((review) => ({ ...review, image: review.imageUrl || review.image }));
  return { ...portfolioDefaults, ...content, projects, reviews };
}

export async function getWebsiteSettings() {
  return fetchOrFallback('website settings', settingsQuery, websiteSettingsDefaults);
}

export async function getInternalPages() {
  const content = await fetchOrFallback('internal page content', internalPagesQuery, { pages: [] });
  return Object.fromEntries((content.pages || []).map((page) => [page.path, page]));
}
