export function getLocalStorage(commentId: string) {
    const type = localStorage.getItem(`voted-${commentId}`)
    return type ? JSON.parse(type) : null;
}

export function setLocalStorage(commentId: string, type: string) {
    localStorage.setItem(`voted-${commentId}`, JSON.stringify(type))
}

export function removeLocalStorage(commentId: string) {
    localStorage.removeItem(`voted-${commentId}`)
}