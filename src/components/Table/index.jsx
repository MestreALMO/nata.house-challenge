import { Container } from "./styles";

import { useInput } from "../../context/InputContext";
import { useApi } from "../../context/ApiContext";

export const Table = () => {
  const { inputData } = useInput();
  const { apiData } = useApi();

  //Converting API's MGLT
  const toHours = (speed) => {
    const split = speed.split(" ");
    switch (split[1]) {
      case "day":
      case "days":
        return split[0] * 24;
      case "week":
      case "weeks":
        return split[0] * 168;
      case "month":
      case "months":
        return split[0] * 730;
      case "year":
      case "years":
        return split[0] * 8760;
      default:
        return 0;
    }
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Spaceship</th>
            <th>MGLT</th>
            <th>Consumables (hours)</th>
            <th>Minimum Restock Stops</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((info) => (
            <tr key={info.name}>
              <td>{info.name}</td>
              <td>{info.MGLT}</td>
              <td>{toHours(info.consumables)}</td>
              <td>
                {Math.floor(
                  inputData / (info.MGLT * toHours(info.consumables))
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
