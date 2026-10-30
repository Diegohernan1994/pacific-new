const imagery = '/assets/imagery/reviews-projects/';

export const reviews = [
  {
    name: 'Barbara J.',
    project: 'ADU',
    category: 'adu',
    platform: 'Yelp',
    quote: 'Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions. The team was professional, reliable, and really cared about getting things done right. I’m beyond happy with the results and would absolutely recommend them to anyone looking to build!',
    image: `${imagery}gallery/02.jpg`
  },
  {
    name: 'Juan I.',
    project: 'ADU Foundation',
    category: 'adu',
    platform: 'Google',
    quote: 'I can’t say enough good things about Pacific West Home Builders. They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free. There were a few unexpected issues along the way (as with any big project), but they tackled every challenge head-on and kept things moving. The team was reliable, hardworking, and truly cared about getting everything just right. I’m so grateful for their work and would absolutely recommend them to anyone looking to build!',
    image: `${imagery}build/03-foundation.jpg`
  },
  {
    name: 'Nancy A.',
    project: 'New Construction',
    category: 'construction',
    platform: 'Google',
    quote: 'Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch. From start to finish, his follow-up was excellent, ensuring everything was completed to the highest standard. The entire team was skilled, efficient, and dedicated to delivering quality work. Highly recommend!',
    image: `${imagery}build/05-enclosure.jpg`
  },
  {
    name: 'John M.',
    project: 'Kitchen Remodel',
    category: 'remodel',
    platform: 'Google',
    quote: 'They did an amazing job on my kitchen remodel! The team was professional, easy to work with, and made the entire process smooth from start to finish. The craftsmanship and attention to detail were top-notch, and the final result exceeded my expectations. My kitchen looks beautiful, and I couldn’t be happier. Highly recommend!',
    image: `${imagery}clean/kitchen-green-cabinets.jpg`
  }
];

export const reviewPlatforms = [
  { name: 'Google', href: 'https://maps.app.goo.gl/JdgDHbJKTQgGWFhHA' },
  { name: 'Yelp', href: 'https://www.yelp.com/biz/pacific-west-home-builders-encino' },
  { name: 'Thumbtack', href: 'https://www.thumbtack.com/ca/woodland-hills/bathroom-remodeling/pacific-west-home-builders/service/503988149221982224' },
  { name: 'HomeAdvisor', href: 'https://www.homeadvisor.com/rated.PacificWestHomeBuilders.144921672.html' }
];

export const projectQuotes = [
  {
    quote: 'Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.',
    name: 'Barbara J.', project: 'ADU', platform: 'Yelp'
  },
  {
    quote: 'They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.',
    name: 'Juan I.', project: 'ADU Foundation', platform: 'Google'
  },
  {
    quote: 'Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.',
    name: 'Nancy A.', project: 'New Construction', platform: 'Google'
  }
];

export const projects = [
  {
    slug: 'detached-adu-sherman-oaks', name: 'Detached ADU', city: 'Sherman Oaks', category: 'ADUs', cover: `${imagery}gallery/02.jpg`,
    gallery: [`${imagery}gallery/01.jpg`, `${imagery}gallery/12.jpg`, `${imagery}gallery/15.jpg`, `${imagery}gallery/05.jpg`],
    size: '900 sq ft · 2 bed / 2 bath', time: '8 months', year: '2025', budget: '$280k–$320k', review: 0,
    summary: 'A two-bedroom backyard home built for long-term rental income.',
    brief: 'The owners wanted a rental unit that would cover a large share of their mortgage without giving up the whole backyard.',
    challenge: 'Narrow side access meant no large equipment could reach the build area, and an existing sewer line ran through the planned footprint.',
    solution: 'We shifted the footprint four feet to clear the sewer line, used a smaller excavator and a line pump for the slab, and set the unit on its own electric meter.',
    result: 'The unit rented within three weeks of final inspection. The owners kept a private yard on the main-house side.'
  },
  {
    slug: 'garage-conversion-van-nuys', name: 'Garage Conversion', city: 'Van Nuys', category: 'ADUs', cover: `${imagery}gallery/08.jpg`,
    gallery: [`${imagery}gallery/04.jpg`, `${imagery}gallery/10.jpg`, `${imagery}gallery/14.jpg`, `${imagery}gallery/16.jpg`],
    size: '420 sq ft · 1 bed / 1 bath', time: '5 months', year: '2025', budget: '$110k–$140k', review: 1,
    summary: 'A detached two-car garage turned into a one-bedroom unit for a family member.',
    brief: 'Give the owner’s mother her own home on the property, close by but independent.',
    challenge: 'The existing slab was out of level by more than an inch and had no vapor barrier.',
    solution: 'We kept the walls and roof, ground and leveled the slab, added a vapor barrier and new subfloor, and re-framed the garage door opening as a window wall.',
    result: 'Move-in five months after permit, at roughly half the cost of a new detached unit.'
  },
  {
    slug: 'detached-adu-altadena', name: 'Detached ADU', city: 'Altadena', category: 'ADUs', cover: `${imagery}gallery/01.jpg`,
    gallery: [`${imagery}gallery/05.jpg`, `${imagery}gallery/06.jpg`, `${imagery}gallery/07.jpg`, `${imagery}gallery/11.jpg`],
    size: '600 sq ft · 1 bed / 1 bath', time: '7 months', year: '2026', budget: '$210k–$250k', review: 0,
    summary: 'A one-bedroom ADU with a covered porch and its own private yard.',
    brief: 'A guest house for visiting family that could become a rental later.',
    challenge: 'The lot sloped toward the rear, and the city required a drainage plan before plan check.',
    solution: 'We designed a stepped foundation with a short retaining wall and routed drainage to the street.',
    result: 'A level porch and yard for the ADU, with no water reaching the main house.'
  },
  {
    slug: 'attached-adu-burbank', name: 'Attached ADU', city: 'Burbank', category: 'ADUs', cover: `${imagery}gallery/09.jpg`,
    gallery: [`${imagery}gallery/17.jpg`, `${imagery}gallery/16.jpg`, `${imagery}gallery/15.jpg`, `${imagery}gallery/10.jpg`],
    size: '450 sq ft · Studio', time: '7 months', year: '2025', budget: '$170k–$200k', review: 1,
    summary: 'A studio ADU attached to the rear of the home for an aging parent.',
    brief: 'Single-level living with a separate entrance and a door the family could open from the main house.',
    challenge: 'Sound between the two units and matching an older stucco finish.',
    solution: 'Insulated party wall on resilient channel, solid-core connecting door, and a stucco mix sampled on site until it matched.',
    result: 'From the street it reads as one house. Inside, each unit is quiet and fully separate.'
  },
  {
    slug: 'second-story-adu-glendale', name: 'Second-story ADU', city: 'Glendale', category: 'ADUs', cover: `${imagery}types/second-story-adu.jpg`,
    gallery: [`${imagery}gallery/06.jpg`, `${imagery}gallery/19.jpg`, `${imagery}gallery/14.jpg`, `${imagery}gallery/18.jpg`],
    size: '650 sq ft · 1 bed / 1 bath', time: '10 months', year: '2025', budget: '$260k–$300k', review: 2,
    summary: 'A one-bedroom unit built above an existing detached garage.',
    brief: 'Add a rental without losing any yard on a small lot.',
    challenge: 'The garage footings were too shallow to carry a second story.',
    solution: 'Our engineer specified new footings and steel posts inside the garage, then we framed the upper unit with its own exterior stair.',
    result: 'The garage stayed in use below, and the upper unit has views over the neighborhood.'
  },
  {
    slug: 'jadu-arcadia', name: 'JADU', city: 'Arcadia', category: 'ADUs', cover: `${imagery}types/jadu.jpg`,
    gallery: [`${imagery}gallery/11.jpg`, `${imagery}gallery/03.jpg`, `${imagery}gallery/20.jpg`, `${imagery}gallery/18.jpg`],
    size: '380 sq ft · Suite', time: '4 months', year: '2026', budget: '$75k–$95k', review: 0,
    summary: 'A junior ADU carved from an existing bedroom wing.',
    brief: 'A private suite for an adult child, built quickly and without adding square footage.',
    challenge: 'The wing shared plumbing with the main kitchen.',
    solution: 'We added a dedicated drain line and an efficiency kitchen, plus a new exterior door to the side yard.',
    result: 'Finished in four months with no new structure.'
  },
  {
    slug: 'kitchen-remodel-studio-city', name: 'Kitchen Remodel', city: 'Studio City', category: 'Remodels', cover: `${imagery}clean/kitchen-green-cabinets.jpg`,
    gallery: [`${imagery}clean/kitchen-taupe.jpg`, `${imagery}clean/kitchen-pendant-floor.jpg`, `${imagery}clean/dining-oak.jpg`, `${imagery}gallery/04.jpg`],
    size: '260 sq ft', time: '8 weeks', year: '2026', budget: '$70k–$90k', review: 2,
    summary: 'Custom green cabinetry, brass hardware and a new pantry wall.',
    brief: 'More storage and a kitchen that opens to the dining room.',
    challenge: 'A load-bearing wall sat between the kitchen and dining room.',
    solution: 'We replaced the wall with a flush beam, then built a full-height pantry along the remaining wall.',
    result: 'One open room, twice the storage, and a layout that works for two cooks.'
  },
  {
    slug: 'bathroom-remodel-pasadena', name: 'Bathroom Remodel', city: 'Pasadena', category: 'Remodels', cover: `${imagery}gallery/03.jpg`,
    gallery: [`${imagery}gallery/14.jpg`, `${imagery}gallery/17.jpg`, `${imagery}gallery/20.jpg`, `${imagery}stock/s01.jpg`],
    size: '110 sq ft', time: '5 weeks', year: '2024', budget: '$45k–$60k', review: 2,
    summary: 'A primary bath with a curbless shower and double vanity.',
    brief: 'A bathroom that would work for the owners as they age, without looking clinical.',
    challenge: 'A curbless shower needed the floor lowered over an existing joist bay.',
    solution: 'We recessed the shower floor between joists, added a linear drain and full waterproofing membrane.',
    result: 'A step-free shower and more vanity space in the same footprint.'
  }
];
