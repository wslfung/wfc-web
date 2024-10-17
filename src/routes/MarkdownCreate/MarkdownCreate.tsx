import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, CreateLink, diffSourcePlugin, DiffSourceToggleWrapper, headingsPlugin, imagePlugin, InsertImage, InsertTable, InsertThematicBreak, linkDialogPlugin, linkPlugin, listsPlugin, ListsToggle, markdownShortcutPlugin, MDXEditor, MDXEditorMethods, quotePlugin, StrikeThroughSupSubToggles, tablePlugin, thematicBreakPlugin, toolbarPlugin, UndoRedo } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { Button as PRButton } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import React, { useRef, useState } from 'react'
import Markdown, { ExtraProps } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import './MarkdownCreate.css'

export default function MarkdownCreate() {

  const mdxEditorRef = useRef<MDXEditorMethods>(null)

  const [ markdown, setMarkdown ] = useState<string>(`# Hello World

[google](https://www.google.com "google")





* [x] dfsdfsdf
* [ ] dfsdf`)

  return (
    <div className='flex flex-column min-h-screen'>
      <MDXEditor ref={mdxEditorRef} className="flex-grow-1" markdown={markdown} plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), imagePlugin(), tablePlugin(), linkDialogPlugin(), linkPlugin(), markdownShortcutPlugin(), 
      diffSourcePlugin({
        viewMode: 'rich-text'
      }),
      toolbarPlugin({
        toolbarContents: () => (
          <>
            {' '}
            <DiffSourceToggleWrapper>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <StrikeThroughSupSubToggles />
              <BlockTypeSelect />
              <ListsToggle />
              <CreateLink />
              <InsertImage />
              <InsertTable />
              <InsertThematicBreak />
              <CodeToggle />
            </DiffSourceToggleWrapper>
          </>
        )
      })]} contentEditableClassName='p-component wf-markdown' />
      <PRButton link className='flex-grow-0' label='Convert' onClick={()=>{
        if (mdxEditorRef.current) {
          setMarkdown(mdxEditorRef.current.getMarkdown())
          console.log("state is set")
        } else {
          console.log("mdxeditorref is null")
        }
      }} />
      <Markdown className='p-component wf-markdown' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
        a: (props: JSX.IntrinsicElements["a"] & ExtraProps) => {
          const {children, node, ...rest} = props
          if (React.isValidElement(children)) {
            return (
              <PRButton link onClick={()=> window.open(rest['href'], '_blank')}>{children}</PRButton>
            )  
          } else {
            return (
              <PRButton link label={children?children.toString():''} onClick={()=> window.open(rest['href'], '_blank')} />
            )  
          }
        },
        input: (props: JSX.IntrinsicElements["input"] & ExtraProps) => {
          const {children, node, ...rest} = props
          return (
            <Checkbox value={children} checked={rest["checked"]?rest["checked"]:false} disabled />
          )
        }
      }}>{markdown}</Markdown>
    </div>
  )
}