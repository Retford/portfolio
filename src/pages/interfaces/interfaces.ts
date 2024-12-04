export interface Technology {
  icon: JSX.Element;
  name:
    | 'Postman'
    | 'React'
    | 'StoryBook'
    | 'Styled-Components'
    | 'TailwindCSS'
    | 'JavaScript'
    | 'Bitbucket'
    | 'CSS3'
    | 'Git'
    | 'HTML5'
    | 'Jira'
    | 'WordPress'
    | 'TypeScript'
    | 'Testing-Library'
    | 'MySQL'
    | 'NextJS';
}

export interface SocialNetwork {
  icon: JSX.Element;
  url: string;
  name: 'LinkedIn' | 'Github' | 'Twitter' | 'Instagram' | 'Facebook';
}

export interface Project {
  imageUrl: string;
  title: string;
  desc: string;
  icons: Technology[];
}
