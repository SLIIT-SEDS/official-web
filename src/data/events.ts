import cosmicBazaar2026Img from '@/events/cosmic_bazaar2026.jpg';
import cosmicBazaar2025Img from '@/events/cosmic_bazzar2025.jpg';
import prominence2025Img from '@/events/Prominence2025.png';

export interface Event {
  id: number;
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
  longDescription: string[];
}

export const eventsData: Event[] = [
  {
    id: 1,
    year: '2026',
    category: 'AGM',
    title: 'Annual General Meeting',
    description:
      'The Annual General Meeting of SEDS SLIIT brings together members, leadership, and alumni to review achievements, present annual reports, and appoint the new executive committee for the upcoming term.',
    image: '/neurorbit_banner.png',
    longDescription: [
      'The Annual General Meeting of SEDS SLIIT brings together members, leadership, and alumni to review achievements, present annual reports, and appoint the new executive committee for the upcoming term.',
    ],
  },
  {
    id: 2,
    year: '2026',
    category: 'Cosmic Bazaar',
    title: 'Cosmic Bazaar 2026',
    description:
      'Cosmic Bazaar 2026 is the flagship community and engagement festival organized by SEDS SLIIT, bringing together space-themed activities, stalls, and collaborative experiences for the student community.',
    image: cosmicBazaar2026Img,
    longDescription: [
      'Cosmic Bazaar 2026 is the flagship community and engagement festival organized by SEDS SLIIT, bringing together space-themed activities, stalls, and collaborative experiences for the student community.',
    ],
  },
  {
    id: 3,
    year: '2025',
    category: 'Cosmic Bazaar',
    title: 'Cosmic Bazaar 2025',
    description:
      'The SLIIT SEDS Chapter successfully hosted a vibrant and engaging dual event combining a Sales Day and a Movie Marathon named "Cosmic Bazaar 2025" in February and March',
    image: cosmicBazaar2025Img,
    longDescription: [
      "Held on 24th February, the Sales Day featured lively stalls offering diverse products, exciting promotions, and interactive games, showcasing creativity and entrepreneurial spirit. Complementing this, the Movie Marathon was held on 24th, 25th February, and 1st March exclusively for SLIIT undergraduates, building up a few hours of relaxation and social bonding through a curated film lineup. Targeted at the entire undergraduate community, the initiative effectively met its key objectives: raising funds for future SEDS activities, supporting vendors, strengthening chapter visibility, and promoting student engagement. The event was a resounding success, leaving a lasting impact on further solidifying the SEDS Chapter's dynamic presence at SLIIT.",
    ],
  },
  {
    id: 4,
    year: '2025',
    category: 'Prominence',
    title: 'Prominence 2025',
    description:
      'PROMINENCE 2025 is a premier astronomy and solar observation workshop hosted by SEDS SLIIT. This immersive event brings together space enthusiasts, students, and experts for hands-on workshops, expert-led academic sessions, and dedicated solar viewing activities. It offers a unique opportunity to explore the science of the Sun and connect with the next generation of space explorers.',
    image: prominence2025Img,
    longDescription: [
      'Embark on a captivating journey into the heart of our solar system with PROMINENCE 2025, the flagship astronomy and solar observation workshop organized by SEDS SLIIT (Students for the Exploration and Development of Space). Scheduled for September 12th, 2025, at the SLIIT Main Auditorium, this event is meticulously designed to ignite curiosity, foster scientific literacy, and bridge the gap between classroom theory and real-world space exploration.',
      'Whether you are a seasoned astrophile or a curious beginner, PROMINENCE 2025 offers a diverse agenda that caters to all levels of interest. The event kicks off at 9:00 AM and features a lineup of academic sessions led by prominent figures in astrophysics, interactive group workshops, and deep-dive discussions on the latest advancements in solar science.',
      "The undisputed highlight of the day is the live solar observation session. Utilizing specialized, high-grade solar telescopes, participants will have a safe, rare chance to view the Sun's dynamic surface features, including sunspots, solar flares, and prominences, in real-time. Beyond the educational aspects, PROMINENCE 2025 serves as a vibrant networking hub, allowing students to collaborate, share ideas, and engage with the broader Sri Lankan space community. Join us to expand your horizons, build practical skills, and look at our closest star through a completely new lens.",
    ],
  },
];
