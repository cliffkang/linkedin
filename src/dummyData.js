import home from './assets/Home.png';
import jobs from './assets/Jobs.png';
import message from './assets/Messaging.png';
import network from './assets/My Network.png';
import notifications from './assets/Notifications.png';
import me from './assets/Me.png';

const dummyData = {
  nav: [
    {
      icon: home,
      title: 'Home',
      link: 'https://www.linkedin.com/feed/',
    },
    {
      icon: network,
      title: 'My Network',
      link: 'https://www.linkedin.com/mynetwork/',
    },
    {
      icon: jobs,
      title: 'Jobs',
      link: 'https://www.linkedin.com/jobs/',
    },
    {
      icon: message,
      title: 'Messaging',
      link: 'https://www.linkedin.com/messaging/',
    },
    {
      icon: notifications,
      title: 'Notifications',
      link: 'https://www.linkedin.com/notifications/',
    },
    {
      icon: me,
      title: 'Me v',
      link: 'https://www.linkedin.com/in/cliff-kang-70bb6011/',
    },
  ],
  profile: [
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA0gAAAAJDZiNWQzMWY5LTAyMmUtNDExNi04MjBiLWFkOTM3NjhiYjQ5MQ.jpg',
      name: 'Christian Kretschmer',
      position: 'Web Developer',
      mutualConnect: 'Alicia Olivares',
      numMutual: 6,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAAvzAAAAJGE1MjczZWEyLWNjNGQtNDdkZi04ODA1LTc2N2RiYzAwN2VkNw.jpg',
      name: 'Noel Um',
      position: 'M.A. Candidate at Columbia University',
      mutualConnect: 'Robert Culbertson',
      numMutual: 16,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/030/346/0adfa6e.jpg',
      name: 'Jason Huang',
      position: 'Noise and Vibration Engineer at Toyota Motor Corporation',
      mutualConnect: 'Stephen Tanwanteng',
      numMutual: 4,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAMAAQDGAAwAAQAAAAAAAAuGAAAAJDA1OTRlNmY3LTRkZDUtNDM3ZC1iMGM3LWZhOThkYWZmNDUyYQ.jpg',
      name: 'Yoojin Lee',
      position: 'Associate at McGuireWoods LLP',
      mutualConnect: 'Michelle C. Leu',
      numMutual: 17,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/08f/150/04919b9.jpg',
      name: 'Aeree Choi',
      position: 'PV Scientist at Sanofi',
      mutualConnect: 'Timothy Kim',
      numMutual: 12,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAXKAAAAJGRkZjk2NWRlLTQyYjgtNDJhYi1iMjMzLWFkOTY5MDUzZDAxMQ.jpg',
      name: 'Ada Noh',
      position: 'Optometric Physician at Bellmawr Eye Care',
      mutualConnect: 'Chase Lee',
      numMutual: 15,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/112/037/067fcc8.jpg',
      name: 'Cesar A. Hidalgo',
      position: 'Associate Professor, MIT',
      mutualConnect: 'Dan Schultz',
      numMutual: 1,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKsAAAAJGFkZDYwZTA3LWRiNGItNGQ2My1iZWU0LTM4ZTQ2N2M5MWY0Mw.jpg',
      name: 'Eunice Lee',
      position: 'Senior Finance Consultant at Wells Fargo',
      mutualConnect: 'Andrew Hwang',
      numMutual: 1,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/088/1a2/343236b.jpg',
      name: 'Joseph Knox',
      position: 'Development Coordinator At Sledgehammer Games',
      mutualConnect: 'Melinda Kim',
      numMutual: 4,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/017/2f1/2a10495.jpg',
      name: 'Albert Lin',
      position: 'Program Manager at Alarm.com',
      mutualConnect: 'Jean Hou',
      numMutual: 50,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAIABADGAAAAAQAAAAAAAAsyAAAAJGQ0NmNhMjUwLTQ1NTItNDYyNy04MmMxLThiNzJjYjExYWRlNQ.jpg',
      name: 'Andrew Tseng',
      position: 'Digital Media Designer',
      mutualConnect: 'Pamela Yu',
      numMutual: 16,
    },
    {
      imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAMABADGAAwAAQAAAAAAABGqAAAAJDM2MDNmMDg5LWViN2YtNDcyMi1hODgzLTRlNzc2NTE3MDUyNA.jpg',
      name: 'Elisa Sunga',
      position: 'UX Program Manager at Google',
      mutualConnect: 'Alicia Olivares',
      numMutual: 3,
    },
  ],
  promoted: [
    {
      iconUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAA2ZAAAAJDRiODRkY2EzLWRkMDctNDc1My05Zjg5LWVjNTY4YWVlYmZlZg.png',
      title: 'MBA. ASAP.',
      text: 'Discover the Johnson One-Year MBA. Check your eligibility.',
    },
    {
      iconUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAdCAAAAJGYzOGRkNzdkLTM3MzAtNDM0ZC1hNGM1LWJhMzRmYWQ1NDczMg.jpg',
      title: 'Fitness Center Management',
      text: 'Elite Fitness Professionals. Profitable Operations. High member utilization',
    },
    {
      iconUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMAAQDGAAwAAQAAAAAAAAzRAAAAJDNhODQ0NjJmLWYzYzAtNGIzOC04YWQ3LWE1NWE5ZjFlNDM2Nw.png',
      title: 'W&M: Online MBA Brochure',
      text: 'Of W&M respondents are likely to recommend the online program to a friend.*',
    },
  ],
};

export default dummyData;