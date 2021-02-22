//1. IMPORTACIONES
import './App.css';
import './components/Details'
import './components/Header'
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';

//2. FUNCIONES
function App() {
  return (
    //JSX => FORMATO EN EL CUAL MEZCLA DE JS CON HTML SIMILAR A LA COMILLA MARAVILLA
    <div>
        <div className="cover">
            <Header />
            <Main />
        </div>
  
      <div className="bootom">
          <Features 
          title="Delarative" 
          description="React makes it painless to create interactive Uls."
          image="images/icon1.png"
          colNum="1"
          />
          <Features
          title="Components" 
          description="Build encapsulated components that manage their state."
          image="images/icon2.png"
          colNum="2"
          />
          <Features
          title="Single-Way" 
          description="A set of immutable values are passed to the component's."
          image="images/icon3.png"
          colNum="3"
          />
          <Features
          title="JSX" 
          description="Statically-typed, designed to run on modern browser."
          image="images/icon4.png"
          colNum="4"
          />
      </div>
    </div>
  );
}

//3. EXPORTACIÓN
export default App;
