export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'So_long - A 2D Game',
    desc: 'So_long is a graphical project at 42 where you will have to create a simple game using the minilibx, a basic library for graphical programming. The project involves creating a game scenario with walls, collectibles, an exit, and a player character.',
    subdesc:
      'A simple 2D game made with C and the minilibx library.',
    href: 'https://github.com/Madelsa/42-so_long',
    texture: 'textures/project/So_long.mp4',
    logo: 'assets/42.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid rgba(0, 128, 255, 0.6)',
      boxShadow: '0px 0px 60px 0px rgba(0, 128, 255, 0.6)',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'C',
        path: 'assets/c.svg',
      },
    ],
  },
  {
    title: 'Cub3d - A 3D Maze',
    desc: 'Cub3D is a simplified version of a ray-casting game engine inspired by the classic Wolfenstein 3D. The goal of the project is to develop a basic understanding of game development principles, particularly the use of ray-casting to render a 3D view based on 2D map data.',
    subdesc:
      'A 3D maze made with C athe minilibx library.',
    href: 'https://github.com/Madelsa/42-Cub3d',
    texture: '/textures/project/Cub3d.mp4',
    logo: 'assets/42.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid rgba(102, 51, 153, 0.6)',
      boxShadow: '0px 0px 60px 0px rgba(102, 51, 153, 0.6)',
    },
    spotlight: 'assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'C',
        path: 'assets/c.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -3.8, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [3.6, -5.8, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-21.5, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
