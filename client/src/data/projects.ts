export const projects = [
    {
        id: 'lumina-fashion',
        title: 'Lumina Fashion',
        category: 'E-Commerce',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop',
        description: 'A bespoke e-commerce experience for a luxury fashion house.',
        fullDescription: 'Lumina Fashion represents the pinnacle of digital luxury retail. We were approached to completely overhaul their outdated online presence and create a storefront that matched the elegance of their physical boutiques. The goal was to reduce friction, increase average order value, and tell the brand story effectively.',
        challenge: 'The client faced high cart abandonment rates due to a clunky checkout process and slow page loads. Additionally, the mobile experience was non-responsive, alienating a significant portion of their traffic.',
        solution: 'We built a headless commerce solution using Next.js and Shopify Plus. This allowed for lightning-fast page loads and complete design freedom. we implemented AI-driven product recommendations and a streamlined one-page checkout.',
        technologies: ['React', 'Next.js', 'Shopify Plus', 'Tailwind CSS', 'Framer Motion'],
        impact: '40% increase in conversion rate, 25% increase in AOV, and a 60% reduction in bounce rate.',
        gallery: [
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1490481651871-ab5a8cf0db69?q=80&w=1170&auto=format&fit=crop'
        ]
    },
    {
        id: 'nexus-health',
        title: 'Nexus Health',
        category: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop',
        description: 'A HIPAA-compliant telemedicine platform connecting patients with specialists.',
        fullDescription: 'Nexus Health needed a secure, reliable platform to facilitate remote doctor-patient consultations during the pandemic and beyond. Security and ease of use were paramount.',
        challenge: 'Ensuring end-to-end encryption for video calls while maintaining high video quality on low-bandwidth connections. The system also needed to integrate with legacy Electronic Health Record (EHR) systems.',
        solution: 'We utilized WebRTC for secure, high-quality video streaming and built a custom encrypted messaging layer. We developed middleware to safely sync data with existing hospital databases using HL7 standards.',
        technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB'],
        impact: 'Facilitated over 50,000 remote consultations in the first year and reduced patient wait times by 70%.',
        gallery: [
            'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1170&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1170&auto=format&fit=crop'
        ]
    },
    {
        id: 'estate-prime',
        title: 'EstatePrime',
        category: 'Real Estate',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop',
        description: 'A high-performance real estate portal processing over 100,000 listings daily.',
        fullDescription: 'EstatePrime aimed to disrupt the real estate market with a platform that offered virtual tours and instant valuation estimates.',
        challenge: 'Handling a massive database of property images and providing real-time search filtering without latency.',
        solution: 'We implemented Elasticsearch for sub-millisecond search queries and used an image CDN for optimized media delivery. We also integrated Matterport APIs for 3D virtual tours.',
        technologies: ['Vue.js', 'Elasticsearch', 'AWS S3', 'Python/Django'],
        impact: 'Processes 100k+ listings daily with sub-second search speeds. User engagement time increased by 300%.',
        gallery: [
            'https://images.unsplash.com/photo-1582407947304-fd86f028f808?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop'
        ]
    },
    {
        id: 'finvault',
        title: 'FinVault',
        category: 'FinTech',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
        description: 'A secure, bank-grade financial dashboard for high-net-worth individuals.',
        fullDescription: 'FinVault required a fortress-like application for users to manage diverse investment portfolios. Trust and data visualization were key components.',
        challenge: 'Aggregating real-time data from multiple stock exchanges and crypto markets while ensuring zero-trust security architecture.',
        solution: 'We built a microservices architecture with a dedicated security layer. We used D3.js for complex, interactive financial charting and deployed the app in a private cloud environment.',
        technologies: ['Angular', 'D3.js', 'Java Spring Boot', 'PostgreSQL'],
        impact: 'Trusted by over 500 private wealth managers. Zero security breaches since launch.',
        gallery: [
            'https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1170&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1170&auto=format&fit=crop'
        ]
    },
    {
        id: 'culina-app',
        title: 'Culina',
        category: 'Hospitality',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop',
        description: 'A vibrant, interactive app for a global restaurant chain.',
        fullDescription: 'Culina wanted to digitize the dining experience without losing the personal touch. They needed an app for reservations, ordering, and loyalty rewards.',
        challenge: 'Syncing real-time table availability across 200+ locations and integrating with various Point of Sale (POS) systems.',
        solution: 'We developed a cross-platform mobile app using React Native. We created a unified API layer that bridged the gap between the app and the disparate POS systems at different locations.',
        technologies: ['React Native', 'Firebase', 'GraphQL', 'Node.js'],
        impact: '2 million downloads in the first 6 months. Loyalty program participation grew by 150%.',
        gallery: [
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1074&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1170&auto=format&fit=crop'
        ]
    },
    {
        id: 'ecotrack-iot',
        title: 'EcoTrack',
        category: 'IoT / Enterprise',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop',
        description: 'An IoT-enabled dashboard for monitoring industrial energy consumption.',
        fullDescription: 'EcoTrack helps large manufacturing plants monitor their energy usage in real-time to identify wastage and optimize efficiency.',
        challenge: 'Visualizing massive streams of sensor data in real-time without overwhelming the user interface.',
        solution: 'We implemented a time-series database (InfluxDB) and used WebSockets for live data updates. The UI features customizable dashboards allowing engineers to focus on specific metrics.',
        technologies: ['React', 'Redux', 'InfluxDB', 'Go', 'MQTT'],
        impact: 'Clients reported an average of 15% reduction in energy costs within the first quarter of adoption.',
        gallery: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop'
        ]
    }
];
