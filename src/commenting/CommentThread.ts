// CommentThread.ts
import {Comment} from './Comment'
export interface CommentThread {
    id: number;
    comments: Comment[];
  }