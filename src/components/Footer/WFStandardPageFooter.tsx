
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';



export default function WFStandardPageFooter() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-row justify-content-end min-w-full pt-0 pb-2 pr-3 md:pr-6 surface-700'>
      <span className=''>
        <Button link onClick={()=>{navigate('/me/resume')}}><span className='wf-footer-icon pi pi-book text-4xl p-2 pt-0 text-color-secondary' /><span className='wf-footer-text'>Resume</span></Button>
        <Button link onClick={()=>{window.open('https://www.linkedin.com/in/wilson-sl-fung/', '_blank')}}><span className='wf-footer-icon pi pi-linkedin text-4xl p-2 pt-0 text-color-secondary' /><span className='wf-footer-text'>Linkedin</span></Button>
      </span>
    </div>
  )
}