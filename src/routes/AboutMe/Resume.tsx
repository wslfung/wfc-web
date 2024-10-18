import './Resume.css'
import { Divider } from 'primereact/divider';

export default function Resume() {
  return (
    <div id="resumeContainer" className="flex flex-row surface-ground justify-content-center align-items-center align-content-around min-w-full">
      <div className="wf-resume flex flex-column bg-white min-h-screen p-6">
          <div id="PersonalInfo" className='flex flex-column gap-0 justify-content-start fadeinup animation-duration-1000 animation-iteration-1 animation-ease-in'>
            <h2 className='min-w-full m-0'>Wilson Fung</h2>
            <Divider className='p-0 mt-1 mb-1 border-2' type='solid' />
            <div className='flex flex-row justify-content-between'>
              <div>Burnaby, BC  V5A 2T9</div>
              <div>604-780-7876</div>
            </div>
            <a href='https://www.linkedin.com/in/wilson-sl-fung/'>www.linkedin.com/in/wilson-sl-fung/</a>
            <a href='mailto:wilson.sl.fung@gmail.com'>wilson.sl.fung@gmail.com</a>
          </div>
          <div id='AboutMe' className='flex flex-column fadeinleft animation-delay-400 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
            <h4 className='mb-1'>Experienced Team / Technical Lead</h4>
            <h5 className='mt-2 mb-2'>Address Challenging Business Problems</h5>
            <p className='text-sm'>Goal-focused professional with proven effectiveness in achieving technical outcomes and motivating high productivity within teams. Maintain viable technical stacks, create proofs of concept verifying feasibility, coach junior staff, and guide developers through Agile activities. Employ open and direct communication, keeping people on track for delivery while consulting and managing expectations with stakeholders at all levels. </p>
            <p className='mt-1 mb-1 text-sm'>Area of Expertise include:</p>
            <h5 className='mt-1 mb-1'>Talent Development | Performance Management | Agile Methodology </h5>
          </div>     
      </div>
    </div>
  )
}