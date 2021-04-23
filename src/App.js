import './App.css';
import Profile from './profile/Profile';


function App() {
 
  const fullName='Samar Ben Zeineb';
  const bio = 'I am a student Full Stack JS in Go My Code';
  const profession='Student';
  const handleName = fullName =>{ alert(`Welcome to ${fullName} profile`);}

const styleObject={color:"black",textAlign:"center"}

  return (

    <div  className="profile" style={styleObject}>


<Profile handleName={handleName} fullName={fullName} bio={bio} profession={profession}> <img className="photo" src="/samar.jpg" alt="photo"/>
</Profile>

  </div>
  );
  }
  export default App;
