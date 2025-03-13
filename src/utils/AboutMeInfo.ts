import { SignedImageProps } from '@/interfaces'
import Main from '@images/Main.png'
import Story from '@images/Story.png'
import Experience from '@images/Experience.jpg'
import Skills from '@images/Skills.jpg'
import Interests_Hobbies from '@images/Interests_Hobbies.png'

export const aboutMeInfo: SignedImageProps[] = [
  {
    image: Main,
    text: 'I am a passionate programmer and lifelong learner who finds joy in every step of my journey! Originally from Ukraine, I moved to Canada to pursue my dream of studying computer programming. Every challenge and opportunity along the way has shaped my growth, and I’m excited to share my passion with the world.',
  },
  {
    image: Story,
    text: 'My journey into programming began at the Lyceum of Information Technologies in Dnipro, where I graduated with a gold medal for academic excellence. This foundation led me to pursue a Computer Programming and Analysis degree at Conestoga College in Canada.<br/><br/>Alongside my studies, I actively contributed to the tech community — earning a Leadership Ambassador Award and co-founding the Google Developer Student Club at Conestoga to connect students through tech-driven initiatives.',
  },
  {
    image: Experience,
    text: '<b>Professional Experience</b><br/><br/>' +
      '• <b>Software Developer Team Lead | Vehikl</b> – led a team, conducted mentorship, and worked on an HR tool using Laravel, Vue, and Microsoft SQL.<br/>' +
      '• <b>Software Developer | Vehikl</b> – built scalable applications, including a claims management tool for a healthcare company, using React, TypeScript, and PostgreSQL.<br/>' +
      '• <b>Contract Developer</b> – worked on mobile and web applications, including a bar management tool (Next.js) and a drone site survey app (React Native).<br/>' +
      '• <b>Community & Public Speaking</b> – hosted 100+ tech sessions, onboarded new developers, and presented company-wide tech talks.',
  },
  {
    image: Skills,
    text: '<b>Technical Expertise</b><br/><br/>' +
      '• Full-stack development with Vue, React, Next.js, Laravel, and TypeScript.<br/>' +
      '• Experience with PostgreSQL, MySQL, MongoDB, and Supabase.<br/>' +
      '• Agile workflows, pair/mob programming, and test-driven development (Jest, Cypress, PHPUnit).<br/>' +
      '• Cloud-based solutions and DevOps with Google Cloud Platform.',
  },
  {
    image: Interests_Hobbies,
    text: 'Outside of coding, I run <i>Little Drinks</i>, a creative side project where I share my passion for mixology through unique drink recipes and content. Experimenting with cocktails and mocktails allows me to blend creativity with precision, much like programming.<br/><br/>I also love traveling, exploring new places, and embracing different cultures. Other hobbies include meditation, yoga, and visiting art galleries and exhibitions. Most importantly, I cherish time spent with friends and family.',
  }
]
