import TopMenu from "./components/TopMenu/TopMenu"
import './Home.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/mira/theme.css'

function Home() {

  return (
    <div className="grid">
      <div className="col-12 min-w-min" >
        <TopMenu current="Home" />
      </div>
    </div>
  )
}

export default Home
