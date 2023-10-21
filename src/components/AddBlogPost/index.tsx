const AddBlogPost = (): JSX.Element => {
  const addBlogPostActon = async (formData: FormData) => {
    'use server'

    const subject = formData.get('subject')
    if (!subject || typeof subject !== 'string') {
      throw new Error('Subject missing')
    }
    const url = process.env.OPEN_AI_URL + '/new-blog'
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ subject }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const response = await res.json()
    console.log('AI response :>> ', response)
  }

  return (
    <form
      action={addBlogPostActon}
      className="max-w-sm mx-auto flex flex-col justify-center items-center gap-2 my-4"
    >
      <input
        type="text"
        name="subject"
        placeholder="Enter blog post subject"
        className="px-2 py-1 rounded bg-slate-200 border border-slate-500 w-full"
      />
      <button
        type="submit"
        className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 text-white font-semibold w-full"
      >
        add
      </button>
    </form>
  )
}

export default AddBlogPost
