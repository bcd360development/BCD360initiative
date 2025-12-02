
import { NavItem, ProjectData, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', labelFr: 'Accueil', path: '/' },
  { label: 'Who We Are', labelFr: 'Qui Sommes-Nous', path: '/about' },
  { label: 'Our Projects', labelFr: 'Nos Projets', path: '/projects' },
  { label: 'Work With Us', labelFr: 'Travailler Avec Nous', path: '/work-with-us' },
  { label: 'News', labelFr: 'Nouvelles', path: '/news' },
  { label: 'Contact', labelFr: 'Contact', path: '/contact' },
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'economic-justice',
    title: 'Economic Justice',
    description: 'BCD360 has been implementing entrepreneurship and vocational training programs tailored for young people and marginalized women. We establish partnerships with local networks and establishments and government programmes to provide access to economic support services, education and job placement opportunities for trained young people and marginalized women. 151 young people and marginalized women has been reached so far.  BCD360 is currently devising other approach including partnership to expand her effort in the community.',
    stats: '151 Reached',
    image: 'https://i.ibb.co/mFdzxZZd/BYD-Creatives.jpg'
  },
  {
    id: 'healthcare',
    title: 'Healthcare access and mental health support',
    description: 'BCD360 provides services such as sexual and reproductive health, HIV prevention, care, and support, as well as mental health services for young people and marginalized women. Through partnership and mutual referral, BCD360 continues to increase access to clinical services by young people and marginalized women through outreach programs. 424 young people and marginalized women as well as healthcare workers have been reached so far.  BCD360 is venturing to expand through telemedicine while improving staff training and partnerships with healthcare providers.',
    stats: '424 Reached',
    image: 'https://i.ibb.co/XxHsm0T8/BCD360-4.jpg'
  },
  {
    id: 'social-justice',
    title: 'Social Justice',
    description: 'BCD360 has been implementing awareness campaigns, diversity and cultural exchange workshops and policy advocacy tailored to promote equality, fairness, and the respect of human rights for all individuals by addressing systemic barriers and inequalities for young people and marginalized women. 210 young people and marginalized women has been reached so far.  BCD360 is currently devising other approach including partnership to expand her effort in the community.',
    stats: '210 Reached',
    image: 'https://i.ibb.co/KcQRLdj4/BCD360-5.jpg'
  },
  {
    id: 'environment',
    title: 'Environment and climate responsibility',
    description: 'BCD360 has been implementing awareness campaigns, sensitization and capacity building of young people and marginalized women tailored to reducing consumption through recycling, composting, and choosing reusable items; cutting our carbon footprint by using public transport, walking, biking, or switching to an electric vehicle; and conserving resources by improving energy and water efficiency at home and in the community in the hinterland and suburbs. 322 young people and marginalized women has been reached so far.  BCD360 is currently devising other approach including partnership to expand her effort in the community.',
    stats: '322 Reached',
    image: 'https://i.ibb.co/dwzXpfWw/BCD360-6.jpg'
  },
  {
    id: 'research',
    title: 'Research for development',
    description: 'BCD360 has been implementing evidence generation through literature review, developing a methodology, collecting and analyzing data, and writing and presenting the findings on HIV and SRH prevention, cervical cancer, violence against persons, sustainable economic empowerment. Abstracts of these studies were accepted in:\nIAS conference, 2023 in Australia, presented in AIDS 2024 conference in Germany, HIVR4P conference in Peru, South America, Fast-Track Cities 2024 conference, Paris, France, MASCC/ISOO 2025, INTEREST 2025, ICASA 2025.\nBCD360 is currently devising other approach including partnership to expand her effort in research strategy and report dissemination.',
    stats: 'Global Presence',
    image: 'https://i.ibb.co/7JY8djfd/BCD360-7.jpg'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 6,
    title: 'From Local Action to Global Stages: The Research Engine of BCD360',
    date: 'June 10, 2025',
    summary: 'When you think of a community NGO, you might picture grassroots workshops and local outreach—and at BCD360, that picture is absolutely correct. But there’s another, powerful layer to our work: a robust engine of research.',
    image: 'https://i.ibb.co/DHHHd0qW/BCD360-9-1.jpg',
    category: 'Research',
    tags: ['Research', 'Global Health', 'Evidence-Based', 'Conferences'],
    content: `When you think of a community NGO, you might picture grassroots workshops and local outreach—and at BCD360, that picture is absolutely correct. But there’s another, powerful layer to our work: a robust engine of research that translates local experiences into global evidence and back into local action.

Our "Research for Development" pillar is the backbone that informs everything we do. We believe that to solve local problems, we must first understand them deeply. Our team conducts rigorous, multidisciplinary research on the frontlines—studying HIV/SRH prevention, cervical cancer, violence against persons, and sustainable economic models within the communities we serve.

This isn’t research locked in an archive. It’s living, breathing evidence that shapes our programs. The insights from a study on barriers to healthcare in Taraba state directly inform our outreach strategies. Data on economic challenges faced by young women in the FCT shapes our vocational training curriculum.

And our voice doesn't stop at the community border. The quality and relevance of our work have earned a place on the world stage. Abstracts of our research have been accepted and presented at premier international conferences including the IAS Conference, AIDS 2024, HIVR4P, and Fast-Track Cities Paris. This means the realities of marginalized women and youth in Nigeria are being heard by global policymakers, scientists, and funders.

This two-way flow—local data to global discourse, and global insights back to local solutions—makes our approach unique. We are not just implementing projects; we are contributing to the global body of knowledge on inclusive development while ensuring our community work is cutting-edge and evidence-based.

It proves that impactful change starts with listening to a community and is amplified by sharing its story with the world.

Interested in evidence-based development? Read about our conference presentations and research goals.`
  },
  {
    id: 5,
    title: "Beyond Aid: How BCD360's 5-Pillar Approach is Creating Sustainable Change",
    date: 'June 2, 2025',
    summary: "True, lasting development requires more than temporary solutions. At Beam Community Development 360 Initiative (BCD360), we have built our impact around five interconnected project pillars designed to create sustainable change.",
    image: 'https://i.ibb.co/fGSNZBvP/BCD360-1.jpg',
    category: 'Impact Report',
    tags: ['Sustainability', 'Healthcare', 'Social Justice', 'Environment', 'Economic Justice'],
    content: `True, lasting development requires more than temporary solutions. At Beam Community Development 360 Initiative (BCD360), we have built our impact around five interconnected project pillars, each designed to create sustainable change for young people and marginalized women in Nigeria.

Economic Justice: We move beyond handouts by implementing tailored entrepreneurship and vocational training. By partnering with local networks and government programs, we create pathways to real jobs and economic independence. So far, 151 individuals have gained new skills and hope for a self-reliant future.

Healthcare & Mental Well-being: Access to health is a fundamental right. Our programs provide essential sexual and reproductive health services, HIV prevention and support, and crucial mental health care. Through outreach and partnerships, we’ve reached 424 individuals and healthcare workers, breaking down barriers to vital services.

Social Justice: Equality is the bedrock of a fair society. Our awareness campaigns, diversity workshops, and policy advocacy work to dismantle systemic barriers. We have engaged 210 individuals, promoting a culture of human rights and fairness for all.

Environmental Responsibility: The climate crisis disproportionately affects the vulnerable. We empower communities with knowledge on recycling, reducing carbon footprints, and conserving resources. Our environmental initiatives have sensitized 322 people, fostering grassroots climate action.

Research for Development: Evidence is our compass. Our team generates critical data on issues from HIV prevention to economic empowerment, ensuring our work is informed and effective. This research has gained global recognition, being presented at conferences from Australia to Germany.

These pillars do not stand alone. They reinforce each other, creating a comprehensive ecosystem of support. An economically empowered woman is better positioned to advocate for her health rights. A community educated on environmental justice is stronger and more resilient. This is the 360-degree model in action—building a future that is not only better but built to last.

Explore our projects and see the faces of change in our gallery.`
  },
  {
    id: 4,
    title: 'Empowering Voices, Building Futures: The Story of BCD360',
    date: 'May 24, 2025',
    summary: 'In the heart of Nigeria, where opportunity often fades at the edges of urban centers, a beacon of hope and development shines brightly—Beam Community Development 360 Initiative (BCD360).',
    image: 'https://i.ibb.co/4wDRKgRn/BCD360-2-1.jpg',
    category: 'Success Story',
    tags: ['Empowerment', 'Development', 'Community', 'BCD360'],
    content: `In the heart of Nigeria, where opportunity often fades at the edges of urban centers, a beacon of hope and development shines brightly—Beam Community Development 360 Initiative (BCD360). Born from an urgent need to support marginalized individuals in the hinterlands and suburbs, BCD360 has grown from a focused effort on infectious disease prevention into a comprehensive, inclusive centre dedicated to the development of young persons and marginalized women.

Our mission is clear: to improve lives through creative approaches. This isn’t just about aid; it’s about empowerment. We combine capacity building, critical service provision, and innovative research to drive advocacy for truly inclusive development. Our vision is an equitable and sustainable society where well-being is universal, and no one is left on the fringes.

What sets BCD360 apart is our holistic, 360-degree approach. We understand that change cannot be one-dimensional. That’s why we tackle development from every angle—economic, social, health, and environmental—guided by core values of collaboration, excellence, inclusion, and respect.

From entrepreneurship training in Jalingo to health outreach in AMAC, our work is driven by the belief that with the right tools and opportunities, communities can build their own resilient futures. We are not just delivering programs; we are amplifying voices and fostering self-reliance.

This is more than our work; it’s our promise. A promise to continue resonating with the most vulnerable, to partner with communities, and to build a Nigeria where every young person and every woman has the power to thrive.

Learn more about our journey and join our mission at www.bcd360.org.ng.`
  },
  {
    id: 1,
    title: 'Launching of Economic Empowerment Manual',
    date: 'October 15, 2023',
    summary: 'BCD360 successfully launched the new comprehensive manual designed to aid young women in starting their own sustainable businesses.',
    image: 'https://i.ibb.co/KgtRg95/BCD360-3-1.jpg',
    category: 'Economic Justice'
  }
];

export const BANK_DETAILS = {
  bank: 'First Bank of Nigeria',
  name: 'Beam Community Development 360 Initiative',
  number: '2046466529'
};

export const CONTACT_INFO = {
  address1: 'Office 1: Cajaar estate, 900102 AMAC, FCT, Nigeria.',
  address2: 'Office 2: #11, Sala Avenue, by-pass, Jalingo, Taraba state, Nigeria.',
  phone: '+2347085982732',
  altPhone: '+2348068849782',
  email: 'bcd360development@gmail.com',
  officialEmail: 'info@bcd360.org.ng'
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1CkxWDyHcy/?mibextid=wwXIfr',
  twitter: 'https://x.com/bcd360199260ng?s=21',
  instagram: 'https://www.instagram.com/beam_community_development?igsh=MWtxcXgyYjhtaWZyNA%3D%3D&utm_source=qr',
  tiktok: 'https://www.tiktok.com/@beamcommunitydeve'
};
