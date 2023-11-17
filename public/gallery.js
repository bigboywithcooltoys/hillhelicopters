



let videos = [
    "https://www.youtube.com/embed/5pcS2UG1dlY?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/zoi95c63d0I?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/B0peSal6_q8?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/J-ZUSvb8Msk?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",

]


let vids = document.querySelectorAll(".g-2-c-cover")
let vid = document.getElementById("g-1-m-i-vid")



function playVid(e) {
    if (e.target.id == "vid-1") {
        vid.src=videos[0]
    } else if (e.target.id == "vid-2") {
        vid.src=videos[1]
    } else if (e.target.id == "vid-3") {
        vid.src=videos[2]
    } else if (e.target.id == "vid-4") {
        vid.src=videos[3]
    }
    document.getElementById("g-1-toggle").classList.add("g-1-active")
    document.getElementById("g-1-m-toggle").classList.add("g-1-m-active")
}



vids.forEach(ele => {
    ele.addEventListener('click', playVid)
})