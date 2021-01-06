import logo from './logo.svg';
import './App.css';
import First from './my-components/First';
import Second from './my-components/Second';
import ClassOne from './my-components/ClassOne';
import ClassTwo from './my-components/ClassSecond';


function App() {
  return (
    <div className="App">
      <First name='This is the first functional component'></First>
      <Second name='This is the second functional componenets'></Second>
      <ClassOne age='I am 24 years old'></ClassOne>
      <ClassTwo address='I live in Uttara-10'></ClassTwo>

    </div>
  );
}

export default App;
