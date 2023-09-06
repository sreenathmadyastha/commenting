// CommentList.tsx
import React, { useEffect, useState } from 'react';
import { CommentThread } from './CommentThread';

import { Comment } from './Comment';

interface CommentListProps {
    threads: CommentThread[];
    onSelectComment: (comment: Comment | null) => void;
    selectedCommentId: number | null;
}

const CommentList: React.FC<CommentListProps> = ({ threads, onSelectComment, selectedCommentId }) => {
    const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
    const handleCommentClick = (comment: Comment) => {
        setSelectedComment(comment);
    };

    useEffect(() => {
        
        if (selectedCommentId !== null) {
            // Find the selected comment and thread
            for (const thread of threads) {
                for (const comment of thread.comments) {
                    if (comment.id === selectedCommentId) {
                        onSelectComment(comment);
                        return;
                    }
                }
            }
        }
    }, [threads, selectedCommentId, onSelectComment]);

    return (
        <div>
            {threads.map((thread) => (
                <div key={thread.id}>
                    <h3>Thread #{thread.id}</h3>
                    <ul>
                        {thread.comments.map((comment) => (
                            <li
                                key={comment.id}
                                onClick={() => handleCommentClick(comment)}
                                style={{
                                    cursor: 'pointer',
                                    fontWeight: comment.id === selectedCommentId ? 'bold' : 'normal', // Apply styling for selected comment
                                  }}
                            >
                                {comment.text}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <div>
                <h4>Selected Comment:</h4>
                {selectedComment ? <p>{selectedComment.text}</p> : <p>No comment selected</p>}
            </div>
        </div>
    );
};

export default CommentList;
