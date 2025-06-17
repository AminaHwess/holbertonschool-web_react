# React Redux Action Creator + Normalizr

<img src='image/readme.jpg' title='redme'>


## Overview

This project integrates Normalizr and Redux action creators within a React application to manage and normalize complex data structures. It involves reading data from a JSON file, normalizing nested JSON data using Normalizr, creating and testing Redux actions and action creators, and managing asynchronous actions using Redux Thunk.

## Project Structure

### Task 0: Read Data from JSON
- `schema/notifications.js`: Import JSON data and create a function to get notifications by userId.
- `schema/notifications.test.js`: Write tests to verify the function.

### Task 1: Normalize Nested JSON
- `schema/notifications.js`: Define schemas for user, message, and notification entities.
- `schema/notifications.test.js`: Write tests to verify normalization.

### Task 2: Filter a Normalized Schema
- `schema/notifications.js`: Update function to filter notifications using normalized data.

### Task 3: Create Actions for Course List
- `actions/courseActionTypes.js`: Define action types.
- `actions/courseActionCreators.js`: Create action creators.
- `actions/courseActionCreators.test.js`: Write tests for action creators.

### Task 4: Create Actions for UI
- `actions/uiActionTypes.js`: Define action types.
- `actions/uiActionCreators.js`: Create action creators.
- `actions/uiActionCreators.test.js`: Write tests for action creators.

### Task 5: Create Actions for Notification List
- `actions/notificationActionTypes.js`: Define action types and filters.
- `actions/notificationActionCreators.js`: Create action creators.
- `actions/notificationActionCreators.test.js`: Write tests for action creators.

### Task 6: Bind the Actions
- Update respective action creators files to bind actions to Redux store.

### Task 7: Async Action Creators
- `actions/uiActionTypes.js`: Add new action types.
- `actions/uiActionCreators.js`: Create async action creators and success/failure actions.
- `actions/uiActionCreators.test.js`: Write tests for async actions.

### Author
 [Mouayed sabbagh](https://github.com/MOUAYEDSB)
