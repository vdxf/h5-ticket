class Msg {
    static loading() {
        document.querySelector('.loading-page').style.display = 'block';
    }

    static hideLoading() {
        document.querySelector('.loading-page').style.display = 'none';
    }
}

export {
    Msg
}