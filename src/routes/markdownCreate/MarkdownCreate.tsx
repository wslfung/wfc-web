import { BlockTypeSelect, BoldItalicUnderlineToggles, codeBlockPlugin, CodeToggle, CreateLink, diffSourcePlugin, DiffSourceToggleWrapper, headingsPlugin, imagePlugin, InsertCodeBlock, InsertImage, InsertTable, InsertThematicBreak, linkDialogPlugin, linkPlugin, listsPlugin, ListsToggle, markdownShortcutPlugin, MDXEditor, MDXEditorMethods, quotePlugin, StrikeThroughSupSubToggles, tablePlugin, thematicBreakPlugin, toolbarPlugin, UndoRedo } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { useRef } from 'react'

export default function MarkdownCreate() {

  const mdxEditorRef = useRef<MDXEditorMethods>(null)

  return (
    <MDXEditor ref={mdxEditorRef} className="p-component" markdown='# Hello World' plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), imagePlugin(), tablePlugin(), linkDialogPlugin(), linkPlugin(), markdownShortcutPlugin(), codeBlockPlugin(), 
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
  )
}