import React from 'react';
// import ReactMarkdown from 'react-markdown';
import { SectionContent } from '@site/src/components/Section';
import Translate, {translate} from '@docusaurus/Translate';

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

const services = [
  {service: 'architect', image: require(`@site/static/img/Blueprint.svg`)},
  {service: 'legacy', image: require(`@site/static/img/Milestones of business projects.svg`)},
  {service: 'roadmap', image: require(`@site/static/img/Server technician adjusting wiring.svg`)},
  {service: 'cloud', image: require(`@site/static/img/Server technician adjusting wiring.svg`)},
  {service: 'codeReview', image: require(`@site/static/img/Software Developer.svg`)},
  {service: 'training', image: require(`@site/static/img/Student Discussing in library.svg`)},
  {service: 'automation', image: require(`@site/static/img/Cool Robot.svg`)},
  {service: 'recruitment', image: require(`@site/static/img/User research.svg`)},
];

export const Sections: SectionContent[] = services.map(({service, image}) => {
  return {
    title: translate({id: `content.serviceOffering.${service}.title`}),
    Svg: image.default,
    description: (<Translate id={`content.serviceOffering.${service}.description`}/>),
  };
});