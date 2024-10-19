import Logo from '../Logo/Logo'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import 'primeicons/primeicons.css';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import "./TopMenu.css"
import { useNavigate } from 'react-router-dom';

interface TopMenuProps {
  current?: string
}

export default function TopMenu({ current }: TopMenuProps) {

  let navigate = useNavigate();
  const logo = <Logo id="Logo" className="text-4xl lg:text-6xl pr-2 lg:pr-4" />
  const searchbox = (
    <IconField iconPosition="left">
      <InputIcon className="pi pi-search" />
      <InputText placeholder="Search" className="w-8rem sm:w-auto" />
    </IconField>
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
      icon: <SmartToyOutlinedIcon className='pr-2 text-3xl text-color-secondary' />,
      command: () => {
        navigate("/models")
      }
    },
    {
      label: "Keyboards",
      icon: <KeyboardAltOutlinedIcon className="pr-2 text-3xl text-color-secondary" />,
      command: () => {
        navigate("/keebs")
      }
    },
  ]

  if (current) {
    menuItems = menuItems.filter((item) => {
      return (item.label != current)
    })
  }

  return (
    <Menubar model={menuItems} start={logo} end={searchbox} className='wf-header pr-3 pl-3'/>
  )

}