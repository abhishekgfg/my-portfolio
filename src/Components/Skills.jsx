import React from 'react';
import '/src/Skills.css';

function Skills() {
  const skillsData = [
    { skill: 'c++', level: 90 },
    { skill: 'java', level: 85 },
    { skill: 'Oops', level: 95 },
    { skill: 'React', level: 75 },
    { skill: 'SQL', level: 85 },
    { skill: 'DSA', level: 80 },
    { skill: 'HTML', level: 85 },
    { skill: 'css', level: 85 },
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-header">
              <h3>{skill.skill}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-inner"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
