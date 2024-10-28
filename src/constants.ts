import ichs_logo from './assets/ichs_logo.png';
import mc_logo from './assets/mc_logo.png';
import umd_logo from './assets/umd_logo.png';
import hbs_logo from './assets/hbs_logo.png';
import angular_svg from './assets/angular.svg';
import react_svg from './assets/react.svg';
import scss_svg from './assets/scss.svg';
import typescript_svg from './assets/typescript.svg';
import javascript_svg from './assets/javascript.svg';
import nodejs_svg from './assets/nodejs.svg';
import git_svg from './assets/git.svg';
import stenciljs_svg from './assets/stencil.svg';
import cypress_svg from './assets/cypress.svg';

interface Tool {
    name: string;
    icon?: string;
    link?: string;
}

interface Education {
    school: string;
    logo?: string;
    alt?: string;
    major?: string;
    degree?: string;
    location?: string;
    tenure?: string;
}
export const tools: Tool[] = [
    {
        name: 'React',
        icon: react_svg,
        link: 'https://reactjs.org/learn'
    },
    {
        name: 'Angular',
        icon: angular_svg,
        link: 'https://angular.io/'
    },
    {
        name: 'StencilJS',
        icon: stenciljs_svg,
        link: 'https://stenciljs.com/'
    },
    {
        name: 'SCSS',
        icon: scss_svg,
        link: 'https://sass-lang.com/'
    },
    {
        name: 'TypeScript',
        icon: typescript_svg,
        link: 'https://www.typescriptlang.org/'
    },
    {
        name: 'JavaScript',
        icon: javascript_svg,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        name: 'Node.js',
        icon: nodejs_svg,
        link: 'https://nodejs.org/'
    },
    {
        name: 'Git',
        icon: git_svg,
        link: 'https://git-scm.com/'
    },

    {
        name: 'Cypress',
        icon: cypress_svg,
        link: 'https://www.cypress.io/'
    },
    {
        name: 'single-spa',
        link: 'https://single-spa.js.org/'
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
        tenure: '2018',
        location: 'Online'
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
        major: 'Caribbean Secondary Examination Certificate (CSEC)',
        degree: 'Diploma',
        logo: ichs_logo,
        location: "Kingston, Jamaica",
        tenure: '2013'
    },
];

export const jaFlagColors = [ 'black', 'green', 'gold' ];