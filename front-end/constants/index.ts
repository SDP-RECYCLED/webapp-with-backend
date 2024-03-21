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
      "Reduce the contamination with AI sorting techniques, ensuring every rubbish goes into the right bin",
  },
  {
    title: 'Statistics',
    icon: GraphIcon,
    variant: 'green',
    description:
    'Our web app provides valuable insights on waste disposal patterns, including information about the most common types of waste and the time of day each bin is used most.',
  },
  {
    title: 'Manage all your bins in one place',
    icon: ManageIcon,
    variant: 'green',
    description:
    'The RECYCLED web app provides a centralised hub for waste management.',
  },
  {
    title: 'Reduce landfill tax',
    icon: LandfillIcon,
    variant: 'green',
    description:
    'No need to pay for landfill tax by reducing unnecessary rubbish put into general bin',
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
  },
  {
    title: 'Our Community',
    links: ['UK Recycle', 'Other Community', 'Other Community'],
    urls: [
      '/uk-recycle',
      '/other-community',
      '/other-community'
    ]
  },
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