export const addLeadingZeros = (count) => {
    return ('0' + count).slice(-2)
}

export const storage = (key, data = null) => {
    if(!data) {
        return JSON.parse(localStorage.getItem(key))
    }
    localStorage.setItem(key, JSON.stringify(data))
}

export const shuffleArray = (arr) => {
    for(let i = arr.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}