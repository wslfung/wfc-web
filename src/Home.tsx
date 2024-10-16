import TopMenu from "./components/TopMenu/TopMenu"
import { Card } from 'primereact/card';
import './Home.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/mira/theme.css'

function Home() {

  return (
    <div id="Home" className="flex flex-column max-h-screen overflow-hidden">
      <div className="min-w-min flex-none top-0 border-none" >
        <TopMenu current="Home" />
      </div>
      <div id="Content" className="flex-grow-1 flex surface-600 max-h-full overflow-hidden">
        <Card className="m-4 overflow-auto flex-grow-1 max-h-full">
          <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
        </Card>
      </div>
    </div>
  )
}

export default Home
