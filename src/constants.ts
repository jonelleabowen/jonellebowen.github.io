import ichs_logo from './assets/ichs_logo.png';
import mc_logo from './assets/mc_logo.png';
import umd_logo from './assets/umd_logo.png';
import hbs_logo from './assets/hbs_logo.png';

interface Tool {
    name: string;
    icon: string;
    link?: string;
}

interface Education {
    school: string;
    logo?: string;
    alt?: string;
    major?: string;
    degree?: string;
    location?: string;
}
export const tools: Tool[] = [
    {
        name: 'React',
        icon: 'react',
        link: 'https://reactjs.org/learn'
    },
    {
        name: 'Angular',
        icon: 'angular',
        link: 'https://angular.io/'
    },
    {
        name: 'TypeScript',
        icon: 'typescript',
        link: 'https://www.typescriptlang.org/'
    },
    {
        name: 'JavaScript',
        icon: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        name: 'Node.js',
        icon: 'nodejs',
        link: 'https://nodejs.org/'
    },

    {
        name: 'Git',
        icon: 'git',
        link: 'https://git-scm.com/'
    },
    {
        name: 'StencilJS',
        icon: 'stenciljs',
        // link: 'https://git-scm.com/'
    },
    {
        name: 'Cypress',
        icon: 'cypress',
        // link: 'https://git-scm.com/'
    },
    {
        name: 'single-spa',
        icon: 'single-spa',
        // link: 'https://git-scm.com/'
    },
]

export const eduEntry: Education[] = [
    {
        school: 'University of Maryland, College Park',
        major: 'Computer Science',
        degree: 'BSc',
        logo: umd_logo,
        alt: 'University of Maryland logo',
        location: 'Maryland, USA',
        tenure: '2015-2018'
    },
    {
        school: 'Harvard Business School (online)',
        major: 'Business Analytics, Economics for Managers, Financial Accounting',
        degree: 'Credential of Readiness',
        logo: hbs_logo,
        alt: 'Harvard logo',
        tenure: '2018'
    },
    {
        school: 'Montgomery College, Rockville',
        major: 'Computer Science and Technologies',
        degree: 'Associate\'s Degree',
        logo: mc_logo,
        alt: 'Montgomery College logo',
        location: 'Maryland, USA',
        tenure: '2013-2015'
    },
    {
        school: 'Immaculate Conception High School',
        degree: 'Diploma',
        logo: ichs_logo,
        src: 'Immaculate logo',
        location: "Kingston, Jamaica",
        tenure: '2013'
    },
];