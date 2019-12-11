

const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// create id
const getId = () => (100000 * Math.random()).toFixed(0)

// anecdotes at start -helper
const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    }
}
const initialState = anecdotesAtStart.map(asObject)

export const filterAnecdotes = (search) => {
    return {
        type: 'FILTER',
        data: { search }
    }
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER':
            const search = action.data.search
           
           //state.find(a => console.log('a on: ', a))
           console.log(state.filter(a => a.content.includes(search)))
           
           return state.filter(a => a.content.includes(search))
         
        default: return state
    }

}
export default filterReducer