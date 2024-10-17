import { BlockTypeSelect, BoldItalicUnderlineToggles, codeBlockPlugin, CodeToggle, CreateLink, diffSourcePlugin, DiffSourceToggleWrapper, headingsPlugin, imagePlugin, InsertCodeBlock, InsertImage, InsertTable, InsertThematicBreak, linkDialogPlugin, linkPlugin, listsPlugin, ListsToggle, markdownShortcutPlugin, MDXEditor, MDXEditorMethods, quotePlugin, StrikeThroughSupSubToggles, tablePlugin, thematicBreakPlugin, toolbarPlugin, UndoRedo } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { Button } from 'primereact/button';
import { useRef, useState } from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownCreate() {

  const mdxEditorRef = useRef<MDXEditorMethods>(null)

  const [ markdown, setMarkdown ] = useState<string>('# Hello World')

  return (
    <div className='flex flex-column min-h-screen'>
      <MDXEditor ref={mdxEditorRef} className="flex-grow-1" markdown={markdown} plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), imagePlugin(), tablePlugin(), linkDialogPlugin(), linkPlugin(), markdownShortcutPlugin(), codeBlockPlugin(), 
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
              {/* <InsertCodeBlock /> */}
              <CodeToggle />
            </DiffSourceToggleWrapper>
          </>
        )
      })]} />
      <Button className='flex-grow-0' label='Convert' onClick={()=>{
        if (mdxEditorRef.current) {
          setMarkdown(mdxEditorRef.current.getMarkdown())
          console.log("state is set")
        } else {
          console.log("mdxeditorref is null")
        }
      }} />
      <Markdown className="p-component" remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  )
}