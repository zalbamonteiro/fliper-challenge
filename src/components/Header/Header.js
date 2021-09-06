import { HeaderStyle } from "./HeaderStyle"
import logo from "../../assets/img/logo.png"
import { HeaderUser } from "./HeaderUser"

export const Header = () => (
  <HeaderStyle>
    <div className="header__logo">
      <h1>
        <img src={logo} alt="Logo pliper" title="Logo pliper" />
      </h1>
    </div>
    <HeaderUser />
  </HeaderStyle>
)
