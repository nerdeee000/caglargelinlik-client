import cookie from 'js-cookie'
import ProductService from '../service/product'

export const setCookie = (key,value) => {
    if(window !== 'undefined'){
        cookie.set(key, value)
    }
}

export const removeCookie = (key,value) => {
    if(window !== 'undefined'){
        cookie.remove(key, {
            expires: 5/24
        })
    }
}

export const getCookie = (key,value) => {
    if(window !== 'undefined'){
        return cookie.get(key);
    }
}

export const getSaved = () => {
    if(window !== 'undefined'){
        return Object.keys(cookie.get()).length;
    }
}

export const getAll = () => {
    if(window !== 'undefined'){
        return cookie.get();
    }
}


export const setLocalStorage = (key,value) => {
    if(window !== 'undefined'){
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const removeLocalStorage = (key) => {
    if(window !== 'undefined'){
        localStorage.removeItem(key)
    }
}

export const signout = () => {
    removeCookie('token');
    removeLocalStorage('user_name');
    removeLocalStorage('user_role');
    console.log("Güvenli çıkış yapıldı.");
}