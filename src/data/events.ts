export interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  longDescription: string[];
}

export const eventsData: Event[] = [
  {
    id: 1,
    category: 'NEURORBIT',
    title: 'Galactic Space Hackathon',
    description: 'An intense 48-hour challenge to design solutions for outer-space living conditions and data visualization.',
    image: '/neurorbit_banner.png',
    longDescription: [
      'The Galactic Space Hackathon was an intensive 48-hour innovation challenge organized by SEDS SLIIT, designed to bring together talented developers, designers, and space enthusiasts. The event aimed to solve pressing challenges related to outer-space living conditions, satellite data visualization, and cosmic exploration systems.',
      'Participants worked in teams under the mentorship of industry experts and researchers from both academia and space technology organizations. The teams had access to advanced resources and datasets, pushing the boundaries of what is possible using space data and modern software frameworks.',
      'The hackathon culminated in a live pitching session before a panel of esteemed judges. Winning teams were awarded cash prizes and incubation opportunities to further develop their prototypes into viable solutions.'
    ]
  },
  {
    id: 2,
    category: 'NEURORBIT',
    title: 'Awareness Session',
    description: 'The Awareness Session was an introductory event conducted by SEDS SLIIT for SLIIT students, with the objective of providing a comprehensive overview of the organization, its structure, and its initiatives.',
    image: '/neurorbit_banner.png',
    longDescription: [
      'The Awareness Session was an introductory event conducted by SEDS SLIIT for SLIIT students, with the objective of providing a comprehensive overview of the organization, its structure, and its initiatives. The session was designed to familiarize prospective members with the society’s vision, key activities, and the contributions of its various divisions.',
      'The event commenced with an introduction by the then President of SEDS SLIIT (2024/2026), Sudeepa Jayanath, who presented an overview of SEDS SLIIT, highlighting its mission, achievements, and impact over the past year. This was followed by presentations from Division Managers and Assistant Managers, who delivered concise briefings on their respective divisions, outlining their roles, ongoing projects, and opportunities for student involvement.',
      'The session also featured a guest address by Mahendri Hemachandra, the then Vice Chairperson of SEDS Sri Lanka, who shared insights from her journey within SEDS, offering inspiration and guidance to new members.',
      'The event concluded with an interactive trivia session, encouraging active participation and engagement among attendees. Overall, the Awareness Session effectively strengthened connections with prospective members while fostering interest and enthusiasm for SEDS SLIIT.'
    ]
  },
];
