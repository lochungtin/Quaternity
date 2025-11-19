const shuffler = arr => {
    let out = [];
    let count = arr.length;
    for (let i = 0; i < count; ++i)
        out.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

    return out;
}

const remap = () => {
    let ind = document.getElementById("indicator")
    let arr = ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "red", "red", "red", "red", "red", "red", "red", "black", "gray", "gray", "gray", "gray", "gray", "gray", "gray"]
    if (Math.random() > 0.5) {
        ind.classList.remove("blue")
        ind.classList.add("red")
        arr[0] = "red"
    }
    else {
        ind.classList.add("red")
        ind.classList.add("blue")
    }

    arr = shuffler(arr)
    for (let i = 0; i < 25; ++i) {
        let cell = document.getElementById(i.toString())
        for (let j = 0; j < 4; ++j)
            cell.classList.remove(["red", "blue", "black", "gray"][j])
        cell.classList.add(arr[i])
    }
}
