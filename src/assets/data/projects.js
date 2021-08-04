import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/cripto.jpeg';
import UTrackerImg from '../images/ProjectZero.jpeg';
import GreenCtgImg from '../images/food.jpeg';
import CoinTrackerImg from '../images/tateti.jpeg';
import CavinImg from '../images/coder.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'Radio La Zero',
    desc:
      'I made a web site for a communication company in the city of Rio cuarto. Developed in the front end. ',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Food Page',
    desc:
      'Make a website always from the front end side because that is what I like the most for me.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'ta-te-ti play',
    desc: 'Interactive game for 2 people, created with javascrip ',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Coder Projects',
    desc: 'First project I did for a coder-house course',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Cripto Challanger',
    desc:
      'Application for cryptocurrency trading. Requested by an API and with pure javascrip.',
    img: ProjectImg,
  },
];

export default projects;
