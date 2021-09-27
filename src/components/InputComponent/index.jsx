import { Container } from "./styles";
import { RiPinDistanceFill } from "react-icons/ri";

import { useInput } from "../../context/InputContext";

export const Input = () => {
  const { setInputData } = useInput();

  return (
    <Container>
      <input
        name="input"
        type="number"
        placeholder="MGLT distance"
        min="0"
        onChange={(e) => setInputData(e.target.value)}
      />
      <RiPinDistanceFill />
    </Container>
  );
};
