import { Container } from "./styles";
import Crawl from "react-star-wars-crawl";
import "react-star-wars-crawl/lib/index.css";

export const AnimationStarWars = () => {
  return (
    <>
      <Container>
        <Crawl
          title="Episode I"
          subTitle="Nata.house"
          text="It is a period of difficult times. Pandemic has fallen over the world. The developer André Lusegardis is in search of a new job, the Nata.house company has challenged his skills to see if he fits the job. In this pursuit André codes this application in hope to meet what is required, now the next step is to wait for the aproval of the company…"
        />
      </Container>
    </>
  );
};
