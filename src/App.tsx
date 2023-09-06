// App.tsx
import React, { useState } from 'react';
import CommentList from './commenting/CommentList';
import { CommentThread } from './commenting/CommentThread';

import { Comment } from './commenting/Comment';

const commentThreads: CommentThread[] = [
  {
    id: 1,
    comments: [
      { id: 1, text: 'Comment 1.1' },
      { id: 2, text: 'Comment 1.2' },
    ],
  },
  {
    id: 2,
    comments: [
      { id: 3, text: 'Comment 2.1' },
      { id: 4, text: 'Comment 2.2' },
    ],
  },
];

const App: React.FC = () => {
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(null);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const handleCommentSelect = (comment: Comment | null) => {
    setSelectedComment(comment);
    
  };
  return (
    <div className="App">
      <h1>Comment Threads</h1>
      <CommentList
        threads={commentThreads}
        onSelectComment={() => handleCommentSelect(selectedComment)}
        selectedCommentId={selectedCommentId}
      />
     
    </div>
  );
};

export default App;