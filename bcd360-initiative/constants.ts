
import { NavItem, ProjectData, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', labelFr: 'Accueil', path: '/' },
  { label: 'Who We Are', labelFr: 'Qui Sommes-Nous', path: '/about' },
  { label: 'Our Projects', labelFr: 'Nos Projets', path: '/projects' },
  { label: 'Work With Us', labelFr: 'Bénévolat', path: '/work-with-us' },
  { label: 'Support', labelFr: 'Soutenir', path: '/support' },
  { label: 'News', labelFr: 'Actualités', path: '/news' },
  { label: 'Contact', labelFr: 'Contact', path: '/contact' },
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'economic-justice',
    title: 'Economic Justice',
    titleFr: 'Justice Économique',
    description: 'BCD360 has been implementing entrepreneurship and vocational training programs tailored for young people and marginalized women. We establish partnerships with local networks and establishments and government programmes to provide access to economic support services, education and job placement opportunities for trained young people and marginalized women. 151 young people and marginalized women has been reached so far.  BCD360 is currently devising other approach including partnership to expand her effort in the community.',
    descriptionFr: 'BCD360 met en œuvre des programmes de formation entrepreneuriale et professionnelle adaptés aux jeunes et aux femmes marginalisées. Nous établissons des partenariats avec des réseaux locaux, des établissements et des programmes gouvernementaux pour fournir un accès aux services de soutien économique, à l\'éducation et aux opportunités de placement pour les personnes formées. 151 jeunes et femmes marginalisées ont été atteints jusqu\'à présent. BCD360 conçoit actuellement d\'autres approches, y compris des partenariats, pour étendre ses efforts dans la communauté.',
    stats: '151 Reached',
    statsFr: '151 Atteints',
    image: 'https://i.ibb.co/mFdzxZZd/BYD-Creatives.jpg'
  },
  {
    id: 'healthcare',
    title: 'Healthcare access and mental health support',
    titleFr: 'Accès aux Soins et Santé Mentale',
    description: 'BCD360 provides services such as sexual and reproductive health, HIV prevention, care, and support, as well as mental health services for young people and marginalized women. Through partnership and mutual referral, BCD360 continues to increase access to clinical services by young people and marginalized women through outreach programs. 424 young people and marginalized women as well as healthcare workers have been reached so far.  BCD360 is venturing to expand through telemedicine while improving staff training and partnerships with healthcare providers.',
    descriptionFr: 'BCD360 fournit des services tels que la santé sexuelle et reproductive, la prévention, les soins et le soutien liés au VIH, ainsi que des services de santé mentale pour les jeunes et les femmes marginalisées. Grâce aux partenariats et aux références mutuelles, BCD360 continue d\'accroître l\'accès aux services cliniques via des programmes de proximité. 424 jeunes, femmes marginalisées et agents de santé ont été atteints jusqu\'à présent. BCD360 s\'efforce de s\'étendre via la télémédecine tout en améliorant la formation du personnel.',
    stats: '424 Reached',
    statsFr: '424 Atteints',
    image: 'https://i.ibb.co/XxHsm0T8/BCD360-4.jpg'
  },
  {
    id: 'social-justice',
    title: 'Social Justice',
    titleFr: 'Justice Sociale',
    description: 'BCD360 has been implementing awareness campaigns, diversity and cultural exchange workshops and policy advocacy tailored to promote equality, fairness, and the respect of human rights for all individuals by addressing systemic barriers and inequalities for young people and marginalized women. 210 young people and marginalized women has been reached so far.  BCD360 is currently devising other approach including partnership to expand her effort in the community.',
    descriptionFr: 'BCD360 met en œuvre des campagnes de sensibilisation, des ateliers sur la diversité et des plaidoyers politiques pour promouvoir l\'égalité, l\'équité et le respect des droits humains. Nous nous attaquons aux obstacles systémiques pour les jeunes et les femmes marginalisées. 210 personnes ont été atteintes jusqu\'à présent. BCD360 conçoit actuellement d\'autres approches pour étendre ses efforts.',
    stats: '210 Reached',
    statsFr: '210 Atteints',
    image: 'https://i.ibb.co/KcQRLdj4/BCD360-5.jpg'
  },
  {
    id: 'environment',
    title: 'Environment and climate responsibility',
    titleFr: 'Responsabilité Environnementale et Climatique',
    description: 'BCD360 has been implementing awareness campaigns, sensitization and capacity building of young people and marginalized women tailored to reducing consumption through recycling, composting, and choosing reusable items; cutting our carbon footprint by using public transport, walking, biking, or switching to an electric vehicle; and conserving resources by improving energy and water efficiency at home and in the community in the hinterland and suburbs. 322 young people and marginalized women has been reached so far.  BCD360 is currently devising other approach including partnership to expand her effort in the community.',
    descriptionFr: 'BCD360 mène des campagnes de sensibilisation et de renforcement des capacités pour réduire la consommation via le recyclage, le compostage et les objets réutilisables; réduire notre empreinte carbone via les transports publics ou le vélo; et conserver les ressources en améliorant l\'efficacité énergétique. 322 jeunes et femmes marginalisées ont été atteints jusqu\'à présent. BCD360 conçoit actuellement d\'autres approches pour étendre ses efforts.',
    stats: '322 Reached',
    statsFr: '322 Atteints',
    image: 'https://i.ibb.co/dwzXpfWw/BCD360-6.jpg'
  },
  {
    id: 'research',
    title: 'Research for development',
    titleFr: 'Recherche pour le Développement',
    description: 'BCD360 has been implementing evidence generation through literature review, developing a methodology, collecting and analyzing data, and writing and presenting the findings on HIV and SRH prevention, cervical cancer, violence against persons, sustainable economic empowerment. Abstracts of these studies were accepted in:\nIAS conference, 2023 in Australia, presented in AIDS 2024 conference in Germany, HIVR4P conference in Peru, South America, Fast-Track Cities 2024 conference, Paris, France, MASCC/ISOO 2025, INTEREST 2025, ICASA 2025.\nBCD360 is currently devising other approach including partnership to expand her effort in research strategy and report dissemination.',
    descriptionFr: 'BCD360 génère des preuves par la revue de littérature, le développement de méthodologies, la collecte et l\'analyse de données, et la présentation de résultats sur le VIH, la santé sexuelle, le cancer du col de l\'utérus, les violences et l\'autonomisation économique. Nos résumés ont été acceptés à : Conférence IAS 2023, AIDS 2024, HIVR4P, Fast-Track Cities 2024, MASCC/ISOO 2025, INTEREST 2025, ICASA 2025. BCD360 étend actuellement sa stratégie de recherche.',
    stats: 'Global Presence',
    statsFr: 'Présence Globale',
    image: 'https://i.ibb.co/7JY8djfd/BCD360-7.jpg'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 7,
    title: 'Gender Equality, Inclusion and Empowerment',
    titleFr: 'Égalité des Genres, Inclusion et Autonomisation',
    date: 'December 3, 2025',
    summary: 'BCD360 partnering with Olive Right to Health Initiative (ORHI) recorded a remarkable breakthrough through its Capacity Building and Inclusion Programme for Young Marginalised Women.',
    summaryFr: 'BCD360 en partenariat avec l\'Initiative Olive Right to Health (ORHI) a enregistré une percée remarquable grâce à son programme de renforcement des capacités et d\'inclusion.',
    image: 'https://i.ibb.co/m5X9rxB0/word-media-image7.jpg',
    category: 'Gender Equality',
    categoryFr: 'Égalité des Genres',
    tags: ['Gender Equality', 'Inclusion', 'Women Empowerment', 'Leadership', 'Community'],
    tagsFr: ['Égalité des Genres', 'Inclusion', 'Autonomisation des Femmes', 'Leadership', 'Communauté'],
    content: `BCD360 partnering with Olive Right to Health Initiative (ORHI) in promoting gender equality and social inclusion, recorded a remarkable breakthrough through its Capacity Building and Inclusion Programme for Young Marginalised Women. The initiative emerged from listening to the lived realities of young women who faced overlapping layers of exclusion, poverty, limited education, harmful cultural norms, and lack of representation in decision-making spaces. Many of these young women carried dreams of economic independence and social visibility but lacked the opportunities to advance them.

Determined to change this narrative, BCD360 in partnership with ORHI launched a holistic programme focused on leadership development, livelihood skills, rights education, and community inclusion strategies. The approach centred on building confidence, strengthening agency, and creating safe platforms where young women could learn, lead, and influence their communities.

![Women Inclusion Programme](https://i.ibb.co/bgzBFxDh/BCD360-11.jpg)

The programme trained over 50 young women from the hinterland and suburb communities. Through interactive workshops, coaching circles, and mentorship pairings with experienced women leaders, participants gained practical skills they previously believed were beyond their reach; public speaking, digital communication, financial literacy, market linkages, and advocacy for women's rights. Each training module was designed to connect gender equality with everyday realities, enabling participants to recognise their value and challenge discriminatory practices that held them back.

A defining accomplishment was the formation of Women Inclusion Hubs, safe community groups facilitated by trained participants. These hubs became spaces where young women could collectively address issues such as gender-based violence, workplace discrimination, and access to education.

Among the success stories is that of Blessing, a 20-year-old who once lacked confidence to speak even in small gatherings. After completing the leadership training, she now leads her Inclusion Hub, facilitating discussions and representing young women in community meetings. Her transformation inspired a ripple effect, more girls are now stepping forward to speak, lead, and advocate.

The programme's impact has exceeded expectations. It has shifted mindsets, strengthened capacities, and opened doors for young marginalised women to participate meaningfully in economic, social, and civic spaces.`,
    contentFr: `BCD360 en partenariat avec l'Initiative Olive Right to Health (ORHI) dans la promotion de l'égalité des genres et de l'inclusion sociale, a enregistré une percée remarquable grâce à son programme de renforcement des capacités et d'inclusion pour les jeunes femmes marginalisées. L'initiative a émergé de l'écoute des réalités vécues par les jeunes femmes qui ont fait face à de multiples couches d'exclusion, de pauvreté, d'éducation limitée, de normes culturelles nuisibles et d'absence de représentation dans les espaces de prise de décision. Beaucoup de ces jeunes femmes portaient des rêves d'indépendance économique et de visibilité sociale, mais manquaient des opportunités pour les avancer.

Déterminé à changer ce récit, BCD360 en partenariat avec ORHI a lancé un programme holistique axé sur le développement du leadership, les compétences de subsistance, l'éducation aux droits et les stratégies d'inclusion communautaire. L'approche s'est concentrée sur le renforcement de la confiance, le renforcement de l'agentivité et la création de plates-formes sûres où les jeunes femmes pouvaient apprendre, diriger et influencer leurs communautés.

Le programme a formé plus de 50 jeunes femmes des communautés de l'arrière-pays et des banlieues. Grâce à des ateliers interactifs, des cercles de coaching et des appariements de mentorat avec des femmes leaders expérimentées, les participants ont acquis des compétences pratiques qu'ils croyaient auparavant être hors de portée; la parole en public, la communication numérique, l'alphabétisation financière, les liens commerciaux et le plaidoyer pour les droits des femmes. Chaque module de formation a été conçu pour connecter l'égalité des genres avec les réalités quotidiennes, permettant aux participants de reconnaître leur valeur et de contester les pratiques discriminatoires qui les retenaient.`
  },
  {
    id: 6,
    title: 'From Local Action to Global Stages: The Research Engine of BCD360',
    titleFr: 'De l\'Action Locale aux Scènes Mondiales : Le Moteur de Recherche de BCD360',
    date: 'June 10, 2025',
    summary: 'When you think of a community NGO, you might picture grassroots workshops and local outreach—and at BCD360, that picture is absolutely correct. But there is another, powerful layer to our work: a robust engine of research.',
    summaryFr: 'Quand vous pensez à une ONG communautaire, vous imaginez peut-être des ateliers locaux—et chez BCD360, c\'est exact. Mais il y a une autre couche puissante à notre travail : un moteur de recherche robuste.',
    image: 'https://i.ibb.co/DHHHd0qW/BCD360-9-1.jpg',
    category: 'Research',
    categoryFr: 'Recherche',
    tags: ['Research', 'Global Health', 'Evidence-Based', 'Conferences'],
    tagsFr: ['Recherche', 'Santé Mondiale', 'Basé sur des Preuves', 'Conférences'],
    content: `When you think of a community NGO, you might picture grassroots workshops and local outreach—and at BCD360, that picture is absolutely correct. But there’s another, powerful layer to our work: a robust engine of research that translates local experiences into global evidence and back into local action.

Our "Research for Development" pillar is the backbone that informs everything we do. We believe that to solve local problems, we must first understand them deeply. Our team conducts rigorous, multidisciplinary research on the frontlines—studying HIV/SRH prevention, cervical cancer, violence against persons, and sustainable economic models within the communities we serve.

![Research at Work](https://i.ibb.co/WW4gXDct/word-media-image4.jpg)

This isn't research locked in an archive. It's living, breathing evidence that shapes our programs. The insights from a study on barriers to healthcare in Taraba state directly inform our outreach strategies. Data on economic challenges faced by young women in the FCT shapes our vocational training curriculum.

And our voice doesn't stop at the community border. The quality and relevance of our work have earned a place on the world stage. Abstracts of our research have been accepted and presented at premier international conferences including the IAS Conference, AIDS 2024, HIVR4P, and Fast-Track Cities Paris. This means the realities of marginalized women and youth in Nigeria are being heard by global policymakers, scientists, and funders.

This two-way flow; local data to global discourse, and global insights back to local solutions makes our approach unique. We are not just implementing projects; we are contributing to the global body of knowledge on inclusive development while ensuring our community work is cutting-edge and evidence-based.

We have continued to demonstrate that impactful change starts with listening to our community and amplifying our voice through sharing stories with the world.

Interested in our evidence-based development and research goals? Send us a message on bcd360@proton.me.`,
    contentFr: `Lorsque vous pensez à une ONG communautaire, vous imaginez peut-être des ateliers de base et une sensibilisation locale—et chez BCD360, cette image est tout à fait correcte. Mais il y a une autre couche puissante à notre travail : un moteur de recherche robuste qui traduit les expériences locales en preuves mondiales et inversement en actions locales.

Notre pilier "Recherche pour le Développement" est l'épine dorsale qui informe tout ce que nous faisons. Nous croyons que pour résoudre les problèmes locaux, nous devons d'abord les comprendre en profondeur. Notre équipe mène des recherches rigoureuses et multidisciplinaires sur le terrain—étudiant la prévention du VIH/SSR, le cancer du col de l'utérus, la violence contre les personnes et les modèles économiques durables au sein des communautés que nous servons.

Ce n'est pas une recherche enfermée dans une archive. Ce sont des preuves vivantes qui façonnent nos programmes. Les enseignements d'une étude sur les obstacles aux soins de santé dans l'État de Taraba informent directement nos stratégies de sensibilisation. Les données sur les défis économiques auxquels sont confrontées les jeunes femmes dans le FCT façonnent notre programme de formation professionnelle.

Et notre voix ne s'arrête pas à la frontière communautaire. La qualité et la pertinence de notre travail nous ont valu une place sur la scène mondiale. Les résumés de nos recherches ont été acceptés et présentés lors de conférences internationales de premier plan, notamment la Conférence IAS, AIDS 2024, HIVR4P et Fast-Track Cities Paris. Cela signifie que les réalités des femmes et des jeunes marginalisés au Nigeria sont entendues par les décideurs mondiaux, les scientifiques et les bailleurs de fonds.

Ce flux bidirectionnel—données locales vers discours mondial, et perspectives mondiales vers solutions locales—rend notre approche unique. Nous ne mettons pas seulement en œuvre des projets ; nous contribuons au corpus mondial de connaissances sur le développement inclusif tout en veillant à ce que notre travail communautaire soit de pointe et fondé sur des preuves.

Cela prouve que le changement impactant commence par l'écoute d'une communauté et est amplifié par le partage de son histoire avec le monde.`
  },
  {
    id: 5,
    title: "Beyond Aid: How BCD360's 5-Pillar Approach is Creating Sustainable Change",
    titleFr: "Au-delà de l'Aide : L'Approche à 5 Piliers de BCD360",
    date: 'June 2, 2025',
    summary: "True, lasting development requires more than temporary solutions. At Beam Community Development 360 Initiative (BCD360), we have built our impact around five interconnected project pillars designed to create sustainable change.",
    summaryFr: "Le véritable développement durable nécessite plus que des solutions temporaires. Chez BCD360, nous avons bâti notre impact autour de cinq piliers interconnectés.",
    image: 'https://i.ibb.co/fGSNZBvP/BCD360-1.jpg',
    category: 'Impact Report',
    categoryFr: 'Rapport d\'Impact',
    tags: ['Sustainability', 'Healthcare', 'Social Justice', 'Environment', 'Economic Justice'],
    tagsFr: ['Durabilité', 'Santé', 'Justice Sociale', 'Environnement', 'Justice Économique'],
    content: `True, lasting development requires more than temporary solutions. At Beam Community Development 360 Initiative (BCD360), we have built our impact around five interconnected project pillars, each designed to create sustainable change for young people and marginalized women in Nigeria.

Economic Justice: We move beyond handouts by implementing tailored entrepreneurship and vocational training. By partnering with local networks and government programs, we create pathways to real jobs and economic independence. So far, 151 individuals have gained new skills and hope for a self-reliant future.

Healthcare & Mental Well-being: Access to health is a fundamental right. Our programs provide essential sexual and reproductive health services, HIV prevention and support, and crucial mental health care. Through outreach and partnerships, we’ve reached 424 individuals and healthcare workers, breaking down barriers to vital services.

Social Justice: Equality is the bedrock of a fair society. Our awareness campaigns, diversity workshops, and policy advocacy work to dismantle systemic barriers. We have engaged 210 individuals, promoting a culture of human rights and fairness for all.

Environmental Responsibility: The climate crisis disproportionately affects the vulnerable. We empower communities with knowledge on recycling, reducing carbon footprints, and conserving resources. Our environmental initiatives have sensitized 322 people, fostering grassroots climate action.

Research for Development: Evidence is our compass. Our team generates critical data on issues from HIV prevention to economic empowerment, ensuring our work is informed and effective. This research has gained global recognition, being presented at conferences from Australia to Germany.

These pillars do not stand alone. They reinforce each other, creating a comprehensive ecosystem of support. An economically empowered woman is better positioned to advocate for her health rights. A community educated on environmental justice is stronger and more resilient. This is the 360-degree model in action—building a future that is not only better but built to last.

Explore our projects and see the faces of change in our gallery.`,
    contentFr: `Le véritable développement durable nécessite plus que des solutions temporaires. Chez Beam Community Development 360 Initiative (BCD360), nous avons bâti notre impact autour de cinq piliers de projet interconnectés, chacun conçu pour créer un changement durable pour les jeunes et les femmes marginalisées au Nigeria.

Justice Économique : Nous allons au-delà de l'aide ponctuelle en mettant en œuvre des formations entrepreneuriales et professionnelles adaptées. En partenariat avec des réseaux locaux et des programmes gouvernementaux, nous créons des voies vers de vrais emplois et l'indépendance économique. Jusqu'à présent, 151 personnes ont acquis de nouvelles compétences et l'espoir d'un avenir autonome.

Santé et Bien-être Mental : L'accès à la santé est un droit fondamental. Nos programmes fournissent des services essentiels de santé sexuelle et reproductive, de prévention et de soutien au VIH, ainsi que des soins de santé mentale cruciaux. Grâce à la sensibilisation et aux partenariats, nous avons atteint 424 personnes et agents de santé, brisant les barrières aux services vitaux.

Justice Sociale : L'égalité est le fondement d'une société juste. Nos campagnes de sensibilisation, nos ateliers sur la diversité et notre travail de plaidoyer politique visent à démanteler les obstacles systémiques. Nous avons engagé 210 personnes, promouvant une culture des droits de l'homme et de l'équité pour tous.

Responsabilité Environnementale : La crise climatique affecte de manière disproportionnée les plus vulnérables. Nous autonomisons les communautés avec des connaissances sur le recyclage, la réduction de l'empreinte carbone et la conservation des ressources. Nos initiatives environnementales ont sensibilisé 322 personnes, favorisant l'action climatique locale.

Recherche pour le Développement : Les preuves sont notre boussole. Notre équipe génère des données critiques sur des questions allant de la prévention du VIH à l'autonomisation économique, garantissant que notre travail est informé et efficace. Cette recherche a acquis une reconnaissance mondiale, étant présentée lors de conférences de l'Australie à l'Allemagne.

Ces piliers ne sont pas isolés. Ils se renforcent mutuellement, créant un écosystème complet de soutien. Une femme économiquement autonome est mieux placée pour défendre ses droits à la santé. Une communauté éduquée sur la justice environnementale est plus forte et plus résiliente. C'est le modèle 360 degrés en action—bâtir un avenir qui n'est pas seulement meilleur, mais construit pour durer.`
  },
  {
    id: 4,
    title: 'Empowering Voices, Building Futures: The Story of BCD360',
    titleFr: 'Autonomiser les Voix, Bâtir l\'Avenir : L\'Histoire de BCD360',
    date: 'May 24, 2025',
    summary: 'In the heart of Nigeria, where opportunity often fades at the edges of urban centers, a beacon of hope and development shines brightly—Beam Community Development 360 Initiative (BCD360).',
    summaryFr: 'Au cœur du Nigeria, là où les opportunités s\'estompent souvent aux abords des centres urbains, un phare d\'espoir brille—BCD360.',
    image: 'https://i.ibb.co/4wDRKgRn/BCD360-2-1.jpg',
    category: 'Success Story',
    categoryFr: 'Histoire à Succès',
    tags: ['Empowerment', 'Development', 'Community', 'BCD360'],
    tagsFr: ['Autonomisation', 'Développement', 'Communauté', 'BCD360'],
    content: `In the heart of Nigeria, where opportunity often fades at the edges of urban centers, a beacon of hope and development shines brightly—Beam Community Development 360 Initiative (BCD360). Born from an urgent need to support marginalized individuals in the hinterlands and suburbs, BCD360 has grown from a focused effort on infectious disease prevention into a comprehensive, inclusive centre dedicated to the development of young persons and marginalized women.

Our mission is clear: to improve lives through creative approaches. This isn't just about aid; it's about empowerment. We combine capacity building, critical service provision, and innovative research to drive advocacy for truly inclusive development. Our vision is an equitable and sustainable society where well-being is universal, and no one is left on the fringes.

![BCD360 Impact](https://i.ibb.co/Qvgtd8N1/word-media-image5.jpg)

What sets BCD360 apart is our holistic, 360-degree approach. We understand that change cannot be one-dimensional. That's why we tackle development from every angle—economic, social, health, and environmental—guided by core values of collaboration, excellence, inclusion, and respect.

From entrepreneurship training in Jalingo to health outreach in AMAC, our work is driven by the belief that with the right tools and opportunities, communities can build their own resilient futures. We are not just delivering programs; we are amplifying voices and fostering self-reliance.

This is more than our work; it’s our promise. A promise to continue resonating with the most vulnerable, to partner with communities, and to build a Nigeria where every young person and every woman has the power to thrive.

Learn more about our journey and join our mission at www.bcd360.org.ng.`,
    contentFr: `Au cœur du Nigeria, là où les opportunités s'estompent souvent aux abords des centres urbains, un phare d'espoir et de développement brille de mille feux—Beam Community Development 360 Initiative (BCD360). Né d'un besoin urgent de soutenir les individus marginalisés dans l'arrière-pays et les banlieues, BCD360 est passé d'un effort concentré sur la prévention des maladies infectieuses à un centre complet et inclusif dédié au développement des jeunes et des femmes marginalisées.

Notre mission est claire : améliorer les vies grâce à des approches créatives. Il ne s'agit pas seulement d'aide ; il s'agit d'autonomisation. Nous combinons le renforcement des capacités, la fourniture de services critiques et la recherche innovante pour stimuler le plaidoyer en faveur d'un développement véritablement inclusif. Notre vision est une société équitable et durable où le bien-être est universel et où personne n'est laissé pour compte.

Ce qui distingue BCD360, c'est notre approche holistique à 360 degrés. Nous comprenons que le changement ne peut pas être unidimensionnel. C'est pourquoi nous abordons le développement sous tous les angles—économique, social, sanitaire et environnemental—guidés par des valeurs fondamentales de collaboration, d'excellence, d'inclusion et de respect.

De la formation à l'entrepreneuriat à Jalingo à la sensibilisation à la santé à AMAC, notre travail est motivé par la conviction qu'avec les bons outils et opportunités, les communautés peuvent bâtir leur propre avenir résilient. Nous ne nous contentons pas de fournir des programmes ; nous amplifions les voix et favorisons l'autonomie.

C'est plus que notre travail ; c'est notre promesse. Une promesse de continuer à résonner avec les plus vulnérables, de s'associer aux communautés et de bâtir un Nigeria où chaque jeune et chaque femme a le pouvoir de prospérer.`
  },
  {
    id: 1,
    title: 'Launching of Economic Empowerment Manual',
    titleFr: 'Lancement du Manuel d\'Autonomisation Économique',
    date: 'October 15, 2023',
    summary: 'BCD360 successfully launched the new comprehensive manual designed to aid young women in starting their own sustainable businesses.',
    summaryFr: 'BCD360 a lancé avec succès le nouveau manuel complet conçu pour aider les jeunes femmes à démarrer leurs propres entreprises durables.',
    image: 'https://i.ibb.co/KgtRg95/BCD360-3-1.jpg',
    category: 'Economic Justice',
    categoryFr: 'Justice Économique',
    tags: ['Economic Empowerment', 'Women Leadership', 'Skills Development', 'Sustainability'],
    tagsFr: ['Autonomisation Économique', 'Leadership Féminin', 'Développement des Compétences', 'Durabilité'],
    content: `BCD360 committed to advancing gender equity and economic justice, achieved a major milestone in partnership with Olive Right to Health Initiative (ORHI) with the launch of its Economic Empowerment Manual for Young Marginalised Women. The manual, developed through inclusive community-driven research and collaboration with relevant stakeholders and women-led cooperatives, has become a transformative tool for reshaping the economic futures of countless girls and young women.

Before the initiative began, many participants faced intersecting barriers; limited access to information, discriminatory labour practices, violence, exclusion from markets, and a lack of business skills. These structural inequalities left them economically vulnerable and unable to assert their rights. We at BCD360 recognised that real economic justice required not only skills development but also knowledge of rights, agency, and community support systems.

The launch of the manual marked a turning point. Designed in simple, practical language, the manual covers essential themes such as financial literacy, digital safety, market access strategies, legal rights in business, pathways to justice, self-security, and how to engage local institutions for support. It also features inspiring stories of young women who overcame injustice to build sustainable livelihoods.

The rollout included community workshops across communities of marginalised young women. Over 150 young women participated in the first phase, using the manual as both a learning guide and a tool for peer-to-peer knowledge sharing. Many reported immediate improvements: new small businesses launched, existing businesses stabilised, and more women began asserting their rights in markets, workplaces, and loan application processes. Local leaders also endorsed the manual as a reference tool for youth development and women's economic inclusion.

One powerful testament came from Amina, a 22-year-old who survived years of economic discrimination. After attending the workshops, she used the manual's section on market linkages and budgeting to expand her beadwork business. Today, she mentors four other young women, becoming a symbol of the manual's multiplier effect.

The success of the Economic Empowerment Manual demonstrates that when young marginalised women are equipped with knowledge, skills, and rights awareness, they can break cycles of poverty and injustice. Through this initiative, BCD 360 and ORHI has not only delivered a resource but catalysed a movement for lasting economic justice.`,
    contentFr: `BCD360, engagé dans l'avancement de l'équité des genres et de la justice économique, a réalisé une étape importante en partenariat avec l'Initiative Olive Right to Health (ORHI) avec le lancement de son Manuel d'Autonomisation Économique pour les Jeunes Femmes Marginalisées. Le manuel, développé par le biais d'une recherche participative inclusive et d'une collaboration avec les parties prenantes pertinentes et les coopératives dirigées par des femmes, est devenu un outil transformateur pour remodeler les avoirs économiques d'innombrables filles et jeunes femmes.

Avant que l'initiative ne commence, de nombreux participants ont fait face à des obstacles croisés; accès limité à l'information, pratiques discriminatoires du travail, violence, exclusion des marchés et manque de compétences professionnelles. Ces inégalités structurelles les ont laissés économiquement vulnérables et incapables d'affirmer leurs droits. Chez BCD360, nous avons reconnu que la véritable justice économique exigeait non seulement le développement des compétences, mais aussi la connaissance des droits, l'agentivité et les systèmes de soutien communautaire.

Le lancement du manuel a marqué un tournant. Conçu dans un langage simple et pratique, le manuel couvre des thèmes essentiels tels que la littératie financière, la sécurité numérique, les stratégies d'accès au marché, les droits légaux dans les affaires, les voies vers la justice, l'auto-sécurité et comment engager les institutions locales pour le soutien. Il présente également des histoires inspirantes de jeunes femmes qui ont surmonté l'injustice pour construire des moyens de subsistance durables.

Le déploiement incluait des ateliers communautaires dans les communautés de jeunes femmes marginalisées. Plus de 150 jeunes femmes ont participé à la première phase, utilisant le manuel comme un guide d'apprentissage et un outil de partage des connaissances entre pairs. Beaucoup ont signalé des améliorations immédiates: de nouvelles petites entreprises lancées, des entreprises existantes stabilisées, et plus de femmes ont commencé à affirmer leurs droits sur les marchés, les lieux de travail et les processus de demande de prêt. Les chefs locaux ont également approuvé le manuel comme un outil de référence pour le développement des jeunes et l'inclusion économique des femmes.`
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
  email: 'bcd360development@gmail.com',
  officialEmail: 'info@bcd360.org.ng'
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1CkxWDyHcy/?mibextid=wwXIfr',
  twitter: 'https://x.com/bcd360199260ng?s=21',
  instagram: 'https://www.instagram.com/beam_community_development?igsh=MWtxcXgyYjhtaWZyNA%3D%3D&utm_source=qr',
  tiktok: 'https://www.tiktok.com/@beamcommunitydeve?_r=1&_t=ZS-91MebyfTf8'
};

export const TRANSLATIONS = {
  // Navbar
  'Donate': { en: 'Donate', fr: 'Faire un don' },
  'DonateNow': { en: 'Donate Now', fr: 'Faire un don maintenant' },
  
  // Home
  'HeroTitle': { en: 'Inclusive Centre for Development', fr: 'Centre Inclusif pour le Développement' },
  'HeroSubtitle': { en: 'Championing inclusive development for young people and marginalised women in Nigeria.', fr: 'Promouvoir le développement inclusif pour les jeunes et les femmes marginalisées au Nigeria.' },
  'OurProjects': { en: 'Our Projects', fr: 'Nos Projets' },
  'VolunteerWithUs': { en: 'Volunteer With Us', fr: 'Devenez Bénévole' },
  'IntroTitle': { en: 'BCD360 is an inclusive centre for the development of young persons and marginalized women.', fr: 'BCD360 est un centre inclusif pour le développement des jeunes et des femmes marginalisées.' },
  'IntroText': { en: 'For years now, Beam Community Development 360 Initiative (BCD360) has been championing inclusive development for young people and marginalised women in Nigeria.', fr: 'Depuis des années, l\'Initiative Beam Community Development 360 (BCD360) défend le développement inclusif pour les jeunes et les femmes marginalisées au Nigeria.' },
  'Mission': { en: 'Our Mission', fr: 'Notre Mission' },
  'MissionText': { en: 'To improve lives through creative approaches, capacity building, provision of critical services, and innovative research.', fr: 'Améliorer les vies grâce à des approches créatives, au renforcement des capacités, à la fourniture de services critiques et à la recherche innovante.' },
  'Vision': { en: 'Our Vision', fr: 'Notre Vision' },
  'VisionText': { en: 'An equitable and sustainable society that enhances the well-being of humanity without marginalisation.', fr: 'Une société équitable et durable qui améliore le bien-être de l\'humanité sans marginalisation.' },
  'LivesImpacted': { en: 'Lives Impacted by Sector', fr: 'Vies Impactées par Secteur' },
  'StrategicObjectives': { en: 'Our Strategic Objectives', fr: 'Nos Objectifs Stratégiques' },
  'StrategicText': { en: 'Leveraging unique expertise, we collaborate with partners including funding bodies, governments, service providers, and civil society organizations on these objectives to achieve our mission and vision:', fr: 'En tirant parti d\'une expertise unique, nous collaborons avec des partenaires, notamment des bailleurs de fonds, des gouvernements, des prestataires de services et des organisations de la société civile, pour atteindre notre mission et notre vision :' },
  'LatestNews': { en: 'Latest News & Updates', fr: 'Dernières Actualités' },
  'LatestNewsText': { en: 'Stay informed about our activities, recent events, and opportunities.', fr: 'Restez informé de nos activités, événements récents et opportunités.' },
  'ViewAllNews': { en: 'View All News', fr: 'Voir Toutes les Actualités' },
  'ReadFullStory': { en: 'Read Full Story', fr: 'Lire l\'Histoire' },
  'JoinUs': { en: 'Join Us in Making a Difference', fr: 'Rejoignez-nous pour faire la différence' },
  'JoinUsText': { en: 'Whether you want to volunteer your time, partner with us, or donate to support our cause, there is a place for you at BCD360.', fr: 'Que vous souhaitiez donner de votre temps, vous associer à nous ou faire un don pour soutenir notre cause, il y a une place pour vous chez BCD360.' },
  'GetInvolved': { en: 'Get Involved', fr: 'Participer' },

  // Objectives
  'Advocacy': { en: 'Advocacy', fr: 'Plaidoyer' },
  'AdvocacyDesc': { en: 'Provide collaborative support for surviving and thriving by amplifying the voice and power of the most vulnerable while championing human rights.', fr: 'Fournir un soutien collaboratif en amplifiant la voix et le pouvoir des plus vulnérables tout en défendant les droits de l\'homme.' },
  'CapacityBuilding': { en: 'Capacity Building', fr: 'Renforcement des Capacités' },
  'CapacityBuildingDesc': { en: 'Be a recognized thought leader and knowledge partner for locally driven research solutions.', fr: 'Être un leader d\'opinion reconnu et un partenaire de connaissances pour des solutions de recherche locales.' },
  'Research': { en: 'Research', fr: 'Recherche' },
  'ResearchDesc': { en: 'Pioneer cutting-edge data tools and methods, conduct multidisciplinary research, and systematically build bodies of evidence.', fr: 'Pionnier des outils et méthodes de données de pointe, mener des recherches multidisciplinaires et constituer systématiquement des corpus de preuves.' },
  'ServiceDevelopment': { en: 'Service Development', fr: 'Développement de Services' },
  'ServiceDevelopmentDesc': { en: 'Catalyze the use of evidence-based tools and scale-up availability, access and uptake of relevant services for the well-being of the most vulnerable.', fr: 'Catalyser l\'utilisation d\'outils fondés sur des preuves et intensifier la disponibilité, l\'accès et l\'adoption de services pertinents.' },
  'EconomicEmpowerment': { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
  'EconomicEmpowermentDesc': { en: 'Catalyze the economic development and self-reliance of the most vulnerable.', fr: 'Catalyser le développement économique et l\'autonomie des plus vulnérables.' },
  'Sustainability': { en: 'Sustainability', fr: 'Durabilité' },
  'SustainabilityDesc': { en: 'Grow the next generation of refined leaders that pioneer solutions for resilience, driving transformational change from the grassroots to the global level.', fr: 'Faire grandir la prochaine génération de leaders raffinés qui initient des solutions pour la résilience.' },

  // About
  'WhoWeAre': { en: 'Who We Are', fr: 'Qui Sommes-Nous' },
  'WhoWeAreSub': { en: 'Born out of the urgent need to support marginalised individuals in the hinterlands and suburbs.', fr: 'Né du besoin urgent de soutenir les individus marginalisés dans l\'arrière-pays et les banlieues.' },
  'OurHistory': { en: 'Our History', fr: 'Notre Histoire' },
  'OurHistoryText': { en: 'BCD360 has evolved into an inclusive centre for the development of young persons and marginalized women. Focusing particularly on infectious disease prevention and control, involving evidence generation, advocacy and empowerment. We leverage unique expertise and collaborate with partners including funding bodies, governments, service providers, and civil society organizations.', fr: 'BCD360 a évolué pour devenir un centre inclusif pour le développement des jeunes et des femmes marginalisées. Se concentrant particulièrement sur la prévention et le contrôle des maladies infectieuses, impliquant la production de preuves, le plaidoyer et l\'autonomisation. Nous tirons parti d\'une expertise unique et collaborons avec des partenaires.' },
  'CoreValues': { en: 'Core Values', fr: 'Valeurs Fondamentales' },

  // Projects
  'OurProjectsTitle': { en: 'Our Projects', fr: 'Nos Projets' },
  'OurProjectsSub': { en: 'Driving transformational change from the grassroots to the global level through targeted initiatives.', fr: 'Impulser un changement transformationnel de la base au niveau mondial grâce à des initiatives ciblées.' },
  'ActiveProject': { en: 'Active Project', fr: 'Projet Actif' },
  'ViewGallery': { en: 'View Gallery', fr: 'Voir la Galerie' },

  // Work With Us
  'WorkWithUsTitle': { en: 'Work With Us', fr: 'Travailler Avec Nous' },
  'WorkWithUsSub': { en: 'Become a volunteer at BCD360 today!', fr: 'Devenez bénévole chez BCD360 dès aujourd\'hui !' },
  'VolunteeringOpp': { en: 'Volunteering Opportunity', fr: 'Opportunité de Bénévolat' },
  'VolunteeringText': { en: 'This is an opportunity to contribute to the development of young people and marginalized women. Join a team dedicated to making a tangible impact in our communities.', fr: 'C\'est une occasion de contribuer au développement des jeunes et des femmes marginalisées. Rejoignez une équipe dédiée à avoir un impact tangible.' },
  'AreasOfContribution': { en: 'Areas of Contribution', fr: 'Domaines de Contribution' },
  'WhyVolunteer': { en: 'Why Volunteer?', fr: 'Pourquoi Faire du Bénévolat ?' },
  'HowToApply': { en: 'How to Apply', fr: 'Comment Postuler' },
  'HowToApplyText': { en: 'Send your updated CV and a 1-page cover letter stating reason(s) why you want to volunteer, capturing what you want to contribute to reaching young people and marginalized women.', fr: 'Envoyez votre CV mis à jour et une lettre de motivation d\'une page indiquant les raisons pour lesquelles vous souhaitez faire du bénévolat.' },
  'SubjectVolunteer': { en: 'Subject: (I want to volunteer)', fr: 'Objet : (Je veux faire du bénévolat)' },
  'JobOpenings': { en: 'Job Openings', fr: 'Offres d\'Emploi' },
  'NoJobOpenings': { en: 'No current openings. Announcements will be posted here.', fr: 'Pas d\'offres pour le moment. Les annonces seront publiées ici.' },

  // Contact
  'GetInTouch': { en: 'Get in Touch', fr: 'Contactez-nous' },
  'GetInTouchText': { en: "We'd love to hear from you. Fill out the form below or reach out to us directly.", fr: 'Nous aimerions avoir de vos nouvelles. Remplissez le formulaire ci-dessous ou contactez-nous directement.' },
  'SendUsMessage': { en: 'Send us a Message', fr: 'Envoyez-nous un message' },
  'Name': { en: 'Name', fr: 'Nom' },
  'YourName': { en: 'Your full name', fr: 'Votre nom complet' },
  'Email': { en: 'Email', fr: 'E-mail' },
  'Phone': { en: 'Phone', fr: 'Téléphone' },
  'Address': { en: 'Address', fr: 'Adresse' },
  'Message': { en: 'Message', fr: 'Message' },
  'HowCanWeHelp': { en: 'How can we help?', fr: 'Comment pouvons-nous aider ?' },
  'Sending': { en: 'Sending...', fr: 'Envoi...' },
  'SendMessage': { en: 'Send Message', fr: 'Envoyer le Message' },
  'SuccessMessage': { en: 'Thank you! Your message has been received. We will contact you shortly.', fr: 'Merci ! Votre message a été reçu. Nous vous contacterons sous peu.' },
  'ErrorMessage': { en: 'Something went wrong. Please try again later or email us directly.', fr: 'Une erreur s\'est produite. Veuillez réessayer plus tard ou nous envoyer un e-mail directement.' },
  'PermissionError': { en: 'Online submissions are currently unavailable. Please email us at', fr: 'Les soumissions en ligne sont actuellement indisponibles. Veuillez nous envoyer un e-mail à' },
  'ContactInfo': { en: 'Contact Information', fr: 'Coordonnées' },
  'Headquarters': { en: 'Headquarters', fr: 'Siège Social' },
  'SupportOurWork': { en: 'Support Our Work', fr: 'Soutenez Notre Travail' },
  'SupportText': { en: 'Your contribution helps us continue our mission to support marginalized individuals in the hinterlands and suburbs.', fr: 'Votre contribution nous aide à poursuivre notre mission de soutien aux individus marginalisés.' },
  'Bank': { en: 'Bank', fr: 'Banque' },
  'AccountName': { en: 'Account Name', fr: 'Nom du Compte' },
  'AccountNumber': { en: 'Account Number', fr: 'Numéro de Compte' },

  // News
  'NewsTitle': { en: 'News & Updates', fr: 'Actualités et Mises à jour' },
  'NewsSubtitle': { en: 'Latest stories, events, and opportunities from BCD360.', fr: 'Dernières histoires, événements et opportunités de BCD360.' },

  // Footer
  'QuickLinks': { en: 'Quick Links', fr: 'Liens Rapides' },
  'AbujaOffice': { en: 'Abuja Office', fr: 'Bureau Abuja' },
  'JalingoOffice': { en: 'Jalingo Office', fr: 'Bureau Jalingo' },
  'AllRightsReserved': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
};
