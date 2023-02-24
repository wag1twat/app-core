const message = JSON.stringify({
    message: 'Unique exception, you can`t use duplicate key :${string} in params'
}, null, 2)

class UniqueParamException extends Error {
    constructor(){
        super(message)
    }
}

export { UniqueParamException }