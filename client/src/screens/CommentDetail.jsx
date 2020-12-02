import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addQuestion } from '../services/questions';
import { getOneComment } from '../services/comments';

export default function CommentDetail(props) {
  const [commentItem, setCommentItem] = useState(null);
  const [questionId, setQuestionId] = useState('')

  const { id } = useParams();


  useEffect(() => {
    const fetchCommentItem = async () => {
      const commentData = await getOneComment(id);
      setCommentItem(commentData);
    }
    fetchCommentItem();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentItem = await addQuestion(questionId, id);

    setCommentItem(commentItem);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setQuestionId(value);
  }

  return (
    <div>
      <h3>{commentItem?.text}</h3>
      {commentItem?.questions.map(question => (
        <p key={question.id}>{question.name}</p>
      ))}
      
      <form onSubmit={handleSubmit}>
        <select defaultValue='default' onChange={handleChange}>
 
          <option disabled value='default'>-- Select a question --</option>

          {props.questions.map(question => (

            <option value={question.id} key={question.id}>{question.text}</option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  )
}
