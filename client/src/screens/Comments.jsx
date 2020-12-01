import React from 'react';
import { Link } from 'react-router-dom';

export default function Comments(props) {
  return (
    <div>
      <h3>Comments</h3>
      {
        props.comments.map(comment => (
          <React.Fragment key={comment.id}>
            <Link to={`/comments/${comment.id}`}><p>{comment.text}</p></Link>
            {
              comment.user_id === props.currentUser?.id &&
              <>
                <Link to={`/comments/${comment.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(comment.id)}>Delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/comments/new'><button>Create</button></Link>
    </div>
  )
}
