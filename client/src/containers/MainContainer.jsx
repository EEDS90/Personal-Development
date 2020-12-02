import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Questions from '../screens/Questions';
import CommentCreate from '../screens/CommentCreate';
import CommentDetail from '../screens/CommentDetail';
import CommentEdit from '../screens/CommentEdit';
import Comments from '../screens/Comments';
import { getAllQuestions } from '../services/questions'
import { destroyComment, getAllComments, postComment, putComment } from '../services/comments'

export default function MainContainer(props) {
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionData = await getAllQuestions();
      setQuestions(questionData);
    }
    const fetchComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData);
    }
    fetchQuestions();
    fetchComments();
  }, [])

  const handleCreate = async (commentData) => {
    const newComment = await postComment(commentData);
    setComments(prevState => [...prevState, newComment]);
    history.push('/comments');
  }

  const handleUpdate = async (id, commentData) => {
    const updatedComment = await putComment(id, commentData);
    setComments(prevState => prevState.map(comment => {
      return comment.id === Number(id) ? updatedComment : comment
    }))
    history.push('/comments');
  }

  const handleDelete = async (id) => {
    await destroyComment(id);
    setComments(prevState => prevState.filter(comment => comment.id !== id))
  }

  return (
    <Switch>
      <Route path='/questions'>
        <Questions questions={questions} />
      </Route>
      <Route path='/comments/:id/edit'>
        <CommentEdit comments={comments} handleUpdate={handleUpdate} />
      </Route>
      <Route path='/comments/new'>
        <CommentCreate handleCreate={handleCreate} currentUser={props.currentUser} />
      </Route>

      <Route path='/comments/:id'>
        <CommentDetail questions={questions} />
      </Route>
      <Route path='/comments'>
        <Comments
          comments={comments}
          handleDelete={handleDelete}
          currentUser={props.currentUser}
        />
      </Route>
    </Switch>
  )
}