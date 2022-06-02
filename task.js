'use strict';
function compress(music) {
    for (let i = 0; i < music.length; i++) {
        let nextI = i + 1;
        let c = music[nextI] - music[i]
        if (music[nextI] + c === music[nextI + 1] && (c > 1 || c < -1)) {
            let start = i;
            let finish = 3;
            one: for (let a = nextI + 1; a < music.length; a++) {
                if (music[a] + c !== music[a + 1]) {
                    if (c < 0) {
                        c = c * -1
                    }
                    ;
                    music.splice(i, finish, `${music[start]}-${music[a]}/${c}`);
                    break one
                } else {
                    ++finish
                }
            }
        }

        if (music[i] + 1 === music[nextI] && music[nextI] + 1 === music[nextI + 1]) {
            let start = i;
            let finish = 3;
            one: for (let a = nextI + 1; a < music.length; a++) {
                if (music[a] + 1 !== music[a + 1]) {
                    music.splice(i, finish, `${music[start]}-${music[a]}`);
                    break one
                } else {
                    ++finish
                }
            }
        }

        if (music[i] - 1 === music[nextI] && music[nextI] - 1 === music[nextI + 1]) {
            let start = i;
            let finish = 3;
            one: for (let a = nextI + 1; a < music.length; a++) {
                if (music[a] - 1 !== music[a + 1]) {
                    music.splice(i, finish, `${music[start]}-${music[a]}`);
                    break one
                } else {
                    ++finish
                }
            }
        }
        if (music[i] === music[nextI]) {
            let start = 0;
            let finish = 2;
            one: for (let a = nextI; a < music.length; a++) {
                if (music[a] !== music[a + 1]) {
                    music.splice(i, finish, `${music[i]}*${finish - start}`);
                    break one
                } else {
                    ++finish
                }
            }
        }
    }

    return music.toString()
}

alert(compress([1,2,2,3]))
