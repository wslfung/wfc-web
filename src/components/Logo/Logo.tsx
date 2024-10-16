import "./Logo.css"

interface LogoProps {
  id?: string
  size?: string
}

const defaultProps: LogoProps = {
  id: "Logo",
  size: "text-xl"
}

function Logo(props = defaultProps) {
  return (
    <span id={props.id} className={"wf-logo " + props.size} aria-label="wilsonfung.com">w.f.</span>
  )

}

export default Logo