import Popup from '@client/components/popup'
import Overlay from '../overlay'

const PopupModal = ({ isOpen, onDismissRequest, children, bg = 'white' }) => {
  return isOpen
    ? (
      <Overlay onRequestClose={onDismissRequest}>
        <Popup bg={bg}>
          {children}
        </Popup>
      </Overlay>
      )
    : <div />
}

export default PopupModal
