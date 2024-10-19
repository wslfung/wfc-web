
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';



export default function WFStandardPageFooter() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-row justify-content-end min-w-full pt-0 pb-2 pr-2 md:pr-6 surface-700'>
      <span className=''>
        <Button className='text-sm lg:text-base' text icon='pi pi-book text-lg lg:text-2xl' label='Resume' onClick={()=>{navigate('/me/resume')}} />
        <Button className='text-sm lg:text-base' text icon='pi pi-linkedin text-lg lg:text-2xl' label='Linkedin' onClick={()=>{window.open('https://www.linkedin.com/in/wilson-sl-fung/', '_blank')}} />
      </span>
    </div>
  )
}