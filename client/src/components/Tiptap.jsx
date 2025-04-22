import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'


function Tiptap({ onChange }) {
  const editor = useEditor({
    extensions: [StarterKit,
    Placeholder.configure({
      placeholder:'add description',
    }),
  ],
    editorProps: {
      attributes: {
        class: 'bg-white border rounded-md my-5 p-4 min-h-[150px] text-2xl font-serif outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      if (onChange) {
        onChange(html)
      }
    },
  })

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
