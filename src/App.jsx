import { useEffect, useState } from "react";

import { Container } from "./styles/home";
import { Input } from "./components/InputComponent";
import InputProvider from "./context/InputContext";
import ApiProvider from "./context/ApiContext";
import { Table } from "./components/Table";
import { ButtonModal } from "./components/buttonModal";
import Modal from "react-modal";

//code for the modal
Modal.setAppElement("#root");

function App() {
  //page
  return (
    <InputProvider>
      <ApiProvider>
        <Container>
          <div className="home-width">
            <ButtonModal />

            <h1>Star Wars</h1>
            <h2>Spaceship Info</h2>

            <p>
              Input the distance in MGLT and see the minimum restock stops
              needed before reaching it's destination.
            </p>

            <Input />

            <Table />
          </div>
        </Container>
      </ApiProvider>
    </InputProvider>
  );
}

export default App;
