import chamodaImg from '@/board/Chamoda Suraweera.jpeg';
import isinduImg from '@/board/Isindu Nethmika.jpeg';
import kaveeshaImg from '@/board/Kaveesha Rahubadda.jpg';
import chamikaImg from '@/board/Chamika Lakshan.png';
import rashaadImg from '@/board/Rashaad.png';
import kawanImg from '@/board/Kawan Rupasinghe.png';
import yesenImg from '@/board/Yesen Binuwara.png';
import nikiniImg from '@/board/Niki Bandara.jpg';
import tharukaImg from '@/board/Tharuka Pathmasiri.jpg';
import shageeshanImg from '@/board/Shageeshan Thamodharam.jpeg';
import dilaraImg from '@/board/Dilara Liyanage.jpg';
import gayathriImg from '@/board/Gayathri Priya.jpg';
import sachinImg from '@/board/SACHIN WEERASOORIYA.jpeg';

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}

export const boardMembers: BoardMember[] = [
  {
    id: '1',
    name: 'Chamoda Suraweera',
    role: 'President',
    image: chamodaImg,
    featured: true,
  },
  {
    id: '2',
    name: 'Isindu Nethmika',
    role: 'Vice President',
    image: isinduImg,
  },
  {
    id: '3',
    name: 'Kaveesha Rahubadda',
    role: 'Secretary',
    image: kaveeshaImg,
  },
  {
    id: '4',
    name: 'Chamika Lakshan',
    role: 'Vice President',
    image: chamikaImg,
  },
  {
    id: '5',
    name: 'Sabeelur Rashaad',
    role: 'Treasurer',
    image: rashaadImg,
  },
  {
    id: '6',
    name: 'Kawan Rupasinghe',
    role: 'Division Manager',
    image: kawanImg,
  },
  {
    id: '7',
    name: 'Yesen Binuwara',
    role: 'Project Manager',
    image: yesenImg,
  },
  {
    id: '8',
    name: 'Nikini Bandara',
    role: 'Assistant Secretary',
    image: nikiniImg,
  },
  {
    id: '9',
    name: 'Tharuka Pathmasiri',
    role: 'Assistant Secretary',
    image: tharukaImg,
  },
  {
    id: '10',
    name: 'Shageeshan Thamodharam',
    role: 'Assistant Treasurer',
    image: shageeshanImg,
  },
  {
    id: '11',
    name: 'Dilara Liyanage',
    role: 'Events Coordinator',
    image: dilaraImg,
  },
  {
    id: '12',
    name: 'Gayathri Krishnaram',
    role: 'Editor',
    image: gayathriImg,
  },
  {
    id: '13',
    name: 'Sachin Weerasooriya',
    role: 'Assistant Editor',
    image: sachinImg,
  },
];
