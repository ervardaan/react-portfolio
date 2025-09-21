import paragonLogo from '../assets/logos/paragongenomics.jpg'
import soundsafeLogo from '../assets/logos/soundsafe.jpg'
import aiClubLogo from '../assets/logos/aiuw.jpg'
import vpInfotechLogo from '../assets/logos/vpinfotech.jpg'
import uwLogo from '../assets/logos/uwmadison.jpg'

export const experiences = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    org: 'Paragon Genomics',
    location: 'Fremont, CA',
    dates: ['May 2024 – Aug 2024', 'May 2025 – Aug 2025'],
    description: [
      'AI-powered curation db interface: Developed FastAPI endpoints for Biomedical NER for incoming user queries. Integrated NER outputs with LLM-based SQL query generation and execution. Fed SQL outputs to an LLM for relevant structured NL response generation. Created Supabase DB with schema augmented using pgvector for fine-tuned SQL query generation.',
      'Data Pipeline Improvement: Worked on AWS-based (S3, Lambda, SQS, DynamoDB) data processing pipeline. Diagnosed and fixed memory leaks, crashes, and stability issues to significantly improve reliability. Enhanced debugging with CloudWatch logs and refined logging strategies.'
    ],
    tech: ['FastAPI', 'Biomedical NER', 'LLM', 'SQL', 'Supabase', 'pgvector', 'AWS S3', 'Lambda', 'SQS', 'DynamoDB', 'CloudWatch'],
    logo: paragonLogo,

  },
  {
    id: 2,
    title: 'Machine Learning Platform Engineer Intern',
    org: 'Soundsafe.AI',
    location: 'Remote',
    dates: ['May 2025 – Aug 2025'],
    description: [
      'Improved stability of Audio Watermarking algorithm development by fixing OOM errors during high-dim matrix multiplication.',
      'Added structure to CNN model repository layout by externalizing hardcoded parameters for reproducible model training and inference.'
    ],
    tech: ['Deep Learning', 'CNNs', 'Audio Watermarking', 'Python'],
    logo: soundsafeLogo
  },
  {
    id: 3,
    title: 'President – AI Club (AI@UW)',
    org: 'University of Wisconsin–Madison',
    location: 'Madison, WI',
    dates: ['Jan 2025 – Present'],
    description: [
      'Led Cheese Hacks hackathon; secured $1200 funding and expanded mentorship from industry AI experts.',
      'Built partnerships with Google, OpenAI, and Meta; hosted events on ethical AI, design, and HCI.',
      'Organized “Day of AI” local outreach event; received Dean’s Award of Excellence for planning, innovation, and leadership.'
    ],
    tech: ['Leadership', 'Event Planning', 'AI Ethics', 'Community Outreach'],
    logo: aiClubLogo
  },
  {
    id: 4,
    title: 'Software Engineering Intern',
    org: 'VP Infotech',
    location: 'Irving, TX',
    dates: ['Jun 2023 – Aug 2023'],
    description: [
      'Performed automation testing of Lululemon and Hyphen web apps using Cypress, Selenium, and Cucumber in JavaScript.',
      'Developed a mobile testing framework with Appium, Postman, and Node.js; utilized TestRail for test management.',
      'Executed SQL queries on Data Warehouse while creating test orders using Orders and Retail Management systems.'
    ],
    tech: ['Cypress', 'Selenium', 'Cucumber', 'JavaScript', 'Appium', 'Postman', 'Node.js', 'TestRail', 'SQL'],
    logo: vpInfotechLogo
  },
  {
    id: 5,
    title: 'Undergraduate Teaching Assistant (CS Instructor)',
    org: 'University of Wisconsin–Madison',
    location: 'Madison, WI',
    dates: ['Jan 2023 – May 2023'],
    description: [
      'Mentored over 1,000 students in programming languages (Java, Python), multivariable calculus, and DevOps projects using version control and Scrum methodologies.',
      'Guided students in solving complex system design problems, SQL queries, bit manipulation, and circuit diagrams.',
      'Developed study materials and organized classes for core computer science courses, addressing course-related queries and maintaining a focused learning environment.'

    ],
    tech: ['Teaching', 'Computer Science Fundamentals'],
    logo: uwLogo
  },
  {
    id: 6,
    title: 'Cashier, Stocker, and Barista',
    org: 'University of Wisconsin–Madison',
    location: 'Madison, WI',
    dates: ['Sep 2022 – Dec 2024'],
    description: [
      'Processed payments for over 2,000 customers daily at multiple cash counters, verifying identities and managing online orders using Starship robot delivery service.',
      'Collaborated with team members to minimize student queue wait times to a maximum of 5 minutes by efficiently distributing cashier roles.',
      'Prepared food items such as stir-fry, burgers, and sandwiches, while volunteering for late-night shifts and assisting as a dishwasher during peak hours.'
    ],
    tech: ['Customer Service', 'Time Management', 'Teamwork'],
    logo: uwLogo
  }
]
