
// var counter = 0;
// counter = 1;
// console.log(counter)


// const [counter, setCounter] = useState(0)
// setCounter(1)


var obj = { name: { nickname: 'a', abc: 'ad' }, surname: 'b' };

function d(swaraj) {
    const { name: { nickname, abc } } = swaraj
    console.log(nickname, abc)
}

d(obj) 