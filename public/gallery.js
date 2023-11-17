let videos = [
    "https://www.youtube.com/embed/5pcS2UG1dlY?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/zoi95c63d0I?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/B0peSal6_q8?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",
    "https://www.youtube.com/embed/J-ZUSvb8Msk?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3",

]


let vids = document.querySelectorAll(".g-2-c-cover")



function playVid(e) {
    console.log("hello")
}



vids.forEach(ele => {
    ele.addEventListener('click', playVid)
})