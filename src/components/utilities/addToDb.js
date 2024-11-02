import { toast } from "react-toastify";
const getStoredReadList = () => {
    // Retrieve 'read-list' from localStorage
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        try {
            const storedList = JSON.parse(storedListStr);
            // Ensure storedList is an array
            return Array.isArray(storedList) ? storedList : [];
        } catch (error) {
            console.error("Error parsing stored list:", error);
            return []; // Return empty array if parsing fails
        }
    } else {
        return [];
    }
}

const addToReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        toast.error('This book is already marked as read!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        //
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast.success('Book marked as read. Keep up the reading streak!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}



const getStoredWishList = () => {
    // Retrieve 'read-list' from localStorage
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        try {
            const storedWishList = JSON.parse(storedWishListStr);
            // Ensure storedWishList is an array
            return Array.isArray(storedWishList) ? storedWishList : [];
        } catch (error) {
            console.error("Error parsing stored list:", error);
            return []; // Return empty array if parsing fails
        }
    } else {
        return [];
    }
}

const addToWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.error('This book is already in your wishlist!')


    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast.success('Book added in your Wishlist!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}

export { addToReadList, addToWishList, getStoredReadList, getStoredWishList };
