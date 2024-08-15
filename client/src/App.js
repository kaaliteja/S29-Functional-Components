
import './App.css';
import Player from './components/Player';

function App() {
  return (
      
    <div className="ipl">
    <h1>Favourite Players</h1>
     <div className='playerDiv'>
      <img src='./images/nitish.webp'></img>
      <h2>Name:Nitish Kumar Reddy</h2>
      <h2>Team:SRH</h2>
      <h2>Role:All-Rounder</h2>
     </div>
     <div className='playerDiv1'>
      <img src='./images/tilak.webp'></img>
      <h2>Name:Tilak Varma</h2>
      <h2>Team:MI</h2>
      <h2>Role:Batter</h2>
     </div>
     <Player name='Shubhman Gill' team='GT' role='Batter' pic="./images/gill.webp" alt=''></Player>
     <Player name='Rinku Singh' team='KKR' role='Batter' pic="./images/Rinku.webp" alt=''></Player>
     <Player name=' Mohammad Shami' team='GT' role='Bowler' pic="./images/shami.webp" alt=''></Player>
     <Player name='Bhuvaneswar' team='SRH' role='Bowler' pic="./images/b kumar.webp" alt=''></Player>
     <Player name='Ruthuraj Gaikwad' team='CSK' role='Batter' pic="./images/gaikwad.webp" alt='' ></Player>
     <Player name='Yashasvi Jaiswal' team='RR' role='Batter' pic="./images/jaiswal.webp" alt=''></Player>
     <Player name='Shreyas Iyer' team='KKR' role='Batter' pic="./images/iyer.webp" alt=''></Player>
     <Player name='Rishabh Pant' team='DD' role='Batter,Wicket Keeper' pic="./images/pant.webp" alt=''></Player>
     <Player name='Arshadeep Singh' team='PBKS' role='Bowler' pic="./images/singh.webp" alt=''></Player>
    </div>
  );
}

export default App;
