export const projects = [
  {
    id: 1,
    title: '2D Flappy Bird Implementation',
    description:
      'Java-based game with smooth physics-driven bird movement, pipe obstacle generation, and custom collision detection algorithms ensuring consistent gameplay.',
    tech: ['Java', 'OOP', 'Algorithms'],
    link: 'https://github.com/ervardaan/flappy-bird' // replace with actual repo
  },
  {
    id: 2,
    title: 'eBay Data DB Implementation',
    description:
      'Analyzed eBay JSON data to design relational schema with ER diagrams. Built SQLite pipeline with DDL and ETL scripts to import and structure JSON into database tables.',
    tech: ['Python', 'Bash', 'JSON', 'SQLite3'],
    link: 'https://github.com/ervardaan/ebay_data_db' // replace with actual repo
  },
  {
    id: 3,
    title: 'React Portfolio App on AWS',
    description:
      'Vite-based portfolio site with dynamic React components deployed on S3. Automated deployments via GitHub Actions, optimized latency with CloudFront, and integrated Route 53 and CloudWatch for domain + monitoring.',
    tech: ['React', 'TypeScript', 'AWS', 'NPM'],
    link: 'https://github.com/ervardaan/react-portfolio' // replace with actual repo
  },
  {
    id: 4,
    title: 'XV6 OS Job Scheduler',
    description:
      'Extended xv6 with new system calls and implemented a multi-level feedback queue (MLFQ) scheduler with CPU decay. Evaluated performance against reference scheduler via context switches and tick-time plots.',
    tech: ['xv6', 'MLFQ', 'System Calls'],
    link: 'https://github.com/ervardaan/xv6-scheduler' // replace with actual repo
  }
]
