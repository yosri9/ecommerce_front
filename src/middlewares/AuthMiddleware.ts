

export default (to: any, from: any, next: (arg0: { name: string; }) => void) => {

    const isLoggedIn = localStorage.getItem("token") != null

    if (!isLoggedIn) {
        next({name: 'register'});
        return false;
    }



}

