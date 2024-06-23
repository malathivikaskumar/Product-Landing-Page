! function() {
    const t = window,
        e = document.documentElement;
    if (e.classList.remove("no-js"), e.classList.add("js"), document.body.classList.contains("has-animations")) {
        const t = window.sr = ScrollReveal();
        t.reveal(".feature", {
            duration: 600,
            distance: "20px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "right",
            interval: 100
        }), t.reveal(".media-canvas", {
            duration: 600,
            scale: ".95",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            viewFactor: .5
        })
    }
    const n = document.querySelector(".device-mockup");

    function i() {
        n.classList.add("has-loaded")
    }
    n.complete ? i() : n.addEventListener("load", i);
    const s = document.querySelector(".features"),
        a = s.querySelector(".section-title"),
        o = document.querySelector(".feature-inner");

    function r() {
        let t = s.querySelector(".features-inner").getBoundingClientRect().left,
            e = o.getBoundingClientRect().left,
            n = parseInt(e - t);
        a.style.marginLeft = e > t ? `${n}px` : 0
    }
    r(), t.addEventListener("resize", r);
    const c = document.querySelectorAll(".is-moving-object");
    let l = 0,
        d = 0,
        u = 0,
        g = 0,
        f = 0,
        m = e.clientWidth,
        p = e.clientHeight;
    c && t.addEventListener("mousemove", function(t, e) {
        let n = null,
            i = e;
        return (...e) => {
            let s = Date.now();
            (!n || s - n >= i) && (n = s, t.apply(this, e))
        }
    }(function(e) {
        ! function(e, n) {
            l = e.pageX, d = e.pageY, u = t.scrollY, g = m / 2 - l, f = p / 2 - (d - u);
            for (let t = 0; t < n.length; t++) {
                const e = n[t].getAttribute("data-translating-factor") || 20,
                    i = n[t].getAttribute("data-rotating-factor") || 20,
                    s = n[t].getAttribute("data-perspective") || 500;
                let a = [];
                n[t].classList.contains("is-translating") && a.push("translate(" + g / e + "px, " + f / e + "px)"), n[t].classList.contains("is-rotating") && a.push("perspective(" + s + "px) rotateY(" + -g / i + "deg) rotateX(" + f / i + "deg)"), (n[t].classList.contains("is-translating") || n[t].classList.contains("is-rotating")) && (a = a.join(" "), n[t].style.transform = a, n[t].style.transition = "transform 1s ease-out", n[t].style.transformStyle = "preserve-3d", n[t].style.backfaceVisibility = "hidden")
            }
        }(e, c)
    }, 150))
}();

// vars
let result = document.querySelector('.result'),
img_result = document.querySelector('.img-result'),
img_w = document.querySelector('.img-w'),
img_h = document.querySelector('.img-h'),
//options = document.querySelector('.options'),
save = document.querySelector('.save'),
cropped = document.querySelector('.cropped'),
dwn = document.querySelector('.download'),
upload = document.querySelector('#file-input'),
cropper = '';

upload.addEventListener('change', (e) => {
  if (e.target.files.length) {
    const reader = new FileReader();
    reader.onload = (e)=> {
      if(e.target.result){
				let img = document.createElement('img');
				img.id = 'image';
				img.src = e.target.result
				result.innerHTML = '';
                result.appendChild(img);
				save.classList.remove('hide');
                result.classList.remove('hide');
				cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

save.addEventListener('click',(e)=>{
  e.preventDefault();
    if(cropper != '') {
        let imgSrc = cropper.getCroppedCanvas({
                width: img_w.value
            }).toDataURL();
        cropped.classList.remove('hide');
        img_result.classList.remove('hide');
        cropped.src = imgSrc;
        dwn.classList.remove('hide');
        dwn.download = 'vikas_store.png';
        dwn.setAttribute('href',imgSrc);
    }
});

function hide(){
    console.log("hello");
    cropped.classList.add('hide');
    img_result.classList.add('hide');
    dwn.classList.add('hide');
    result.classList.add('hide');

    upload.value='';
    //cropped='';
    console.log("hello1");
}