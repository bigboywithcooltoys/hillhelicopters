let videos = [ 
    "https://www.youtube.com/embed/T8PidxZqVg0?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-1 Why build the HX50 ?
    "https://www.youtube.com/embed/3l4ujXygjO0?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-2 How is the HX50 the world's first truly private helicopter ?
    "https://www.youtube.com/embed/zoi95c63d0I?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-3 HX50 - Behind the Design
    "https://www.youtube.com/embed/2LqF9bRpEAY?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-4 How does my iPad integrate with the digital cockpit?
    "https://www.youtube.com/embed/6Ql1HO6j7PY?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-5 How does the HX50 compare with other popular light helicopters?
    "https://www.youtube.com/embed/rTP_40nYPd8?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-6 What is the seat and luggage capacity of the HX50?
    "https://www.youtube.com/embed/ppW_psDOg5s?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-7 What is the engine of the HX50 and its specs?
    "https://www.youtube.com/embed/dA_njoJiB3Y?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-8 Advantages of doing 51% of the HX50 build
    "https://www.youtube.com/embed/mm6rX9YYQ-E?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-9 How is the HX50 so affordable?
    "https://www.youtube.com/embed/qFy2zYyx3fQ?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-10 What is the team behind the HX50?
    "https://www.youtube.com/embed/2bsg-7c_QKk?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-11 What makes the HX50 so fast?
    "https://www.youtube.com/embed/98y_zPD1iHo?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-12 What maintenance costs should I expect on my HX50?
    "https://www.youtube.com/embed/-PA7bZ20VlY?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-13 Does the HX50 have a set lifespan or hourly overhaul limit?
    "https://www.youtube.com/embed/ubmNJxmHJH8?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-14 What colours are available and how much can I customise my HX50?
    "https://www.youtube.com/embed/cqUw43DUDEM?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-15 Can we expect a certified version of the HX50?
    "https://www.youtube.com/embed/cohBBz4gvb0?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // vid-16 Why build HX50's own digital cockpit?

    "https://www.youtube.com/embed/cYry6M7W-Qk?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-1
    "https://www.youtube.com/embed/qSJY0FgqXYk?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-2
    "https://www.youtube.com/embed/pkpkeA0Lb_s?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-3
    "https://www.youtube.com/embed/xgeiEOrrPLo?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-4
    "https://www.youtube.com/embed/6QRRM1teF_I?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-5
    "https://www.youtube.com/embed/o20VBfah9O0?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-6
    "https://www.youtube.com/embed/e7GNtVbtLdQ?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-7
    "https://www.youtube.com/embed/rqZCIzyfylQ?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-8
    "https://www.youtube.com/embed/YSI98VvLojM?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-9
    "https://www.youtube.com/embed/N63gFg7yfu4?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-10
    "https://www.youtube.com/embed/V8Gw1RKQhuE?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-11
    "https://www.youtube.com/embed/Vy0Sp8dx50c?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-12
    "https://www.youtube.com/embed/3Pwjtx-tlCg?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-13
    "https://www.youtube.com/embed/e2itD-qQVC4?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-14
    "https://www.youtube.com/embed/A3XFCyTeFMU?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-15
    "https://www.youtube.com/embed/JcgszZaSKBY?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-16
    "https://www.youtube.com/embed/kMfHaVeOM2k?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-17
    "https://www.youtube.com/embed/yFSAVAMVSe4?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-18
    "https://www.youtube.com/embed/8fgCcPX8VlA?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-19
    "https://www.youtube.com/embed/Wdi-FsAajfs?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-20
    "https://www.youtube.com/embed/5XBlEbbQGXk?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-21
    "https://www.youtube.com/embed/oYOXQkDkbtU?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-22
    "https://www.youtube.com/embed/Y0TMJhfkjH0?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-23
    "https://www.youtube.com/embed/zxVI53K4T0k?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-24
    "https://www.youtube.com/embed/E24-sPwfEdA?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-25
    "https://www.youtube.com/embed/k36Agw_ghuc?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-26
    "https://www.youtube.com/embed/SJ94cBpLIgs?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-27
    "https://www.youtube.com/embed/LA0NhumrHaQ?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-28
    "https://www.youtube.com/embed/q_5GdnQHolo?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-29
    "https://www.youtube.com/embed/D5ERVMv9Et0?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-30
    "https://www.youtube.com/embed/i4omcNZU994?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-31
    "https://www.youtube.com/embed/EcH9QhskzkI?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-32
    "https://www.youtube.com/embed/x9onWQLeZHw?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-33
    "https://www.youtube.com/embed/8sB4lE6tQaU?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-34
    "https://www.youtube.com/embed/P98sft1zjOo?start=0&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3", // eps-35
]

let vidIndex = [
    'vid-1',
    'vid-2',
    'vid-3',
    'vid-4',
    'vid-5',
    'vid-6',
    'vid-7',
    'vid-8',
    'vid-9',
    'vid-10',
    'vid-11',
    'vid-12',
    'vid-13',
    'vid-14',
    'vid-15',
    'vid-16',

    'eps-1',
    'eps-2',
    'eps-3',
    'eps-4',
    'eps-5',
    'eps-6',
    'eps-7',
    'eps-8',
    'eps-9',
    'eps-10',
    'eps-11',
    'eps-12',
    'eps-13',
    'eps-14',
    'eps-15',
    'eps-16',
    'eps-17',
    'eps-18',
    'eps-19',
    'eps-20',
    'eps-21',
    'eps-22',
    'eps-23',
    'eps-24',
    'eps-25',
    'eps-26',
    'eps-27',
    'eps-28',
    'eps-29',
    'eps-30',
    'eps-31',
    'eps-32',
    'eps-33',
    'eps-34',
    'eps-35',
]

let vids = document.querySelectorAll(".g-2-c-cover")
let vid = document.getElementById("g-1-m-i-vid")


function smoothScroll() {
    let startPosition = window.pageYOffset;
    let targetPosition = 0
    let duration = 1500
    if (startPosition > 6000) {
        duration = 1500
    } else if (startPosition > 5000) {
        duration = 1400
    } else if (startPosition > 4000) {
        duration = 1300
    } else if (startPosition > 3000) {
        duration = 1200
    } else if (startPosition > 2000) {
        duration = 1100
    } else {
        duration = 1000
    }
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime
        let timeElapsed = currentTime - startTime
        let run = ease(timeElapsed, startPosition, targetPosition, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) {
            requestAnimationFrame(animation)
        }
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (b - (b / 2 * t * t));
        t--;
        return (b - (-b / 2 * (t * (t - 2) - 1)));
    }
    // requestAnimationFrame tells the browser that you wish to perform an animation
    // This line call Once to start the loop
    requestAnimationFrame(animation)
}


function playVid(e) {
    i = vidIndex.indexOf(e.target.id)
    vid.src=videos[i]
    document.getElementById("g-1-toggle").classList.add("g-1-active")
    document.getElementById("g-1-m-toggle").classList.add("g-1-m-active")
    // smoothScroll()
}



vids.forEach(ele => {
    ele.addEventListener('click', playVid)
})

vids.forEach(ele => {
    ele.addEventListener('click', smoothScroll)
})


