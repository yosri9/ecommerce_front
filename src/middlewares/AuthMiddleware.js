

export default (to, from, next) => {

    const isLoggedIn = localStorage.getItem("token") != null

    if (!isLoggedIn) {
        next({name: 'register'});
        return false;
    }



}

