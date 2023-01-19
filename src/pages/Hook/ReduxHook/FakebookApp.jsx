import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../../../redux/action/fakebookApp/fakebookAction';
import { ADD_COMMENT } from '../../../redux/types/fakebookType';

export default function FakebookApp() {

    let { arrComment } = useSelector(state => state.fakebookReducer)

    let [userComment, setUserComment] = useState({ 
        username: "", 
        comment: "", 
        avatar: "https://i.pravatar.cc/?u=77" 
    })

    let dispatch = useDispatch();

    let renderComment = () => {
        return arrComment.map((cmt) => {
            return <div key={cmt.username} className='row py-3'>
                <div className="col-2">
                    <img className='img-fluid' src={cmt.avatar} alt="" />
                </div>
                <div className="col-10">
                    <p>{cmt.username}</p>
                    <p>{cmt.comment}</p>
                </div>
            </div>
        })
    }

    let handleChange = (event) => {
        let {value, id} = event.target;
        setUserComment({
            ...userComment,
            [id]:value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();

        //action creator
        let action = addCommentAction(userComment)
        dispatch(action);
    }

    // console.log(arrComment)
    console.log(userComment)
    return (
        <div className='container'>
            <div className='bg-secondary'>
                {renderComment()}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <input onChange={handleChange} type="text" className="form-control" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <input onChange={handleChange} type="text" className="form-control" id="comment" />
                    </div>

                    <button type="submit" className="btn btn-primary">Send</button>
                </form>

            </div>
        </div>
    )
}
