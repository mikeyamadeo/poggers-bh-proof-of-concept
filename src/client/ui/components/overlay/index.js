import Overlay from '@client/modules/overlay'

const Main = ({ onRequestClose, children }) => (
  <Overlay bg='slateGray' blur='2px' onClick={onRequestClose}>
    {children}
  </Overlay>
)

export default Main
