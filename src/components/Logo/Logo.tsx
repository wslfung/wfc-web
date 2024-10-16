import "./Logo.css"

interface LogoProps {
  id?: string
  className?: string
}

const defaultProps: LogoProps = {
  id: "Logo",
  className: "text-xl pr-2 lg:pr-4"
}

function Logo(props = defaultProps) {
  return (
    <span id={props.id} className={"wf-logo " + props.className} aria-label="wilsonfung.com">w.f.</span>
  )

}

export default Logo