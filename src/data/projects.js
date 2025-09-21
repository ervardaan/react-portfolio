export const projects = [
  {
    id: 1,
    title: '2D Flappy Bird Implementation',
    description:
      'Java-based game with smooth physics-driven bird movement, pipe obstacle generation, and custom collision detection algorithms ensuring consistent gameplay.',
    tech: ['Java', 'OOP', 'Algorithms'],
    link: 'https://github.com/ervardaan/flappy-bird',
    tags: []
  },
  {
    id: 2,
    title: 'eBay Data DB Implementation',
    description:
      'Analyzed eBay JSON data to design relational schema with ER diagrams. Built SQLite pipeline with DDL and ETL scripts to import and structure JSON into database tables.',
    tech: ['Python', 'Bash', 'JSON', 'SQLite3'],
    link: 'https://github.com/ervardaan/ebay_data_db',
    tags: []
  },
  {
    id: 3,
    title: 'React Portfolio App on AWS',
    description:
      'Vite-based portfolio site with dynamic React components deployed on S3. Automated deployments via GitHub Actions, optimized latency with CloudFront, and integrated Route 53 and CloudWatch for domain + monitoring.',
    tech: ['React', 'TypeScript', 'AWS', 'NPM'],
    link: 'https://github.com/ervardaan/react-portfolio' ,
    tags: []
  },
  {
    id: 4,
    title: 'XV6 OS Job Scheduler',
    description:
      'Extended xv6 with new system calls and implemented a multi-level feedback queue (MLFQ) scheduler with CPU decay. Evaluated performance against reference scheduler via context switches and tick-time plots.',
    tech: ['xv6', 'MLFQ', 'System Calls'],
    link: 'https://github.com/ervardaan/xv6-scheduler' ,
    tags: []
  },
    {
    id: 5,
    title: 'LeNet CNN on MiniPlaces Dataset',
    tech: ['Python', 'PyTorch', 'MiniPlaces', 'PCA', 'Image Size Reduction', 'Parameter Optimization'],
    description: [
      'Implemented, trained, and tested LeNet CNN architecture for classification of MiniPlaces dataset using PyTorch.',
      'Loaded and compressed images using PCA from 128×128 to 32×32 resolution.',
      'Implemented separate methods for loading, image size reduction, optimization, batch formation, training, and testing each dependent layer of the neural network.',
      'Trained and tested the NN with linear/non-linear, pooling, flattened layers, and different sizes of 3D kernels for efficient loss-less image compression.',
      'Implemented feedforward neural networks with backtracking and different activation functions like ReLU, sigmoid, and tanh.',
      'Trained and tested the NN with different batch and epoch sizes and different configurations of learning rate.',
      'Achieved final output layer with 1M parameters mapped to element-wise probability function for input feature similarity.',
      'Improved accuracy from 62% to 82% in final epochs via parameter optimization.'
    ],
    link: '#', // replace with GitHub or demo link if available,
    tags: []
  },
  {
    id: 6,
    title: 'Periodic Alarm Handler',
    tech: ['C', 'SIGALRM', 'SIGINT', 'SIGFPE', 'GDB', 'objdump', 'Interrupt Handling'],
    description: [
      'Used SIGALRM, SIGINT, SIGFPE, and GDB to control and organize processed interrupts for announcing asynchronous events to a process.',
      'Gained insight into asynchronous nature of interrupts, handling interrupts and traps.',
      'Viewed and inspected object file contents using objdump disassembler.'
    ],
    link: '#',
    tags: []
  },
  {
    id: 7,
    title: 'Sim-Compiler Mini-CPU Simulator',
    tech: ['C', 'C++', 'Interrupts', 'Exception Handling', 'Bit Manipulation', 'LRU Cache', 'x86 Assembly', 'Memory Management'],
    description: [
      'Developed a mini-CPU simulator OS using hard disk and SSD emulators, memory allocators, and “binary bombs”.',
      'Performed dynamic L3 to L1 cache allocation using LRU cache algorithm with eviction and SOR.',
      'Built processes and managed runtime concurrency using flags and bit manipulation.',
      'Implemented an “interrupt and except” system leveraging disk management, stack smashing, and x86 assembly instructions.'
    ],
    link: '#',
    tags: []
  }
]

const categoryKeywords = {
  "Computer Science": [
    "C", "C++", "Java", "Python", "OOP", "x86", "interrupt", "assembly", "compiler", "OS", "MLFQ", "data structure", "algorithm", "concurrency", "CPU", "memory"
  ],
  "Data Science": [
    "Python", "Pandas", "NumPy", "PyTorch", "TensorFlow", "CNN", "NN", "image", "dataset", "SQL", "Supabase", "pgvector", "data pipeline", "AWS", "Lambda", "S3", "SQS", "DynamoDB", "LLM"
  ],
  "Statistics": [
    "PCA", "optimization", "probability", "accuracy", "loss", "parameter", "regression", "analysis", "metrics", "statistical"
  ]
};

function assignTags(project) {
  const tags = [];

  const text = [
    ...(project.description || []),
    ...(project.tech || [])
  ]
    .join(" ")
    .toLowerCase();

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(k => text.includes(k.toLowerCase()))) {
      tags.push(category);
    }
  }

  return tags;
}

// Assign tags to all projects
projects.forEach(p => {
  p.tags = assignTags(p);
});
