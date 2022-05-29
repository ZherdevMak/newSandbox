'use strict';

function compress(music) {

    for (let i = 0; i < music.length; i++) {
        let nextI = i + 1;
        if (music[i] + 1 === music[nextI] && music[nextI] + 1 === music[nextI+1]) {
            let start = i;
            let finish = 3;
            one: for (let a = nextI + 1; a<music.length; a++) {
                if (music[a] + 1 !== music[a+1]) {
                    music.splice(i,finish,`,${music[start]}-${music[a]}`);
                    break one
                } else {++finish}
            }
        }
    }
    for (let i = 0; i < music.length; i++) {
        let nextI = i + 1;
        if (music[i] - 1 === music[nextI] && music[nextI] - 1 === music[nextI+1]) {
            let start = i;
            let finish = 3;
            one: for (let a = nextI + 1; a<music.length; a++) {
                if (music[a] - 1 !== music[a+1]) {
                    music.splice(i,finish,`,${music[start]}-${music[a]}`);
                    break one
                } else {++finish}
            }
        }
    }

    for (let i = 0; i < music.length; i++) {
        let nextI = i + 1;
        if (music[i] === music[nextI]) {
            let start = 0;
            let finish = 2;
            one: for (let a = nextI; a<music.length; a++) {
                if (music[a] !== music[a+1]) {
                    music.splice(i,finish,`,${music[i]}*${finish - start}`);
                    break one
                } else {++finish}
            }
        }
    }
    return music
}

alert(compress([1,2,3,2,2,2,2,3,4,4,4]))