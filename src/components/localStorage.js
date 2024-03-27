import toast from 'react-hot-toast'

// wish
export const getItemWish = () => {
    let item = []
    const storedItem = localStorage.getItem('wishlist')
    if(storedItem) {
        item = JSON.parse(storedItem)
    }
    return item
}

//  wish
export const saveItemWish = (item) => {
    let items = getItemWish()
    const isExist = items.find(singleItem => singleItem.bookId === item.bookId)
    if(isExist) {
        return toast.error("This item is already in Wishlist.")
    }
    items.push(item)
    localStorage.setItem('wishlist', JSON.stringify(items))
    toast.success('Successfully added item to wishlist.')
}



//    READ 
export const getItemRead = () => {
    let item = []
    const storedItem = localStorage.getItem('readList')
    if(storedItem) {
        item = JSON.parse(storedItem)
    }
    return item
}

export const saveItemRead = (item) => {
    let items = getItemRead()
    const isExist = items.find(singleItem => singleItem.bookId === item.bookId)
    if(isExist) {
        return toast.error("You already read the book.")
    }
    items.push(item)
    localStorage.setItem('readList', JSON.stringify(items))
    toast.success('Successfully added item to Readlist.')
}