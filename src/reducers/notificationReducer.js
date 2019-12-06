const initialState = ''
const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW':
            return (
                //action.type
                action.data
            )
        case 'HIDE':
            return null
        case 'VOTED':
            return action.data
        default:
            return state
    }
}

// action creator
export const createNotification = (content) => {
    return {
        type: 'CREATE_NEW',
        //data: `You voted ${id}`
        data: `You created new anecdote "${content}"`
    }
}
// action creator
export const hideNotification = () => {
    return {
        type: 'HIDE',
        data: null
    }
}
// action creator
export const createVoteNotification = (content) => {
    return {
        type: 'VOTED',
        //data: `You voted ${id}`
        data: `You voted "${content}"`
    }
}

export default notificationReducer