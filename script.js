// #taking control over Element

const main = document.getElementById('ques');

let vis = [0,0,0,0,0];
function DisplayAndHide(temp1, flag){
    console.log(flag);
    if(vis[flag] == 0){
        vis[flag] = 1;
        flag = 1;
        console.log(vis);
    }
    else{
        vis[flag] = 0;
        flag = 0;
        console.log(vis);
    }
    if(flag == 1){
        temp1.style.display = "block";
        return 0;
    }
    else{
        temp1.style.display = "none";
        return 1;
    }
}
function change(event){
    const parent = document.getElementById(`${event.target.parentElement.id}`);
    const child = parent.lastElementChild;
    console.log(child.id);
    const temp = document.getElementById(`${child.id}`);
    DisplayAndHide(temp, child.id);
}
ques.addEventListener('click', change);

const loader = document.querySelector("#loader");
setTimeout(function() {
     loader.style.top = "-100%"
}, 5000);






// const one = document.getElementById('o-one');
// const two = document.getElementById('o-two');
// const three = document.getElementById('o-three');
// const four = document.getElementById('o-four');
// const five = document.getElementById('o-five');
// function change(event){
//     // console.log(event.target.id);
//     // console.log(event.target.parentElement);
//     const parent = document.getElementById(`${event.target.parentElement.id}`);
//     // console.log(parent.id);
//     const child = parent.lastElementChild;
//     console.log(child.id);
//     const temp = document.getElementById(`${child.id}`);
//     DisplayAndHide(temp, child.id);

    // let temp = two.lastElementChild;
    // let temp1 = document.getElementById(`${temp.id}`);
    // let temp2 = temp1.parentElement;
    // console.log(temp2);
    // console.log(temp1);
    // flag = DisplayAndHide(temp1, flag);
    

// one.addEventListener('click', change)
// two.addEventListener('click', change)
// three.addEventListener('click', change)
// four.addEventListener('click', change)
// five.addEventListener('click', change)

