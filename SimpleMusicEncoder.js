'use strict';

function compress(music) {
    for (let i = 0; i < music.length; i++) {
        let nextI = i + 1;
        let step = 2
        if (music[i] === music[nextI]) {
            let start = i;
            one: for (let a = nextI; a<music.length; a++) {
                let finish = a;
                if (music[a] !== music[a+1]) {
                    music.splice(start,finish,`,${music[start]}*${finish - start + 1}`);
                    break one
                }
            }
        }
    }
    return music
}

alert(compress([1,2,2,2,2,3,4,4,4]))