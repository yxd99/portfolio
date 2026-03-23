/**
 * Skill icon IDs match simple-icons slug (https://simpleicons.org/).
 * Add or remove skills per category; ensure the slug exists on simple-icons.
 */
export type SkillCategory = 'backend' | 'frontend' | 'databases' | 'devops' | 'tools';

export type Skill = {
  name: string;
  iconId: string; // simple-icons slug, e.g. 'nodedotjs', 'react', 'amazonaws'
};

export type SkillsByCategory = Record<SkillCategory, Skill[]>;

export const skillsByCategory: SkillsByCategory = {
  backend: [
    { name: 'Node.js', iconId: 'nodedotjs' },
    { name: 'NestJS', iconId: 'nestjs' },
    { name: 'TypeScript', iconId: 'typescript' },
    { name: 'Express', iconId: 'express' },
    { name: 'GraphQL', iconId: 'graphql' },
    { name: 'PHP', iconId: 'php' },
    { name: 'Laravel', iconId: 'laravel' },
  ],
  frontend: [
    { name: 'React', iconId: 'react' },
    { name: 'Next.js', iconId: 'nextdotjs' },
    { name: 'Tailwind CSS', iconId: 'tailwindcss' },
    { name: 'Vue.js', iconId: 'vuedotjs' },
  ],
  databases: [
    { name: 'MySQL', iconId: 'mysql' },
    { name: 'MariaDB', iconId: 'mariadb' },
    { name: 'PostgreSQL', iconId: 'postgresql' },
    { name: 'MongoDB', iconId: 'mongodb' },
    { name: 'DynamoDB', iconId: 'amazondynamodb' },
    { name: 'Redis', iconId: 'redis' },
  ],
  devops: [
    { name: 'Docker', iconId: 'docker' },
    { name: 'Kubernetes', iconId: 'kubernetes' },
    { name: 'AWS', iconId: 'amazonaws' },
    { name: 'Azure', iconId: 'microsoftazure' },
    { name: 'Bash', iconId: 'gnubash' },
    { name: 'Git', iconId: 'git' },
  ],
  tools: [
    { name: 'Kafka', iconId: 'apachekafka' },
    { name: 'RabbitMQ', iconId: 'rabbitmq' },
  ],
};
