import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Banner() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Спасибо!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Наш специалист перезвонит вам в ближайшее время</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Banner;
