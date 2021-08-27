import { IconContext } from "react-icons"

const IconWrapper = ({ color, children }) => (
  <IconContext.Provider value={{ color: color }}>
    { children }
  </IconContext.Provider>
)

export default IconWrapper
