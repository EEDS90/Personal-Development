import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const commentItem = props.comments.find(comment => comment.id === Number(id));
      setFormData({
        name: commentItem.name
      })
    }
    if (props.comments.length){
      prefillForm();
    }
  }, [props.comments])

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
      props.handleUpdate(id, formData);
    }}>
      <h3>Edit Comment</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
