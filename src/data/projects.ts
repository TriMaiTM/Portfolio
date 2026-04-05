export interface Project {
  id: string;
  title: string;
  description: { vi: string; en: string };
  tech: string[];
  image: string;
  link: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'erebus',
    title: 'Erebus',
    description: {
      vi: 'Công cụ quản lý dự án ưu tiên AI, tích hợp trí tuệ nhân tạo để tự động hóa lập kế hoạch, phân công nhiệm vụ và theo dõi tiến độ dự án.',
      en: 'An AI-first project management tool that leverages artificial intelligence to automate planning, task assignment, and project progress tracking.'
    },
    tech: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'PostgreSQL'],
    image: '🤖',
    link: 'https://github.com/TriMaiTM/Erebus',
    github: 'https://github.com/TriMaiTM/Erebus',
    featured: true,
  },
  {
    id: 'ticketnft',
    title: 'TicketNFT',
    description: {
      vi: 'Nền tảng bán vé phi tập trung sử dụng công nghệ NFT, cho phép mua bán vé sự kiện an toàn, minh bạch và chống làm giả trên blockchain.',
      en: 'A decentralized NFT ticketing platform enabling secure, transparent, and counterfeit-proof event ticket sales and transfers on the blockchain.'
    },
    tech: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
    image: '🎟️',
    link: 'https://github.com/TriMaiTM/TicketNFT',
    github: 'https://github.com/TriMaiTM/TicketNFT',
    featured: true,
  },
  {
    id: 'ttdn',
    title: 'TTDN',
    description: {
      vi: 'Website giới thiệu doanh nghiệp và hệ thống quản lý tin tức được xây dựng bằng Angular 18+ và Firebase Firestore, hỗ trợ CRUD đầy đủ và đồng bộ dữ liệu thời gian thực.',
      en: 'A business introduction website and news management system built with Angular 18+ and Firebase Firestore, featuring full CRUD operations and real-time data sync.'
    },
    tech: ['Angular', 'TypeScript', 'Firebase', 'Angular Material', 'SCSS'],
    image: '🏢',
    link: 'https://ttdn-trimaitm.vercel.app',
    github: 'https://github.com/TriMaiTM/TTDN',
    featured: true,
  },
];
