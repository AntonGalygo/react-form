import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormData from './FormData';
import Banner from './Banner';

function Example() {
  const [show, setShow] = useState(false);
  const [sumb, setSumb] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => setSumb(true);

  return (
    <>
      <div id='cont' className='container'>
        <Button variant='primary' onClick={handleShow}>
          Оставить заявку
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Заполните контактные данные</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormData handle={handleClose} sumb={handleSubmit} />
          </Modal.Body>
        </Modal>

        {sumb && <Banner />}
      </div>
    </>
  );
}

export default Example;
