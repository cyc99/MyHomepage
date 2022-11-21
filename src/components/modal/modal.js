import React from "react";
import "./css/modal.css";
import { ModalGrid } from "./css/modal_style";

function Modal(props) {
  const { closeModal, zIndex, firstBtn, secondBtn } = props;
  const z = zIndex ? zIndex : 130;
  return (
    <div className="modal" style={{ zIndex: z }} onClick={closeModal}>
      <div
        className="modalBody"
        style={{ ...props.style, zIndex: z }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalGrid>
          <div id="title">{props.title}</div>
          <div id="closeBtn" style={{ zIndex: z }} onClick={closeModal}>
            ✖
          </div>
          {!firstBtn && !secondBtn && <div id="content">{props.children}</div>}
          {firstBtn && !secondBtn && (
            <>
              <div id="contentBtn">{props.children}</div>
              <div id="btn">
                <div
                  id="oneBtn"
                  style={firstBtn.style}
                  onClick={firstBtn.event}
                >
                  {firstBtn.value}
                </div>
              </div>
            </>
          )}
          {firstBtn && secondBtn && (
            <>
              <div id="contentBtn">{props.children}</div>
              <div id="btn">
                <div
                  id="firstBtn"
                  style={firstBtn.style}
                  onClick={firstBtn.event}
                >
                  {firstBtn.value}
                </div>
                <div
                  id="secondBtn"
                  style={secondBtn.style}
                  onClick={secondBtn.event ? secondBtn.event : closeModal}
                >
                  {secondBtn.value}
                </div>
              </div>
            </>
          )}
        </ModalGrid>
      </div>
    </div>
  );
}

export default Modal;
