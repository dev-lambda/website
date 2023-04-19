import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SectionContent } from '@site/src/components/Section';

// Expert software architecture consulting
// Get personalized advice and guidance on designing scalable and efficient software systems that align with your business goals.

// Modernization of legacy systems
// Transform outdated technologies into modern, microservice-oriented architectures to improve scalability, maintainability, and performance.

// Strategic technical roadmap development
// Plan for future growth with a customized roadmap that outlines key technology initiatives to support your long-term business objectives.

// Cloud migration and deployment expertise
// Seamlessly migrate your applications to the cloud and optimize them for scalability, reliability, and cost-effectiveness using industry-leading technologies.

// Code review and optimization
// Enhance the quality and performance of your codebase through thorough code reviews and expert recommendations for refactoring and optimization.

// Customized technical training and mentoring
// Empower your development teams with tailored training and mentoring programs to upskill their capabilities and stay updated with the latest best practices.

// DevOps and automation solutions
// Streamline your software development and deployment processes with automated DevOps practices, including continuous integration, continuous delivery, and infrastructure as code.


// <ReactMarkdown children={`
// Get personalized advice and guidance on designing scalable and efficient software systems that align with your business goals.

// - Expert software architecture consulting:
// - Initial assessment of current software architecture and business goals
// - In-depth analysis of technical requirements, scalability, and performance
// - Customized recommendations for improving software architecture
// - Collaborative discussions with the development team to align on architecture changes
// - Ongoing monitoring and support to ensure successful implementation.
// `}>
// </ReactMarkdown>


// <ReactMarkdown children={`
// Transform outdated technologies into modern, microservice-oriented architectures to improve scalability, maintainability, and performance.

// - Comprehensive analysis of existing legacy systems and technologies
// - Identification of outdated components and potential risks
// - Development of a modernization strategy and roadmap
// - Implementation of modern, microservice-oriented architectures
// - Testing, validation, and deployment of the modernized system
// - Post-deployment monitoring and support for smooth transition
// `}>
// </ReactMarkdown>
export const Sections: SectionContent[] = [
  {
    title: 'Expert software architecture consulting',
    Svg: require('@site/static/img/Blueprint.svg').default,
    description: (
      <>
        Get personalized advice and guidance on designing scalable and efficient software systems that align with your business goals.
      </>
    ),
  },
  {
    title: 'Modernization of legacy systems',
    Svg: require('@site/static/img/Middleware.svg').default,
    description: (
      <>
        Transform outdated technologies into modern, microservice-oriented architectures to improve scalability, maintainability, and performance.
      </>
    ),
  },
  {
    title: 'Strategic technical roadmap development',
    Svg: require('@site/static/img/Milestones of business projects.svg').default,
    description: (
      <>
        Plan for future growth with a customized roadmap that outlines key technology initiatives to support your long-term business objectives.
      </>
    ),
  },
  {
    title: 'Cloud migration and deployment expertise',
    Svg: require('@site/static/img/Server technician adjusting wiring.svg').default,
    description: (
      <>
        Seamlessly migrate your applications to the cloud and optimize them for scalability, reliability, and cost-effectiveness using industry-leading technologies.
      </>
    ),
  },
  {
    title: 'Code review and optimization',
    Svg: require('@site/static/img/Software Developer.svg').default,
    description: (
      <>
        Enhance the quality and performance of your codebase through thorough code reviews and expert recommendations for refactoring and optimization.
      </>
    ),
  },
  {
    title: 'Customized technical training and mentoring',
    Svg: require('@site/static/img/Student Discussing in library.svg').default,
    description: (
      <>
        Empower your development teams with tailored training and mentoring programs to upskill their capabilities and stay updated with the latest best practices.
      </>
    ),
  },
  {
    title: 'DevOps and automation solutions',
    Svg: require('@site/static/img/Cool Robot.svg').default,
    description: (
      <>
        Streamline your software development and deployment processes with automated DevOps practices, including continuous integration, continuous delivery, and infrastructure as code.
      </>
    ),
  },
  {
    title: 'Team recruitment and talent acquisition',
    Svg: require('@site/static/img/User research.svg').default,
    description: (
      <>
        Access our extensive network of industry professionals and let us help you find the right talent for your software development team, ensuring a skilled and cohesive workforce.
      </>
    ),
  },
];
