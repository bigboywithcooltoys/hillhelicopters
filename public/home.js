const paint = document.getElementById("paint-img")

function changePaint(id) {
    if (id == "ext-1") {
        paint.src="./images/outside_1_1.png"
    } else if (id == "ext-2") {
        paint.src="./images/outside_1_2.png"
    } else if (id == "ext-3") {
        paint.src="./images/outside_1_3.png"
    } else if (id == "ext-4") {
        paint.src="./images/outside_1_4.png"
    } else if (id == "ext-5") {
        paint.src="./images/outside_1_5.png"
    } else if (id == "ext-6") {
        paint.src="./images/outside_1_6.png"
    } else if (id == "ext-7") {
        paint.src="./images/outside_1_7.png"
    }
}


function changeInt(src) {
    document.getElementById("int-img-main").src = src
}

let activeIntColor = 'sky'

function changeIntColor(id) {
    if (id == "int-color-1") {
        activeIntColor = 'sky'
        document.getElementById("int-img-main").src="./images/interior_1_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_1_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_1_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_1_3.jpg"
    } else if (id == "int-color-2") {
        activeIntColor = "silk"
        document.getElementById("int-img-main").src="./images/interior_2_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_2_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_2_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_2_3.jpg"
    } else if (id == "int-color-3") {
        activeIntColor = "satin"
        document.getElementById("int-img-main").src="./images/interior_3_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_3_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_3_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_3_3.jpg"
    } else if (id == "int-color-4") {
        activeIntColor = "alpine"
        document.getElementById("int-img-main").src="./images/interior_4_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_4_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_4_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_4_3.jpg"
    } else if (id == "int-color-5") {
        activeIntColor = "mocha"
        document.getElementById("int-img-main").src="./images/interior_5_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_5_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_5_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_5_3.jpg"
    } else if (id == "int-color-6") {
        activeIntColor = "autumn"
        document.getElementById("int-img-main").src="./images/interior_6_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_6_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_6_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_6_3.jpg"
    } else if (id == "int-color-7") {
        activeIntColor = "cherry"
        document.getElementById("int-img-main").src="./images/interior_7_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_7_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_7_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_7_3.jpg"
    } else if (id == "int-color-8") {
        activeIntColor = "walnut"
        document.getElementById("int-img-main").src="./images/interior_8_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_8_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_8_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_8_3.jpg"
    } else if (id == "int-color-9") {
        activeIntColor = "blue"
        document.getElementById("int-img-main").src="./images/interior_9_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_9_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_9_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_9_3.jpg"
    } else if (id == "int-color-10") {
        activeIntColor = "emerald"
        document.getElementById("int-img-main").src="./images/interior_10_1.jpg"
        document.getElementById("int-img-1").src="./images/interior_10_1.jpg"
        document.getElementById("int-img-2").src="./images/interior_10_2.jpg"
        document.getElementById("int-img-3").src="./images/interior_10_3.jpg"
    }
}


let colors = document.querySelectorAll(".d-3-2-m-c-each")
let colorText = document.getElementById("color-name")

colors.forEach(ele => {
    ele.addEventListener('mouseover', event => {
        if (event.target.id == 'int-color-1') {
            colorText.textContent="Color: Sky white"
        } else if (event.target.id == 'int-color-2') {
            colorText.textContent="Color: Silk Cream"
        } else if (event.target.id == 'int-color-3') {
            colorText.textContent="Color: Satin Black"
        } else if (event.target.id == 'int-color-4') {
            colorText.textContent="Color: Alpine Frost"
        } else if (event.target.id == 'int-color-5') {
            colorText.textContent="Color: Mocha Dream"
        } else if (event.target.id == 'int-color-6') {
            colorText.textContent="Color: Autumn Glow"
        } else if (event.target.id == 'int-color-7') {
            colorText.textContent="Color: Cherrywood Red"
        } else if (event.target.id == 'int-color-8') {
            colorText.textContent="Color: English Walnut"
        } else if (event.target.id == 'int-color-9') {
            colorText.textContent="Color: Regatta Blue"
        } else if (event.target.id == 'int-color-10') {
            colorText.textContent="Color: Emerald Rebel"
        }
    })
})

colors.forEach(ele => {
    ele.addEventListener('mouseout', event => {
        if (activeIntColor == 'sky') {
            colorText.textContent="Color: Sky white"
        } else if (activeIntColor == 'silk') {
            colorText.textContent="Color: Silk Cream"
        } else if (activeIntColor == 'satin') {
            colorText.textContent="Color: Satin Black"
        } else if (activeIntColor == 'alpine') {
            colorText.textContent="Color: Alpine Frost"
        } else if (activeIntColor == 'mocha') {
            colorText.textContent="Color: Mocha Dream"
        } else if (activeIntColor == 'autumn') {
            colorText.textContent="Color: Autumn Glow"
        } else if (activeIntColor == 'cherry') {
            colorText.textContent="Color: Cherrywood Red"
        } else if (activeIntColor == 'walnut') {
            colorText.textContent="Color: English Walnut"
        } else if (activeIntColor == 'blue') {
            colorText.textContent="Color: Regatta Blue"
        } else if (activeIntColor == 'emerald') {
            colorText.textContent="Color: Emerald Rebel"
        }
    })
})



function changeDimmension(id) {
    document.getElementById("dim-img").src = "./images/" + id + ".png"
    let prev = document.getElementsByClassName("dim-act")[0]
    prev.classList.add("dim-int")
    prev.classList.remove("dim-act")
    if (id == "dimmension-side") {
        let cur = document.getElementById("d-6-m-d-id-side")
        cur.classList.add("dim-act")
        cur.classList.remove("dim-int")
    } else if (id == "dimmension-A") {
        let cur = document.getElementById("d-6-m-d-id-a")
        cur.classList.add("dim-act")
        cur.classList.remove("dim-int")
    } else if (id == "dimmension-B") {
        let cur = document.getElementById("d-6-m-d-id-b")
        cur.classList.add("dim-act")
        cur.classList.remove("dim-int")
    } else if (id == "dimmension-C") {
        let cur = document.getElementById("d-6-m-d-id-c")
        cur.classList.add("dim-act")
        cur.classList.remove("dim-int")
    } else if (id == "dimmension-front") {
        let cur = document.getElementById("d-6-m-d-id-front")
        cur.classList.add("dim-act")
        cur.classList.remove("dim-int")
    } else if (id == "dimmension-luggage") {
        let cur = document.getElementById("d-6-m-d-id-luggage")
        cur.classList.add("dim-act")
        cur.classList.remove("dim-int")
    }
}

