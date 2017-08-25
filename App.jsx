import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './resume.json'

class ContactInfo extends React.Component {
  render() {
    return (
      <div id='contact-info'>
        <i className='fa fa-location-arrow text-icon' />
        <p>{Resume.basics.location.region}, {Resume.basics.location.countryCode}</p>
        <br />
        <i className='fa fa-envelope text-icon' />
        <a href={'mailto:' + Resume.basics.email}>{Resume.basics.email}</a>
      </div>
    );
  }
}

class ProfileLinks extends React.Component {
  render() {
    return (
      <ul className='profiles'>
        <li>
          <a className='fa fa-github' href={Resume.basics.profiles[0].url} />
        </li>
      </ul>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidenav'>
        <div className='image-circle'>
          <img src={Resume.basics.picture} />
        </div>
        <div>
          <h1>{Resume.basics.name}</h1>
          <h3>{Resume.basics.label}</h3>
          <hr />
            <ContactInfo />
          <hr />
            <ProfileLinks />
          <hr />
        </div>
      </div>);
  }
}

class Section extends React.Component {
  render() {
    var icon = this.props.icon;
    if (icon) {
      icon = <i className={'fa ' + icon + ' text-icon'} />;
    }
    else {
      icon = null;
    }
    return (
      <div className='section'>
        <h1>
          {icon}
          {this.props.name}
        </h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

class AboutSection extends React.Component {
  render() {
    return (
      <Section name='About' icon='fa-user'>
        <p>{Resume.basics.summary}</p>
      </Section>
    );
  }
}

class SkillsSection extends React.Component {
  render() {
    var skills = [];
    Resume.skills.forEach(function(skill, index) {
      skills.push(
        <div className='skill' key={index}>
          <h3>{skill.name}</h3>
          <p>{skill.keywords.join(', ')}</p>
        </div>);
    });

    return (
      <Section name='Skills' icon='fa-cog'>
        {skills}
      </Section>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div id='main'>
          <AboutSection />
          <SkillsSection />
        </div>
      </div>);
  }
}

export default App;
