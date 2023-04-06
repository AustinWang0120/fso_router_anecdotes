import { useState } from "react"
import { useField } from "../hooks"

const CreateNew = (props) => {
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')
  const {reset: contentReset, ...contentWithoutReset} = useField("text")
  const {reset: authorReset, ...authorWithoutReset} = useField("text")
  const {reset: infoReset, ...infoWithoutReset} = useField("text")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: contentWithoutReset.value,
      author: authorWithoutReset.value,
      info: infoWithoutReset.value,
      votes: 0
    })
  }

  const handleReset = () => {
    contentReset()
    authorReset()
    infoReset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentWithoutReset} />
        </div>
        <div>
          author
          <input {...authorWithoutReset} />
        </div>
        <div>
          url for more info
          <input {...infoWithoutReset} />
        </div>
        <button type="submit">create</button>
        <button type="button" onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew
