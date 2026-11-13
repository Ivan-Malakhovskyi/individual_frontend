import { GameSearch } from "../components/GameSearch";
import GamesList from "../components/GamesList";
import { games } from "../dataSeed/games";

const GamesPage = () => {
  const handleSubmit = e => {
    console.log(e);
  };
  return (
    <>
      <GameSearch game={games} getByQuery={handleSubmit} />
      <GamesList filtered={games} />;
    </>
  );
};

export default GamesPage;
