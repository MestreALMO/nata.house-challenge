import React from "react";
import { Container } from "./styles";
import { BiCameraMovie } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import { AnimationStarWars } from "../animationStarWars";

export const ButtonModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <button
          type="button"
          className="home-movie"
          onClick={openModal}
          data-tip="Click me to see this app plot"
        >
          <BiCameraMovie />
        </button>
        <ReactTooltip place="right" />

        {/* This is the modal code */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Plot Modal"
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button className="react-modal-close-button" onClick={closeModal}>
            <RiCloseFill />
          </button>
          <AnimationStarWars />
        </Modal>
      </Container>
    </>
  );
};
