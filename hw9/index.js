'use strict';

(() => {
    function getPostsCallback(callback) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
            }
        };
        xhttp.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=56&page=1');
        xhttp.send();
    }

    getPostsCallback(function (response) {
        console.log(JSON.parse(response));
    });

    ///////////////////////////////////

    function getPostsPromise() {
        return new Promise(function (resolve, reject) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            xhttp.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=56&page=1');
            xhttp.send();
        });
    }

    let postsPromise = getPostsPromise();
    postsPromise.then((response) => {
        console.log(JSON.parse(response));
    });

    ///////////////////////////////////

    async function getPostsAsync() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                return this.responseText;
            }
        };
        xhttp.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=56&page=1');
        xhttp.send();
    }

    getPostsAsync().then((response) => {
        console.log(JSON.parse(response));
    });

    ///////////////////////////////////

    async function getRandomInteger(timeout)
    {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 10) + 1);
            }, timeout);
        });

        let result = await promise;

        console.log(result);
    }

    let firstNumber = getRandomInteger(1000);
    let secondNumber = getRandomInteger(2000);
})();
