import AIicon from '@/public/AI.png'
import GraphIcon from '@/public/Graph.png'
import ManageIcon from '@/public/manage.png'
import LandfillIcon from '@/public/landfill.png'

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/how-it-works', key: 'How RECYCLED works', label: 'How It Works' },
  { href: '/about-us', key: 'About Us', label: 'About Us' },
  { href: '/pricing', key: 'pricing ', label: 'Pricing ' },
  { href: '/contact-us', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
//AI sorting; statistics; Manage all yours bins in one place; reduce landfill tax
export const FEATURES = [
  {
    title: 'AI Sorting',
    icon: AIicon,
    variant: 'green',
    description:
      "Reduce the contamination with AI sorting techniques, ensuring every piece of rubbish is accurately categorised into the right bin. Our  artificial intelligence algorithms analyse and classify waste items swiftly and accurately, optimising recycling efforts and minimising waste sent to landfills.",
  },
  {
    title: 'Statistics',
    icon: GraphIcon,
    variant: 'green',
    description:
    'Our web application provides comprehensive and insightful statistics on waste disposal patterns. Gain valuable insights into your waste management practices, including information about the most common types of waste generated, recycling rates, and trends over time. With detailed analytics, you can make informed decisions to improve efficiency and sustainability.',
  },
  {
    title: 'Manage all your bins in one place',
    icon: ManageIcon,
    variant: 'green',
    description:
    'The RecyclED web app offers a centralised platform for managing all your waste bins efficiently. Easily monitor the status of each bin, schedule collections, track fill levels, and generate reports to streamline waste management operations. With intuitive controls and real-time updates, staying on top of your waste management tasks has never been easier.',
  },
  {
    title: 'Reduce landfill tax',
    icon: LandfillIcon,
    variant: 'green',
    description:
    "Take control of your waste disposal costs by minimising unnecessary rubbish sent to landfills. By utilising AI sorting techniques and optimising waste management practices, you can significantly reduce the amount of waste destined for landfills, and lower your landfill tax expenses. Save money while promoting environmental sustainability with RecyclED's waste reduction solutions.",
  },
];

// FOOTER SECTION
// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Us',
      'How It Works',
      'Contact Us'
    ],
    urls: [
      '/about-us',
      '/how-it-works',
      '/contact-us'
    ]
  }
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Telephone', value: '+44 (0)123-456-7890' },
    { label: 'Email', value: 'recycled@recycled.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};