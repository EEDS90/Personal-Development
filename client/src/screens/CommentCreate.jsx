import { useState, useEffect } from 'react'


export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    comment: '', 
    user_id: '',
    question_id: '',
  })

  useEffect(() => {
    const { id } = props.currentUser
    setFormData(prevState => ({
      ...prevState,
      user_id: id
  }))
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleCreate(formData);
    }}>
      <h3>What do you really think about me and how can I improve?</h3>
      <label>Name:
        <input
          type='text'
          name='comment'
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
