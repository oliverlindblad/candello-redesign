// Project data structure
export interface Project {
  title: string;
  description: string;
  slug: string;
  image?: string;
  category?: string;
  // Add more fields as needed based on Figma design
}

// Sample projects - will be replaced with actual data from Figma
const projects: Project[] = [
  {
    title: 'Atriet',
    description: 'I Atriets lyse og åbne omgivelser producerede vi en stemningsfuld video, der fremhæver både rummets energi og brandets fortælling',
    slug: 'atriet',
    category: 'Film & foto',
  },
  {
    title: 'Carlsberg byen',
    description: 'Midt i Carlsberg Byens rå og moderne arkitektur fangede vi stemningen gennem en serie visuelt stærke billeder',
    slug: 'carlsberg-byen',
    category: 'Dronefilm',
  },
  {
    title: 'Dusager',
    description: 'Vi indfangede Dusagers arbejdsunivers gennem stemningsfulde kontorbilleder, der viser både mennesker, rytme og rum',
    slug: 'dusager',
    category: 'Film & foto',
  },
  {
    title: 'Dandy Business Park',
    description: 'I Dandy Business Park skabte vi visuelle fortællinger, der indfanger parkens dynamiske miljø og inspirerende arkitektur',
    slug: 'dandy-business-park',
    category: 'Hjemmeside',
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

