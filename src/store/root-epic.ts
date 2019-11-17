import { combineEpics } from 'redux-observable';

import * as goalsEpics from './goals/epics'
import * as todosEpics from './todos/epics'

/** root epics **/
export default combineEpics(...Object.values(todosEpics),...Object.values(goalsEpics))
