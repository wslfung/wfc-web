import Logo from '../Logo/Logo'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import "./TopMenu.css"
import { useNavigate } from 'react-router-dom';

interface TopMenuProps {
  current?: string
}

export default function TopMenu({current}:TopMenuProps) {

  let navigate = useNavigate();
  const logo = <Logo id="Logo" size="text-4xl lg:text-6xl" />
  const searchbox = (
    <div id="topMenu" className="flex align-items-center gap-2">
        <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
    </div>
  );
  let menuItems = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/")
      }
    },
    {
      label: "Models",
      icon: <SmartToyOutlinedIcon />,
      command: () => {
        navigate("/models")
      }
    },
    {
      label: "Keyboards",
      icon: <KeyboardAltOutlinedIcon />,
      command: () => {
        navigate("/keebs")
      }
    },
    {
      label: "About me",
      icon: "pi pi-user",
      command: () => {
        navigate("/me")
      }
    }
  ]

  if (current) {
    menuItems = menuItems.filter((item) => {
      return (item.label != current)
    })
  }

  return (
    <Menubar id="TopMenu" model={menuItems} start={logo} end={searchbox}/>
  )

}