import { IPostData } from '../src/hooks/usePostsData';
import { IPostWithCommentsData } from '../src/hooks/usePostsWithCommentsData';
import { IUserData } from '../src/hooks/useUserData';
import { IPostWithCommentsState } from '../src/store/reducers/postWCReducer';

export interface IMyState {
  loading: boolean
  myData: IUserData
  error: string
}

export interface IPostState {
  loading: boolean
  postsData: IPostData[]
  error: string
  after: string
}

export interface IPostWithCommentsState {
  loading: boolean
  postsWCData: IPostWithCommentsData[]
  error: string
}

export interface IInitState {
  commentText: string
  token: string
  posts: IPostState
  postsType: string
  postsWithComments: IPostWithCommentsState
  me: IMyState,
  fetchMyData: () => void,
  fetchMyDataSuccess: (myData: IUserData) => void,
  fetchMyDataFailure: (error: string) => void,
  fetchPosts: () => void,
  fetchPostsSuccess: (postsData: IPostData[], after: string) => void,
  fetchPostsFailure: (error: string) => void,
  fetchPostsWC: () => void,
  fetchPostsWCSuccess: (postsData: IPostWithCommentsData[]) => void,
  fetchPostsWCFailure: (error: string) => void,
  setPostType: (postsType: string) => void,
  setToken: (token: string) => void,
  updateCommentFormValue: (commentText: string) => void,
  fetchMyDataAsync: () => void,
  postsRequestAsync: () => void,
  postsWCRequestAsync: () => void,
}
