import { headingsPlugin, imagePlugin, linkDialogPlugin, linkPlugin, listsPlugin, markdownShortcutPlugin, MDXEditor, quotePlugin, tablePlugin, thematicBreakPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

export default function MarkdownCreate() {
  return (
    <MDXEditor markdown='# Hello World' plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), imagePlugin(), tablePlugin(), linkDialogPlugin(), linkPlugin(), markdownShortcutPlugin()]} />
  )
}