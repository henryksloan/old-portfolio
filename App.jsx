import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './resume.json'

class ContactInfo extends React.Component {
  render() {
    return (
      <div id='contact-info'>
        <p>{Resume.basics.location.region}, {Resume.basics.location.countryCode}</p>
        <a href={"mailto:" + Resume.basics.email}>{Resume.basics.email}</a>
      </div>
    );
  }
}

class ProfileLinks extends React.Component {
  render() {
    return (
      <ul className='profiles'>
        <li>
          <a className="fa fa-github" href={Resume.basics.profiles[0].url}></a>
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

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div id="main">
          <h1>About</h1>
          <hr />
          <p>{Resume.basics.summary}</p>
        </div>
      </div>);
  }
}

export default App;
