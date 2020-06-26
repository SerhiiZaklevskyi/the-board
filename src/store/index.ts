import { combineReducers, createStore, applyMiddleware, compose, Store, AnyAction } from 'redux'
import thunk from 'redux-thunk'
import { ITaskReducerState, IContentReducerState } from '../reducers/reducers'
import TaskReducer from '../reducers/task'
import ContentReducer from '../reducers/content'
// import ContentReducer from '../reducers/content'
// import {  IContentReducerState } from '../reducers/reducers.d';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export interface IStore {
  task: ITaskReducerState
  content: IContentReducerState
}

export type StoreType = Store<IStore, AnyAction>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers<IStore>({
  task: TaskReducer,
  content: ContentReducer,
})

const ApplicationStore: StoreType = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default ApplicationStore
