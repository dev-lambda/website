import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type SectionContent = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

export type SectionParameters = {
  flip? : boolean;
}

export function Section({title, Svg, description, flip}: SectionContent & SectionParameters) {
  return (
    <section className={clsx(styles.section, 'row', {[styles.rowReverse]: flip})}>
      <div className={clsx('col--4', styles.right)}>
        <Svg className={styles.sectionSvg} role="img" />
      </div>
      <div className="col">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function HomepageSections({sections}: {sections: SectionContent[]}): JSX.Element {
  return (
    <div className="container margin-vert--lg">
      {sections.map((props, idx) => (
        <Section key={idx} flip={idx%2 === 1} {...props} />
      ))}
    </div>
  );
}