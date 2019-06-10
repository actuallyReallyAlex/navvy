// ACTION TYPES
const GET_BUILD_NUMBER = 'GET_BUILD_NUMBER'

// PROMISE / ASYNC
const promiseFunc = () => fetch('url.com')

// ACTION GENERATOR
const getBuildNumber = environment => {
  return dispatch => {
    return promiseFunc()
      .then(thing => dispatch(otherFunc(thing)))
      .catch(error => console.error({ error }))
  }
}
