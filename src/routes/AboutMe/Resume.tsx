import './Resume.css'
import { Divider } from 'primereact/divider';

export default function Resume() {
  return (
    <div id="resumeContainer" className="flex flex-row surface-ground justify-content-center align-items-center align-content-around min-w-full">
      <div className="wf-resume flex flex-column bg-white min-h-screen p-3 md:p-6">
          <div id="PersonalInfo" className='flex flex-column gap-0 justify-content-start fadeinup animation-duration-1000 animation-iteration-1 animation-ease-in'>
            <h2 className='min-w-full m-0'>Wilson Fung</h2>
            <Divider className='p-0 mt-1 mb-1 border-2' type='solid' />
            <div className='flex flex-row justify-content-between text-sm'>
              <div>Burnaby, BC  V5A 2T9</div>
              <div>604-780-7876</div>
            </div>
            <div className='flex flex-row justify-content-between text-sm'>
            <a href='https://www.linkedin.com/in/wilson-sl-fung/'>www.linkedin.com/in/wilson-sl-fung/</a>
            <a href='mailto:wilson.sl.fung@gmail.com'>wilson.sl.fung@gmail.com</a>
            </div>
          </div>
          <div id='AboutMe' className='flex flex-column fadeinleft animation-delay-300 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
            <h4 className='mb-1'>Experienced Team / Technical Lead</h4>
            <h5 className='mt-1 mb-2'>Address Challenging Business Problems</h5>
            <p className='mt-2 mb-1 text-sm'>Goal-focused professional with proven effectiveness in achieving technical outcomes and motivating high productivity within teams. Maintain viable technical stacks, create proofs of concept verifying feasibility, coach junior staff, and guide developers through Agile activities. Employ open and direct communication, keeping people on track for delivery while consulting and managing expectations with stakeholders at all levels. </p>
            <p className='mt-1 mb-1 text-sm'>Area of Expertise include:</p>
            <h5 className='mt-1 mb-1'>Talent Development | Performance Management | Agile Methodology </h5>
          </div>
          <div id='Skills' className='fadeinright animation-delay-300 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
            <h4 className='mt-2 mb-1'>Technical / Technology Skills</h4>
            <ul className='text-sm pl-0 mt-1'>
              <li><span className='text-xl pr-2'>-</span><b className='pr-2'>Programming Languages & Framworks:</b>Golang, TypeScript, JavaScript, React, Node.js, Flutter, Java, Spring</li>
              <li className='flex flex-row pt-1'><span className='flex flex-column text-xl pr-2 min-w-min'>-</span><span><b className='pr-2'>Cloud Computing:</b>Amazon Web Services(AWS): Lambda, API Gateway, ECS, Batch, Cloudfront, SNS, RDS, Step Functions, IAM, Secret Manager</span></li>
              <li><span className='text-xl pr-2'>-</span><b className='pr-2'>Databases:</b>Postgresql, Mysql, AuroraDB</li>
              <li><span className='text-xl pr-2'>-</span><b className='pr-2'>APIs & Integration:</b>REST, Graphql</li>
              <li><span className='text-xl pr-2'>-</span><b className='pr-2'>DevOps & Collaboration:</b>Github, Jenkins, Jira, Confluence</li>
            </ul>
          </div>
          <div id='Experience'>
            <h4 className='mt-0 mb-2 fadeindown animation-delay-300 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>Professional Experience</h4>
            <div className='wf-experience flex flex-column '>   
              <div className='wf-company flex flex-row justify-content-between fadeindown animation-delay-300 animation-duration-500 animation-iteration-1 animation-ease-in animation-fill-both'><span><b>HSBC</b>, Vancouver, BC</span><span>2004-2024</span></div>
              <div className='wf-role text-sm mt-2 fadein animation-delay-500 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
                <div className='flex flex-row justify-content-between mb-1'>
                  <b>Senior Consultant</b>
                  <b className='mr-6'>2009-2024</b>
                </div>
                <p className='mt-0 mb-0'>
                  Led teams of 3 to 7 developers working on diverse project deliverables. Functioned as Agile coach and stakeholder communication lead.
                  <ul className='pl-3 mt-1 mb-1'>
                    <li>Kickstarted, led, and delivered 5+ different banking products, including 1 that received Digital CX Award in 2021.</li>
                    <li>Managed first team in HSBC Canada to adopt Agile, providing model that other teams subsequently followed.</li>
                    <li>Succeeded in putting first workload and production infrastructure on AWS, reducing server and infrastructure cost 50%+.</li>
                    <li>Assigned as solution architect for most projects, reducing project cost 1 team head count.</li>
                    <li>Mentored 10+ co-op students, with 3 hired by HSBC and 2 others offered permanent positions.</li>
                    <li>Seconded to HSBC US as team lead, securing 3 additional resource contracts for HSBC Canada based on performance.</li>
                    <li>Recognized and ranked as high performer for 13 years.</li>
                  </ul>
                </p>
              </div>
              <div className='wf-role text-sm mt-0 mb-1 fadein animation-delay-700 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
                <div className='flex flex-row justify-content-between mt-1 mb-1'>
                  <b>Consultant</b>
                  <b className='mr-6'>2005-2009</b>
                </div>
                <p className='mt-1 mb-0'>
                  Collaborated on and delivered global projects involving multiple team coordination across geographic locations / time zones with 5 to 7 direct reports.
                  <ul className='pl-3 mt-1 mb-1'>
                    <li>Wrote Spring emulation layer on top of bank’s internal framework that was adopted by other teams worldwide, speeding up adoption of Spring framework within HSBC.</li>
                    <li>Worked on and delivered Global View and Global Transfers products, enabling global account visibility and free account transfers for customers that positioned HSBC as global leader in personal banking.</li>
                    <li>Rated top performer in 2nd year and high performer for remaining years in role.</li>
                  </ul>
                </p>
              </div>
              <div className='wf-role text-sm mt-0 fadein animation-delay-700 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
                <div className='flex flex-row justify-content-between mb-1'>
                  <b>Senior Analyst</b>
                  <b className='mr-6'>2004-2005</b>
                </div>
                <p className='mt-1 mb-1'>
                  Supervised 3 to 5 developers implementing HSBC’s first single sign-on solution.
                </p>
              </div>
            </div>            
          </div>
          <div id='AdditionExperience' className='fadein animation-delay-700 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
            <h4 className='mt-2 mb-1'>Additional Experience</h4>
            <p className='mt-1 text-sm mb-2'><b>CONVERGYS</b>, Winnipeg, MB: <b>Supervisor - Reports, Technical Support Specialist</b></p>
          </div>
          <div id='Education' className='fadein animation-delay-700 animation-duration-1000 animation-iteration-1 animation-ease-in animation-fill-both'>
            <h4 className='mt-1 mb-1'>Education</h4>
            <p className='mt-1 text-sm'>- Software Systems Development, British Columbia Institute of Technology (BCIT), Vancouver, BC</p>
          </div>
      </div>
    </div>
  )
}