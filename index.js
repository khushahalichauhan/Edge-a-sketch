const container = document.querySelector("#container");
const remb = document.getElementById("remborder");
remb.addEventListener('click', removeborder);
const slide = document.getElementById("slider");
const colors = document.querySelectorAll(".colorselec");
colors.forEach(element => { element.addEventListener('click', choosecolor) });
const colorPicker = document.getElementById("favcolor");
colorPicker.addEventListener("change", watchColorPicker, false);
const res = document.querySelector(".reset");
res.addEventListener('click', resetfunc);


function boxcolor(color) {
    if (color === "Rainbow") {
        $(".box").mouseover(function () {
            let get = document.querySelectorAll('.box');
            get.forEach(element => {
                let r = Math.floor(Math.random() * 200) + 50;
                let g = Math.floor(Math.random() * 200) + 50;
                let b = Math.floor(Math.random() * 200) + 50;
                let temps = "rgb(" + r + ", " + g + ", " + b + ")";
                $(this).css("background-color", temps);
            });
        });

    }
    else if (color === "Eraser") {
        $(".box").mouseover(function () {
            let get = document.querySelectorAll(".box");
            get.forEach(element => {
                $(this).css("background-color", "white");
            })
        })
    }

    else if (color === "black") {
        $(".box").mouseover(function () {
            let get = document.querySelectorAll(".box");
            get.forEach(element => {
                $(this).css("background-color", "black");
            })
        })
    }
}


function resetfunc(e) {
    let get = document.querySelectorAll('.box');
    get.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function watchColorPicker(event) {
    $(".box").mouseover(function () {
        let get = document.querySelectorAll('.box');
        get.forEach(element => {
            $(this).css("background-color", event.target.value);
        });
    });
}


function create(x) {
    document.getElementById("remborder").textContent = "Remove gridlines";
    let get = document.querySelectorAll('.box');
    get.forEach(element => {
        element.remove();
    });
    for (let r = 0; r < x; r++) {
        for (let c = 0; c < x; c++) {
            $("#container").append("<div class= 'box' ></div>");
        }
    }
    $(".box").height(450 / x);
    $(".box").width(450 / x);
    resetfunc();
};
create(30);

slide.oninput = function () {
    var temp = this.value;
    console.log(temp);
    create(temp);
    let temps = temp + " X " + temp;
    document.getElementById("slidvalue").innerHTML = temps;
}

function choosecolor(e) {
    boxcolor(e.target.textContent);
}

function removeborder(e) {
    var x = e.target.textContent;
    if (x === "Remove gridlines") {
        var elements = document.querySelectorAll('.box');
        elements.forEach(function (element) {
            element.style.outline = '0px';
        });
        e.target.textContent = "Show gridlines";
    }
    else {
        var elements = document.querySelectorAll('.box');
        elements.forEach(function (element) {
            element.style.outline = '0.7px solid black';
        });
        e.target.textContent = "Remove gridlines";
    }

}
boxcolor('black');
