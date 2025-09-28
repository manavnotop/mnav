type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'openxploit_',
    description:
      'a containerized tool for scanning and reporting vulnerabilities in local or docker-based applications.',
    link: 'https://openxploit.xyz',
    video: 'https://your-video-url.com/qwen3.mp4', // replace if you have a video
    id: 'project1',
  },
  {
    name: 'toy qwen3_',
    description:
      'a character-level language model inspired by qwen3, implemented and trained on shakespeare dataset.',
    link: 'https://github.com/manavnotop/toy-qwen3',
    video: 'https://your-video-url.com/qwen3.mp4', // replace if you have a video
    id: 'project2',
  },
  {
    name: 'toy llama3.2_',
    description:
      'a lightweight character-level language model inspired after llama 3.2, trained on the shakespeare dataset.',
    link: 'https://github.com/manavnotop/toy-llama3.2',
    video: 'https://your-video-url.com/llama3.mp4',
    id: 'project3',
  },
  {
    name: 'toy qwen3 moe_',
    description:
      'an efficient character-level mixture-of-experts model inspired from qwen3-moe, trained on shakespeare.',
    link: 'https://github.com/manavnotop/toy-qwen3-MoE',
    video: 'https://your-video-url.com/moe.mp4',
    id: 'project4',
  },
  {
    name: 'yodalm_',
    description:
      'a 4-bit quantized and instruction-tuned qwen3 model fine-tuned on custom data, that speaks yoda.',
    link: 'https://github.com/manavnotop/LLM-Sprint/tree/main/yodalm',
    video: 'https://your-video-url.com/yodalm.mp4',
    id: 'project5',
  },
  {
    name: 'simple rag_',
    description:
      'A RAG application built from the official langchain tutorial.',
    link: 'https://github.com/manavnotop/first-RAG',
    video: 'https://your-video-url.com/rag.mp4',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Athena Automation',
    title: 'Full Stack Intern',
    start: 'April, 2025',
    end: 'May 2025',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Bharat Forge Limited',
    title: 'Machine Learning Intern',
    start: 'Dec, 2023',
    end: 'Feb, 2024',
    link: '#',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/manavnotop',
  },
  {
    label: 'X',
    link: 'https://x.com/manavvnotop',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/manav-agarwal-746296282/',
  },
]

export const EMAIL = 'manuagarwal1443@gmail.com'