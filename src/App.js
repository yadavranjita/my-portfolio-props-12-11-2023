import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App=()=> {
  const projectsData = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    // Add more projects as needed
  ];
  return (
    <div>
      <Header name="Your Name" bio="Web Developer" />
      <About aboutText="I am a passionate web developer with a focus on React.js."/>
      <Projects projects={projectsData}/>
      <Contact email="your.email@example.com" phone="123-456-7890"/>
      <Footer name="Software Company"/>
    </div>
  );
}

export default App;
