import "./App.css";
import Profile from "./Profile/Profile";
import profileImage from "./Photo.jpg";

function App() {
  const fullName = "Mohamed Ali Bouchnak";
  const bio =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dolorum repellat minima natus! Dicta corporis ad fugit quidem ipsam a vitae aut accusantium provident nulla. Blanditiis eligendi neque sit quam.";
  const Profession = "Engineer";
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName={fullName} Bio={bio} profession={Profession}>
          <img style={{width:600 ,borderRadius:500}} src={profileImage} alt="Profile" />
        </Profile>
      </header>
    </div>
  );
}

export default App;
