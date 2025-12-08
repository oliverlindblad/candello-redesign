// Service data structure
export interface Service {
  title: string;
  description: string;
  icon?: string;
  // Add more fields as needed
}

// Sample services - will be replaced with actual data from Figma
const services: Service[] = [
  {
    title: 'Indhold',
    description: 'Candello Media er eksperter i videofilm. Det er ekstremt populært og fungerer i jeres markedsføring perfekt til at fortælle om jeres virksomhed, jeres værdier, jeres produkt.',
  },
  {
    title: 'Digital',
    description: 'Candello Media tilbyder professionel hjemmesidedesign, der passer til jeres behov.',
  },
  {
    title: 'Marketing',
    description: 'Du finder snart ikke en dansker, som ikke er på de sociale medier. Derfor er det naturligt, at markedsføring på de sociale medier er eksploderet de seneste par år. Vi kan hjælpe fra start til slut.',
  },
];

export function getServices(): Service[] {
  return services;
}

