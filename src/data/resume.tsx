import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Aman Saxena",
  initials: "AS",
  url: "https://devaman.in",
  location: "Australia",
  locationLink: "https://www.google.com/maps/place/Australia",
  description:
    "Platform & AI Engineer building agentic workflows, cloud-native backends, and developer tooling in Golang, Python and .NET.",
  summary:
    "Software Engineer with 3+ years building scalable backend, cloud-native and AI platform systems in **Golang, Python and C#/.NET**. I currently work in [Platform Engineering at HELIA](/#work), designing multi-agent AI workflows on **AWS Bedrock, Claude and GitHub Actions** that automate everything from product discovery through to delivery planning. Before that I built [AI-driven cloud cost optimisation and Golang microservices at Cloudnuro.AI](/#work) and [secure payroll data pipelines for Denovo Ventures](/#work). Outside of work I build things like [an on-demand disposable VPN](/#projects) and [Rubi, my own RAG-powered AI assistant](/#projects). Fully eligible to work in Australia (Work Visa holder).",
  avatarUrl: "/me.png", // Keeping this as is, you can update with your image path
  skills: [
    {
      category: "AI & Agentic Systems",
      items: [
        "AWS Bedrock",
        "Claude (Anthropic)",
        "OpenAI API",
        "GitHub Agentic Workflows",
        "GitHub Copilot",
        "Multi-Agent Orchestration",
        "RAG",
        "Prompt Engineering",
        "Machine Learning",
        "NLP",
      ],
    },
    {
      category: "Backend & Systems",
      items: [
        "Golang",
        "Python",
        "C#/.NET",
        "ASP.NET",
        "REST APIs",
        "Microservices",
        "Distributed Systems",
        "Secure System Design",
      ],
    },
    {
      category: "Cloud, DevOps & Platform",
      items: [
        "AWS",
        "GCP",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Cloud Run",
        "Cloud Functions",
        "Serverless",
        "Developer Platform Tooling",
        "Monitoring & Logging",
      ],
    },
    {
      category: "Databases & Data",
      items: [
        "PostgreSQL",
        "Redis",
        "SQL Server",
        "Database Design",
        "Data Aggregation",
        "Performance Optimisation",
      ],
    },
    {
      category: "Automation & Workflow",
      items: [
        "n8n",
        "Workflow Orchestration",
        "Infrastructure Automation",
        "Python Scripting",
      ],
    },
    {
      category: "Frontend",
      items: ["JavaScript/TypeScript", "React.js", "Next.js", "Vue.js"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "amansaxena2809@gmail.com",
    tel: "+61 475 225 735",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saxena-aman",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dev-aman",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://personal-items1.s3.ap-south-1.amazonaws.com/Aman_Resume.pdf",
        icon: FileText,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "HELIA",
      href: "#",
      badges: ["Current"],
      location: "Australia",
      title: "Engineer – Platform Engineering",
      logoUrl: "/helia.svg",
      start: "May 2026",
      end: "Present",
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Built an end-to-end <b>Discovery-to-Delivery agentic workflow</b> orchestrating specialised AI agents across <b>GitHub Actions</b> and <b>GitHub Agentic Workflows</b> with <b>Claude (Anthropic) on AWS Bedrock</b>, cutting end-to-end delivery cycle time by <b>70%</b>.</li>
          <li>Automated <b>GitHub repository and project provisioning</b> from an organisation-wide template repository I authored, reducing new project setup from <b>2 days to under 1 minute</b>.</li>
          <li>Engineered <b>multi-persona review agents</b> that evaluate product discovery documents against <b>CTO and COO perspectives</b>, surfacing technical feasibility and business constraints before work enters delivery.</li>
          <li>Developed an <b>Architecture Agent</b> generating three candidate architectures with explicit trade-offs, triggering a <b>Planner Agent</b> on merge that decomposes the approved design into scoped sub-tasks.</li>
          <li>Implemented <b>guardrails</b> driving adoption of secure, maintainable in-house libraries, removing recurring engineering friction across teams through targeted agentic workflows.</li>
        </ul>
      ),
      skills: [
        "AWS Bedrock",
        "Claude (Anthropic)",
        "GitHub Agentic Workflows",
        "GitHub Actions",
        "Multi-Agent Orchestration",
        "Golang",
        "Python",
        "AWS",
        "CI/CD",
        "Developer Platform Tooling",
      ]
    },
    {
      company: "Cloudnuro.AI",
      href: "#",
      badges: ["Full-time"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/cloudnuro.png",
      start: "Mar 2023",
      end: "Nov 2025",
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Designed a <b>cloud-native AI-driven recommendation system</b> in <b>Python</b> using machine learning models and REST APIs, analysing usage patterns to optimise <b>VM and database scaling</b> on <b>AWS and Azure</b>, achieving an average <b>60% cost reduction</b>.</li>
          <li>Built a backend-driven <b>onboarding platform</b> using <b>Golang microservices</b>, enabling application onboarding within <b>one minute</b> without manual assistance.</li>
          <li>Engineered a <b>data aggregation framework</b> in <b>Golang and PostgreSQL</b> consolidating cost-efficiency metrics from multiple sources, driving <b>SaaS license purchasing decisions</b>.</li>
          <li>Automated the full <b>SaaS reporting lifecycle</b> (drafting, review, release) with <b>Python</b>, saving <b>20 hours weekly</b>.</li>
        </ul>
      ),
      skills:[
        "Golang",
        "Python",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
        "Azure",
        "Microservices",
        "REST APIs",
        "Machine Learning",
        "ReactJS",
        "VueJS",
      ]
    },
    {
      company: "Denovo Ventures",
      href: "#",
      badges: ["Contract"],
      location: "Remote",
      title: "Software Engineer (Contract)",
      logoUrl: "/Denovo.png",
      start: "Nov 2024",
      end: "Nov 2025",
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Contract role in partnership with <b>Cloudnuro.AI</b>.</li>
          <li>Designed <b>enterprise-grade data ingestion services</b> in <b>.NET and C#</b>, securely processing sensitive <b>payroll data</b> for third-party integrations.</li>
          <li>Applied <b>secure coding standards, AES encryption</b> and compliance-driven system design to protect payroll data in regulated environments.</li>
          <li>Built and tested backend services on <b>Windows Server with IIS</b>, achieving <b>99.9% uptime</b> through rigorous reliability and fault-tolerance validation.</li>
        </ul>
      ),
      skills:[
        ".NET",
        "C#",
        "ASP.NET",
        "SQL Server",
        "IIS",
        "AES Encryption",
        "Secure System Design",
        "GitLab",
      ]
    }
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "B.E. in Computer Science & Engineering",
      logoUrl: "/chandigarh university.jpeg",
      start: "Jul 2019",
      end: "Jun 2023",
    }
  ],
  certifications: [
    {
      name: "Google Cloud Associate Cloud Engineer (GCP ACE)",
      issuer: "Google Cloud",
      year: "2025",
      logoUrl: "/gcp.svg",
      href: "https://cloud.google.com/learn/certification/cloud-engineer",
    }
  ],
  projects: [
    {
      title: "Rubi AI Assistant",
      href: "https://www.devaman.in/?openChat=true",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A personal AI assistant that answers questions about my professional background using my resume as a knowledge base. Implemented a Retrieval-Augmented Generation (RAG) pipeline integrating vector-based document retrieval with LLM responses, plus prompt orchestration and context management logic to improve response relevance and reduce hallucinations.",
      technologies: [
        "OpenAI",
        "Python",
        "Next.js",
        "Typescript",
        "n8n",
        "RAG (Retrieval Augmented Generation)",
        "TailwindCSS",
        "Docker",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.devaman.in/?openChat=true",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rubi_assistant.png",
      video:
        "",
    },
    {
      title: "Disposable VPN",
      href: "https://disposable-vpn.devaman.in",
      dates: "Jan 2025 - Mar 2025",
      active: true,
      description: "An on-demand VPN platform built on a serverless backend architecture with infrastructure automation and secure access control. Automated provisioning and teardown workflows support ephemeral, secure access environments at scale — 85% faster provisioning, 100+ concurrent connections and 99.9% availability.",
      technologies: [
        "Google Cloud Run",
        "Google Cloud Functions",
        "Docker",
        "Python",
        "n8n",
        "SSH",
        "Serverless Architecture",
        "Cloud Automation"
      ],
      links: [
        {
          type: "Website",
          href: "https://disposable-vpn.devaman.in",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/disposible-vpn.png",
      video: ""
    }
    ,
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
