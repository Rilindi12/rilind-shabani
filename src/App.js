import logo from './Asset/RilindShabani.jpg';
import './App.css';
import Header from './Header/Header';
import TabButton from './TabButton/TabButton';
import file from './file/RilindShabaniResume.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header 
          image={logo}
          intro="Hi, I'm   "
          name="Rilind Shabani"
          description = "I am a 22-year-old living in Prishtina, Kosovo. Currently, I work as a front-end software developer and am actively seeking opportunities to further my learning and development in the technologies I am currently working with."
        />
          <section id='examples' className="buttonList">
              <TabButton link="https://github.com/Rilindi12" direction="_blank">GitHub</TabButton>
              <TabButton link="https://www.linkedin.com/in/rilind-shabani-6ba001299/" direction="_blank">LinkedIn</TabButton>
              <TabButton link={file} downloadFileName="RilindShabaniResume">Resume</TabButton>
          </section>

      </header>
    </div>
  );
}

export default App;
