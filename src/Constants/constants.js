export const BASEURL = 'http://fitnesstrac-kr.herokuapp.com/api'
export const STORAGE_KEY = 'replyToken'
export const USER_ID = 'userId'

export const setTargetValue = (callback) => {
    return (event) => {
        callback(event.target.value)
    }
}