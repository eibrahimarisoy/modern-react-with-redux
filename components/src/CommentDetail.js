import react from 'react'


const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    </a>
                <div className="metadata">
                    <span className="Date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    {props.content}
                    </div>
            </div>
        </div>
    )
}

export default CommentDetail;