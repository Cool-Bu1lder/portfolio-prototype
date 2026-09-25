import GitHubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import MailIcon from '@assets/icons/mail.svg';

export const SITE_NAME = 'DANIEL WILLOUGHBY';
export const FULL_NAME = 'Daniel Willoughby';
export const ROLE = 'Software Developer';
export const LOCATION = 'Brisbane, AU';
export const EMAIL = `ddwilloughby@gmail.com`;
export const GITHUB = 'https://github.com/Cool-Bu1lder';
export const SOCIAL_LINKS = [
  { name: 'Email', href: 'mailto:' + EMAIL, icon: MailIcon },
  { name: 'GitHub', href: GITHUB, icon: GitHubIcon },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daniel-willoughby-ab39982a7/',
    icon: LinkedInIcon,
  },
];
const base = import.meta.env.BASE_URL;
export const NAV_LINKS = [
  { label: 'Home', href: `${base}/` },
  { label: 'Projects', href: `${base}/projects` },
  { label: 'Blog', href: `${base}/blog` },
];
