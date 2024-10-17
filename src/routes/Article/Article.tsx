import { useMatch, useParams } from "react-router-dom"
import "./Article.css"

export default function Article() {

  let { articleId } = useParams();
  let keebMatch = useMatch("/keebs/*")
  let modelMatch = useMatch("/models/*")

  return (
    <div>
    <div>keeb:{keebMatch?"true":"false"}</div>
    <div>model:{modelMatch?"true":"false"}</div>
    <div>{articleId}</div>
    </div>
  )
}