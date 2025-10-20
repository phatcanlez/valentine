// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    )
    .call(() => {
      // Kích hoạt nhiều hiệu ứng khi kết thúc luồng chính
      startConfetti();
      startSparkles();
      startHearts();
      startFireworksBurst();
      initBalloonInteractions();
      initAudio();
    });

  // Restart Animation on click (mở rộng: reset hiệu ứng)
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
    startConfetti();
    startSparkles();
    startHearts();
    startFireworksBurst();
  });
};

// ---------- Confetti generator ----------
function startConfetti(count = 80) {
  const confettiContainer = document.getElementById("confetti");
  if (!confettiContainer) return;
  confettiContainer.innerHTML = "";
  const colors = [
    "#ff6b6b",
    "#ffd93d",
    "#6bcB77",
    "#6ec1ff",
    "#c77dff",
    "#ff9bb3",
  ];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * window.innerWidth;
    el.style.left = startX + "px";
    el.style.top = Math.random() * 60 + "px";
    el.style.width = 6 + Math.random() * 12 + "px";
    el.style.height = 8 + Math.random() * 16 + "px";
    confettiContainer.appendChild(el);

    const duration = 2.6 + Math.random() * 2.4;
    const endY = window.innerHeight + 150 + Math.random() * 300;
    const endX = startX + (Math.random() * 600 - 300);
    TweenMax.to(el, duration, {
      y: endY,
      x: endX,
      rotation: Math.random() * 720,
      ease: Power2.easeOut,
      opacity: 0.95,
      onComplete: () => {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      },
    });
  }
}

// ---------- Sparkles around wish ----------
function startSparkles(n = 22) {
  const container = document.getElementById("sparkles");
  if (!container) return;
  container.innerHTML = "";
  const target = document.querySelector(".wish-hbd");
  const rect = target
    ? target.getBoundingClientRect()
    : {
        left: window.innerWidth / 2,
        top: window.innerHeight / 3,
        width: 0,
        height: 0,
      };
  for (let i = 0; i < n; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    const x = rect.left + rect.width * Math.random();
    const y = rect.top + rect.height * Math.random();
    s.style.left = x + (Math.random() * 40 - 20) + "px";
    s.style.top = y + (Math.random() * 40 - 20) + "px";
    container.appendChild(s);
    TweenMax.fromTo(
      s,
      0.9 + Math.random() * 0.8,
      { scale: 0, opacity: 1 },
      {
        scale: 1.6,
        opacity: 0,
        ease: Power1.easeOut,
        onComplete: () => s.remove(),
      }
    );
  }
}

// ---------- Floating hearts ----------
function startHearts(freq = 10) {
  const container = document.getElementById("hearts");
  if (!container) return;
  // tạo một số hearts theo tần suất
  for (let i = 0; i < freq; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + Math.random() * 60;
    h.style.left = startX + "px";
    h.style.top = startY + "px";
    h.style.opacity = 0.9;
    h.style.transform = `scale(${0.8 + Math.random() * 0.8}) rotate(${
      Math.random() * 20 - 10
    }deg)`;
    container.appendChild(h);

    const duration = 4 + Math.random() * 3;
    TweenMax.to(h, duration, {
      y: -(100 + Math.random() * 400),
      x: startX + (Math.random() * 200 - 100),
      opacity: 0,
      ease: Power1.easeOut,
      onComplete: () => {
        if (h && h.parentNode) h.parentNode.removeChild(h);
      },
    });
  }
  // tạo loop nhẹ nhàng
  setTimeout(() => startHearts(Math.max(6, Math.floor(freq * 0.9))), 1200);
}

// ---------- Simple fireworks burst ----------
function startFireworksBurst(count = 3) {
  const container = document.getElementById("fireworks");
  if (!container) return;
  for (let k = 0; k < count; k++) {
    const cx = 80 + Math.random() * (window.innerWidth - 160);
    const cy = 120 + Math.random() * (window.innerHeight / 2);
    const pieces = 18 + Math.floor(Math.random() * 18);
    for (let i = 0; i < pieces; i++) {
      const p = document.createElement("div");
      p.className = "firework-piece";
      p.style.left = cx + "px";
      p.style.top = cy + "px";
      p.style.background = `hsl(${Math.floor(Math.random() * 360)},80%,60%)`;
      container.appendChild(p);
      const angle = (Math.PI * 2 * i) / pieces;
      const dist = 80 + Math.random() * 260;
      const tx = cx + Math.cos(angle) * dist;
      const ty = cy + Math.sin(angle) * dist;
      TweenMax.to(p, 0.9 + Math.random() * 0.9, {
        x: tx - cx,
        y: ty - cy,
        scale: 0.9 + Math.random() * 0.6,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: () => {
          if (p && p.parentNode) p.parentNode.removeChild(p);
        },
      });
    }
  }
}

// ---------- Balloon hover and click interactivity ----------
function initBalloonInteractions() {
  const balloons = document.querySelectorAll(".baloons img");
  balloons.forEach((b) => {
    b.addEventListener("mouseenter", () => {
      // small sparkle burst near balloon
      spawnSparklesAtElement(b, 8);
    });
    b.addEventListener("click", (e) => {
      // burst confetti from balloon position
      burstConfettiAt(e.clientX, e.clientY, 28);
      // small fireworks
      spawnFireworkAt(e.clientX, e.clientY);
      // scale pop
      TweenMax.to(b, 0.25, {
        scale: 1.18,
        rotation: -8,
        ease: Back.easeOut,
        yoyo: true,
        repeat: 1,
      });
    });
  });
}

function spawnSparklesAtElement(el, n = 10) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const container = document.getElementById("sparkles");
  for (let i = 0; i < n; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = cx + (Math.random() * rect.width - rect.width / 2) + "px";
    s.style.top = cy + (Math.random() * rect.height - rect.height / 2) + "px";
    container.appendChild(s);
    TweenMax.fromTo(
      s,
      0.6 + Math.random() * 0.6,
      { scale: 0, opacity: 1 },
      {
        scale: 1.8,
        opacity: 0,
        ease: Power1.easeOut,
        onComplete: () => s.remove(),
      }
    );
  }
}

function burstConfettiAt(x, y, pieces = 40) {
  const confettiContainer = document.getElementById("confetti");
  if (!confettiContainer) return;
  for (let i = 0; i < pieces; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    const colors = [
      "#ff6b6b",
      "#ffd93d",
      "#6bcB77",
      "#6ec1ff",
      "#c77dff",
      "#ff9bb3",
    ];
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = x + (Math.random() * 40 - 20) + "px";
    el.style.top = y + (Math.random() * 40 - 20) + "px";
    el.style.width = 6 + Math.random() * 10 + "px";
    el.style.height = 8 + Math.random() * 12 + "px";
    confettiContainer.appendChild(el);
    const ang = Math.random() * Math.PI * 2;
    const dist = 120 + Math.random() * 360;
    TweenMax.to(el, 0.9 + Math.random() * 1.1, {
      x: Math.cos(ang) * dist,
      y: Math.sin(ang) * dist + 30,
      rotation: Math.random() * 720,
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: () => {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      },
    });
  }
}

function spawnFireworkAt(x, y) {
  const container = document.getElementById("fireworks");
  if (!container) return;
  const pieces = 12 + Math.floor(Math.random() * 12);
  for (let i = 0; i < pieces; i++) {
    const p = document.createElement("div");
    p.className = "firework-piece";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.background = `hsl(${Math.floor(Math.random() * 360)},80%,60%)`;
    container.appendChild(p);
    const ang = (Math.PI * 2 * i) / pieces + (Math.random() * 0.3 - 0.15);
    const dist = 60 + Math.random() * 180;
    TweenMax.to(p, 0.8 + Math.random() * 0.9, {
      x: Math.cos(ang) * dist,
      y: Math.sin(ang) * dist,
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: () => {
        if (p && p.parentNode) p.parentNode.removeChild(p);
      },
    });
  }
}

// ---------- Audio control ----------
let audioInitialized = false;
function initAudio() {
  if (audioInitialized) return;
  audioInitialized = true;
  const audio = document.getElementById("bgMusic");
  const btn = document.getElementById("muteBtn");
  if (!audio || !btn) return;
  // try play (may be blocked by browser - user can click muteBtn to enable)
  audio.volume = 0.45;
  const tryPlay = () => {
    audio.play().catch(() => {});
  };
  tryPlay();
  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      btn.textContent = "🔊";
    } else {
      audio.pause();
      btn.textContent = "🔈";
    }
  });
}

// ---------- Helper exports keep existing fetch/resolve ----------
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

// Run
resolveFetch().then(animationTimeline());

// ---------- New heart-heavy effects ----------

// Heart rain: continuously spawn hearts that float up (lighter than startHearts)
function startHeartRain(count = 28) {
  const container = document.getElementById("hearts");
  if (!container) return;
  // spawn several now
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "extra-heart";
    // random size variants
    if (Math.random() > 0.8) h.classList.add("heart-lg");
    else if (Math.random() > 0.5) h.classList.add("heart-med");
    // position at bottom random
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 1.2;
    h.style.left = startX + "px";
    h.style.top = window.innerHeight + "px";
    h.style.opacity = 0.95;
    // random hue tint
    const hue = 340 + Math.floor(Math.random() * 30);
    h.style.background = `linear-gradient(135deg, hsl(${hue} 90% 65%) 0%, hsl(${
      hue + 10
    } 90% 78%) 60%)`;
    container.appendChild(h);

    const dur = 4 + Math.random() * 5;
    h.style.animation = `heartFloat ${dur}s linear ${delay}s forwards`;
    // small pop-in
    TweenMax.fromTo(
      h,
      0.6,
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 0.96, ease: Back.easeOut }
    );
    // cleanup after animation
    setTimeout(() => {
      if (h && h.parentNode) h.parentNode.removeChild(h);
    }, (dur + delay) * 1000 + 600);
  }
  // repeat occasionally
  setTimeout(
    () => startHeartRain(Math.max(12, Math.floor(count * 0.85))),
    1400 + Math.random() * 1200
  );
}

// Spawn hearts at a specific position (click/pop)
function spawnHeartAt(x, y, size = "med", pop = true) {
  const container = document.getElementById("hearts");
  if (!container) return;
  const h = document.createElement("div");
  h.className = "extra-heart";
  if (size === "lg") h.classList.add("heart-lg");
  if (size === "sm") h.classList.add("heart-trail");
  const hue = 320 + Math.floor(Math.random() * 50);
  h.style.background = `linear-gradient(135deg, hsl(${hue} 85% 60%) 0%, hsl(${
    hue + 8
  } 85% 72%) 60%)`;
  h.style.left = x + "px";
  h.style.top = y + "px";
  container.appendChild(h);

  if (pop) {
    TweenMax.fromTo(
      h,
      0.55,
      { scale: 0.2, opacity: 0 },
      {
        scale: 1.06,
        opacity: 1,
        ease: Back.easeOut,
        onComplete: () => {
          // after pop, float upward
          TweenMax.to(h, 2 + Math.random() * 2, {
            y: -(120 + Math.random() * 420),
            x: Math.random() * 120 - 60,
            opacity: 0,
            ease: Power1.easeOut,
            onComplete: () => {
              if (h && h.parentNode) h.parentNode.removeChild(h);
            },
          });
        },
      }
    );
  } else {
    TweenMax.to(h, 3.2, {
      y: -(200 + Math.random() * 480),
      opacity: 0,
      ease: Power1.easeOut,
      onComplete: () => {
        if (h && h.parentNode) h.parentNode.removeChild(h);
      },
    });
  }
}

// Heart trail that follows mouse (lightweight)
let heartTrailEnabled = false;
let heartTrailTimer = null;
function enableHeartTrail(enable = true) {
  const container = document.getElementById("hearts");
  if (!container) return;
  if (enable === heartTrailEnabled) return;
  heartTrailEnabled = enable;
  if (!enable) {
    window.removeEventListener("mousemove", onMouseHeart);
    return;
  }
  window.addEventListener("mousemove", onMouseHeart);
}

function onMouseHeart(e) {
  // throttle to avoid perf issues
  if (heartTrailTimer) return;
  const x = e.clientX;
  const y = e.clientY;
  // spawn a few tiny hearts
  for (let i = 0; i < 2; i++) {
    spawnHeartAt(
      x + (Math.random() * 14 - 7),
      y + (Math.random() * 14 - 7),
      "sm",
      false
    );
  }
  heartTrailTimer = setTimeout(() => {
    heartTrailTimer = null;
  }, 60);
}

// Big floating decorative hearts (one-time)
function spawnBigFloatingHeart(leftPercent = 50, duration = 8, delay = 0) {
  const container = document.getElementById("hearts");
  if (!container) return;
  const b = document.createElement("div");
  b.className = "big-heart";
  b.style.left = leftPercent + "%";
  b.style.top = 80 + Math.random() * 10 + "%";
  b.style.background = `linear-gradient(135deg, rgba(255,110,150,0.95), rgba(255,165,195,0.95))`;
  container.appendChild(b);
  b.style.animation = `bigFloat ${duration}s ease-in-out ${delay}s forwards`;
  setTimeout(() => {
    if (b && b.parentNode) b.parentNode.removeChild(b);
  }, (duration + delay) * 1000 + 300);
}

// integrate new heart effects into existing flow
const originalAnimationTimeline = animationTimeline;
function _patchHeartEffects() {
  // ensure heart trail and rain start after main timeline
  // modify existing call site by also calling new heart functions (this is safe to call multiple times)
  startHeartRain(30);
  enableHeartTrail(true);
  // spawn a couple of big hearts for decoration
  spawnBigFloatingHeart(20, 10, 0.2);
  spawnBigFloatingHeart(70, 11, 0.8);
}

// Hook into end of main timeline by wrapping existing callback
// call _patchHeartEffects() where earlier code called startConfetti/startSparkles etc.
const _orig_call = tl.call;
tl.call = function (callback, params, scope) {
  _orig_call.call(tl, callback, params, scope);
  if (callback === startConfetti) {
    // patch to also call heart effects
    _patchHeartEffects();
  }
};

// Ensure balloon click also spawns hearts: augment initBalloonInteractions
const _orig_initBalloonInteractions = initBalloonInteractions;
function _patched_initBalloonInteractions() {
  _orig_initBalloonInteractions();
  // attach global click to spawn hearts too (light)
  document.querySelectorAll(".baloons img").forEach((b) => {
    b.addEventListener("click", (e) => {
      // spawn a shower of small hearts
      for (let i = 0; i < 10; i++) {
        spawnHeartAt(
          e.clientX + (Math.random() * 80 - 40),
          e.clientY + (Math.random() * 80 - 40),
          Math.random() > 0.85 ? "lg" : "med",
          true
        );
      }
    });
  });
}

// patch resolve: call heart patch after fetch/animation
const _orig_resolveFetch = resolveFetch;
function _patched_resolveFetch() {
  return _orig_resolveFetch().then(() => {
    // when animationTimeline is started, delay calling patch to ensure DOM ready
    setTimeout(() => {
      _patchHeartEffects();
    }, 1600);
  });
}

// replace exported resolver with patched one (safe in this file context)
resolveFetch = _patched_resolveFetch;

// augment initBalloonInteractions reference for later calls
initBalloonInteractions = _patched_initBalloonInteractions;
