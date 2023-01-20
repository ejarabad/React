import './App.css'
import TwitterFollowCard from './TwitterFollowCard';

export const App = () => {

  const users = [
    {
      userName: "ejarabad",
      name: "Ernesto Jaraba",
      isFollowing: true,
    },
    {
      userName: "AlvaroRuiz1126",
      name: "Alvaro Ruiz Atala",
      isFollowing: false,
    },
  ];
  
  return (
    <section className="App">
      {
        users.map(({userName, name, i, isFollowing}) => (
          <TwitterFollowCard key={i} userName={userName} initialIsFollowing={isFollowing} >{name}</TwitterFollowCard>
        ))
      }
    </section>
  );
}

