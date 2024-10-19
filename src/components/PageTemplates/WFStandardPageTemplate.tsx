import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import TopMenu from "../TopMenu/TopMenu";
import WFStandardPageFooter from "../Footer/WFStandardPageFooter";

interface WFS_PageTemplateProps {
    pageTitle: string
    currentPage: string
}

export default function WFStandardPageTemplate(props: PropsWithChildren<WFS_PageTemplateProps>) {
  return (
    <div id='Header' className="flex flex-column min-h-screen max-h-screen overflow-hidden">
      <Helmet>
        <title>{props.pageTitle}</title>
      </Helmet>
      <div className="min-w-min flex-none top-0 border-none" >
        <TopMenu current={props.currentPage} />
      </div>
      <div id="Content" className="flex-grow-1 flex surface-700 max-h-full overflow-hidden">
          {props.children}
      </div>
      <div id='Footer' className="flex flex-row flex-grow-0">
        <WFStandardPageFooter />
      </div>
    </div>

    )
}