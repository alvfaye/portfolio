import kanban from './images/kanban.jpg';
import feedback from './images/feedback.jpg';
import invoice from './images/invoice-app.jpg';
import markdown from './images/markdown.jpg';

import image1 from './images/testimonial3.jpg';
import image2 from './images/testimonial2.jpg';

export const projects = [
  {
    title: 'Kanban Task Management',
    subtitle: 'Remix and Prisma',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: kanban,
    link: 'https://eloquent-lewin-a7edb0.netlify.app/#projects',
  },
  {
    title: 'Product Feedback App',
    subtitle: 'React and MongoDB',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: feedback,
    link: 'https://eloquent-lewin-a7edb0.netlify.app/#projects',
  },
  {
    title: 'Markdown Editor',
    subtitle: 'React Hooks',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: markdown,
    link: 'https://eloquent-lewin-a7edb0.netlify.app/#projects',
  },
  {
    title: 'Invoice App',
    subtitle: 'Remix and SQLite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: invoice,
    link: 'https://eloquent-lewin-a7edb0.netlify.app/#projects',
  },
];

export const skills = [
  'Typescript',
  'React Remix',
  'Golang',
  'MongoDB',
  'Node.js',
  'Prisma',
];

export const testimonials = [
  {
    id: '1',
    quote:
      'Eveniet, quaerat? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi fugiat quod voluptate consequatur? Iste officiis sunt est reiciendis hic modi.',
    image: image1,
    name: 'Sam Andrews',
    company: "Sam's Marketing, Inc.",
  },
  {
    id: '2',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam sit deserunt omnis alias ratione atque nostrum nulla illo exercitationem?',
    image: image2,
    name: 'Pryce Taylor',
    company: 'Louver Corporation',
  },
];
