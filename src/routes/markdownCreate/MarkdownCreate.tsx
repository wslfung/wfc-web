import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, diffSourcePlugin, DiffSourceToggleWrapper, headingsPlugin, imagePlugin, InsertImage, InsertTable, InsertThematicBreak, linkDialogPlugin, linkPlugin, listsPlugin, ListsToggle, markdownShortcutPlugin, MDXEditor, MDXEditorMethods, quotePlugin, tablePlugin, thematicBreakPlugin, toolbarPlugin, UndoRedo } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { useRef } from 'react'

export default function MarkdownCreate() {

  const mdxEditorRef = useRef<MDXEditorMethods>(null)

  return (
    <MDXEditor ref={mdxEditorRef} className="p-component" markdown='# Hello World' plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), imagePlugin(), tablePlugin(), linkDialogPlugin(), linkPlugin(), markdownShortcutPlugin(),
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
            <BlockTypeSelect />
            <ListsToggle />
            <InsertImage />
            <InsertTable />
            <InsertThematicBreak />
            <CodeToggle />
          </DiffSourceToggleWrapper>
        </>
      )
    })]} />
  )
}