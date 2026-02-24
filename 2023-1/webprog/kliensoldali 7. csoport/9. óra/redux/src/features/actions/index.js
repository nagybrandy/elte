export const increment = (payload) => {
    return {
        type: "INCREMENT",
        payload
    }
}

export const decrement = (value) => {
    return {
        type: "DECREMENT",
        payload: value
    }
}

export const auth = () => {
    return {
        type: "AUTH",
    }
}

