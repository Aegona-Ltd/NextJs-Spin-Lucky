import { Drawer } from "antd";


interface ModalEditPrize {
  show: boolean,
  onClose: () => void
}

function ModalEditPrize(props: ModalEditPrize) {
  const { show, onClose } = props

  const handleCancel = () => {

  }

  return (
    <Drawer title="Edit Prizes" placement="right" onClose={onClose} open={show}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

export default ModalEditPrize;
