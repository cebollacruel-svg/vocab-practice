// 🔧 PASTE YOUR APPS SCRIPT URL HERE
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwFz2G1LF2yQLcgsfVsjzfvhzBvU0ECEdTlkLkGqSjAcydjZOGZd-Keu0L-DFmzcvzF/exec";

/* ---------------------------------------------------------------------
   VOCABULARY DATA  (Unit 4 + Unit 6) - With Images & No Emojis
--------------------------------------------------------------------- */
const FLASHCARDS = [
    // ---- Unit 4 ----
    {w:"abundance", pos:"noun", def:"A very large quantity of something.", ex:"There was an abundance of food at the party.", img:"https://picsum.photos/seed/abundance/400/300"},
    {w:"align", pos:"verb", def:"To arrange things in a straight line or correct position.", ex:"The windows must align properly for good feng shui.", img:"https://picsum.photos/seed/align/400/300"},
    {w:"skeptical", pos:"adjective", def:"Having doubts; not easily convinced.", ex:"She was skeptical about feng shui at first.", img:"https://picsum.photos/seed/skeptical/400/300"},
    {w:"transcend", pos:"verb", def:"To go beyond normal limits.", ex:"Great ideas can transcend cultures and time.", img:"https://picsum.photos/seed/transcend/400/300"},
    {w:"vital", pos:"adjective", def:"Extremely important or necessary.", ex:"Good sleep is vital for your health.", img:"https://picsum.photos/seed/vital/400/300"},
    {w:"anecdote", pos:"noun", def:"A short, interesting personal story.", ex:"He told a funny anecdote about his trip.", img:"https://picsum.photos/seed/anecdote/400/300"},
    {w:"frown upon", pos:"phrase", def:"To disapprove of something.", ex:"Many teachers frown upon using phones in class.", img:"https://picsum.photos/seed/frown/400/300"},
    {w:"enhance", pos:"verb", def:"To improve the quality of something.", ex:"Good lighting can enhance a room.", img:"https://picsum.photos/seed/enhance/400/300"},
    {w:"sharp", pos:"adjective", def:"Quick, clever, and intelligent.", ex:"She's a sharp, peppy businesswoman.", img:"https://picsum.photos/seed/sharp/400/300"},
    {w:"in the midst of", pos:"phrase", def:"In the middle of (a situation or process).", ex:"I'm in the midst of important negotiations.", img:"https://picsum.photos/seed/midst/400/300"},
    {w:"work around", pos:"phrase", def:"To find a way to deal with a problem.", ex:"We can work around the bad lighting.", img:"https://picsum.photos/seed/work/400/300"},
    {w:"talk into", pos:"phrase", def:"To persuade someone to do something.", ex:"Master Sun talked me into keeping the property.", img:"https://picsum.photos/seed/talk/400/300"},
    {w:"catch off guard", pos:"phrase", def:"To surprise someone when they are not ready.", ex:"His question caught me off guard.", img:"https://picsum.photos/seed/guard/400/300"},
    {w:"hard-bitten", pos:"adjective", def:"Tough and very experienced.", ex:"Hard-bitten businessmen often tease him.", img:"https://picsum.photos/seed/bitten/400/300"},

    // ---- Unit 6 ----
    {w:"debacle", pos:"noun", def:"A complete and total failure.", ex:"I worry there will be a huge debacle at work.", img:"https://picsum.photos/seed/debacle/400/300"},
    {w:"overwhelm", pos:"verb", def:"To affect someone so strongly they can't cope.", ex:"I feel overwhelmed by so many messages.", img:"https://picsum.photos/seed/overwhelm/400/300"},
    {w:"get a grip", pos:"phrase", def:"To control your emotions and calm down.", ex:"My friends tell me to get a grip and relax.", img:"https://picsum.photos/seed/grip/400/300"},
    {w:"tuck away", pos:"phrase", def:"To put something in a safe or hidden place.", ex:"Maybe he just tucked his phone away in his pocket.", img:"https://picsum.photos/seed/tuck/400/300"},
    {w:"advocate", pos:"noun", def:"A person who publicly supports something.", ex:"I'm an advocate of online dating.", img:"https://picsum.photos/seed/advocate/400/300"},
    {w:"anonymity", pos:"noun", def:"The state of being unknown or unnamed.", ex:"Some users choose anonymity to hide their identity.", img:"https://picsum.photos/seed/anonymity/400/300"},
    {w:"degrade", pos:"verb", def:"To lower the quality of something.", ex:"Constant texting can degrade real conversation.", img:"https://picsum.photos/seed/degrade/400/300"},
    {w:"velocity", pos:"noun", def:"Speed; the rate something happens.", ex:"The velocity of online news is frightening.", img:"https://picsum.photos/seed/velocity/400/300"},
    {w:"narcissistic", pos:"adjective", def:"Excessively self-centered and self-admiring.", ex:"Some people seem caring but are really narcissistic.", img:"https://picsum.photos/seed/narcissistic/400/300"},
    {w:"solitude", pos:"noun", def:"The state of being alone (in a good way).", ex:"I treasure my solitude and time alone.", img:"https://picsum.photos/seed/solitude/400/300"},
    {w:"superficial", pos:"adjective", def:"Shallow; not deep or meaningful.", ex:"A lot of my real dates felt empty and superficial.", img:"https://picsum.photos/seed/superficial/400/300"},
    {w:"transparent", pos:"adjective", def:"Open and honest; nothing hidden.", ex:"How transparent should users be in their profiles?", img:"https://picsum.photos/seed/transparent/400/300"},
    {w:"persona", pos:"noun", def:"The image or character a person presents.", ex:"He created a confident online persona.", img:"https://picsum.photos/seed/persona/400/300"},
    {w:"collaborate", pos:"verb", def:"To work together with others.", ex:"We collaborate with each other in online games.", img:"https://picsum.photos/seed/collaborate/400/300"}
];

const MATCH_SETS = [
    [
        {w:"vital", d:"extremely important"},
        {w:"skeptical", d:"having doubts; not convinced"},
        {w:"enhance", d:"to improve something"},
        {w:"anecdote", d:"a short personal story"},
        {w:"transcend", d:"to go beyond the limits of"},
        {w:"abundance", d:"a very large quantity"}
    ],
    [
        {w:"debacle", d:"a complete failure"},
        {w:"overwhelm", d:"to be too much to cope with"},
        {w:"anonymity", d:"the state of being unknown"},
        {w:"velocity", d:"speed"},
        {w:"solitude", d:"the state of being alone"},
        {w:"collaborate", d:"to work together"}
    ]
];

const OPPOSITES = [
    {w:"advocate", correct:"critic", opts:["critic","supporter","fan","leader"]},
    {w:"anonymity", correct:"fame", opts:["mystery","fame","silence","privacy"]},
    {w:"distracted", correct:"focused", opts:["focused","tired","busy","lost"]},
    {w:"isolated", correct:"connected", opts:["alone","connected","quiet","distant"]},
    {w:"narcissistic", correct:"unselfish", opts:["proud","unselfish","vain","shy"]},
    {w:"social", correct:"detached", opts:["friendly","detached","open","active"]},
    {w:"solitude", correct:"companionship", opts:["loneliness","companionship","silence","peace"]},
    {w:"superficial", correct:"authentic", opts:["shallow","authentic","empty","fake"]},
    {w:"transparent", correct:"hidden", opts:["clear","hidden","honest","open"]},
    {w:"virtual", correct:"real", opts:["online","real","digital","fake"]}
];

const FORMS = [
    {parts:["The room had an ", " of natural light."], answers:["abundance"], hint:"noun of 'abound'"},
    {parts:["Master Sun helped me ", " the windows correctly."], answers:["align"], hint:"verb (to put in a straight line)"},
    {parts:["Many people feel ", " about feng shui."], answers:["skeptical","sceptical"], hint:"adjective (full of doubt)"},
    {parts:["Good design can ", " the energy of a home."], answers:["enhance"], hint:"verb (to improve)"},
    {parts:["A balanced home gives you more ", " and energy."], answers:["vitality"], hint:"noun of 'vital'"},
    {parts:["She told an interesting ", " about her travels."], answers:["anecdote"], hint:"noun (a short story)"}
];

/* ---------------------------------------------------------------------
   STATE
--------------------------------------------------------------------- */
const state = {
    name:"",
    points:0,
    completed:{flashcards:false, match:false, opposites:false, forms:false},
    flashIncorrect: [],
    formsResults: []
};

const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
function show(id){$$(".screen").forEach(s=>s.hidden=true); $(id).hidden=false; window.scrollTo(0,0);}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function addPoints(n){state.points+=n; $("#pointsCount").textContent=state.points; const p2=$("#pointsCount2"); if(p2)p2.textContent=state.points;}

function markDone(mode){
    state.completed[mode]=true;
    const chk=$("#check-"+mode); chk.textContent="✓"; chk.classList.add("done");
    $(`.mode-card[data-mode="${mode}"]`).classList.add("done");
    const done=Object.values(state.completed).filter(Boolean).length;
    $("#hubBar").style.width=(done/4*100)+"%";
    $("#hubProgressText").textContent=`${done} / 4 activities completed`;
    if(done===4) $("#finishBtn").disabled=false;
}

$("#enterBtn").addEventListener("click",()=>{
    const n=$("#studentName").value.trim();
    if(!n){ $("#studentName").focus(); $("#studentName").style.borderColor="var(--coral)"; return; }
    state.name=n;
    $("#helloName").textContent=n.split(" ")[0];
    show("#hubScreen");
});
$("#studentName").addEventListener("keydown",e=>{if(e.key==="Enter")$("#enterBtn").click();});

$$(".mode-card").forEach(card=>{
    card.addEventListener("click",()=>openMode(card.dataset.mode));
});
$("#backBtn").addEventListener("click",()=>show("#hubScreen"));

function openMode(mode){
    show("#stageScreen");
    const titles={flashcards:"Flashcards",match:"Match It",opposites:"Opposites",forms:"Word Forms"};
    $("#stageTitle").textContent=titles[mode];
    const stage=$("#stage"); stage.innerHTML="";
    if(mode==="flashcards") buildFlashcards(stage);
    if(mode==="match") buildMatch(stage);
    if(mode==="opposites") buildOpposites(stage);
    if(mode==="forms") buildForms(stage);
}

/* =====================================================================
   MODE 1 — FLASHCARDS (With Images)
===================================================================== */
function buildFlashcards(stage){
    let i=0, knew=0, seen=new Set();
    let reviewedWords = new Set();
    const cards=shuffle(FLASHCARDS);

    stage.innerHTML=`
        <p class="instructions">Tap a card to flip it. Read the meaning and example, then say if you knew it.</p>
        <div class="flash-wrap">
            <div class="flashcard" id="fcard">
                <div class="flash-inner">
                    <div class="flash-face flash-front">
                        <img class="fc-img" src="" alt="">
                        <div class="fc-word-wrap">
                            <div class="fc-word"></div>
                            <div class="fc-tap">tap to flip</div>
                        </div>
                    </div>
                    <div class="flash-face flash-back">
                        <div class="fc-pos"></div>
                        <div class="fc-def"></div>
                        <div class="fc-ex"></div>
                    </div>
                </div>
            </div>
            <div class="fc-rate">
                <button type="button" class="fc-btn review" id="fcReview">Review again</button>
                <button type="button" class="fc-btn know" id="fcKnow">I knew it</button>
            </div>
            <div class="flash-controls">
                <button type="button" class="fc-nav" id="fcPrev">←</button>
                <span class="fc-counter" id="fcCounter"></span>
                <button type="button" class="fc-nav" id="fcNext">→</button>
            </div>
        </div>`;

    const card=$("#fcard");
    function render(){
        const c=cards[i];
        card.classList.remove("flipped");
        
        $(".fc-img").src = c.img;
        $(".fc-img").alt = c.w;
        $(".fc-word").textContent=c.w;
        $(".fc-pos").textContent=c.pos;
        $(".fc-def").textContent=c.def;
        $(".fc-ex").textContent="“"+c.ex+"”";
        $("#fcCounter").textContent=`${i+1} / ${cards.length}`;
        seen.add(i);
    }
    card.addEventListener("click",()=>card.classList.toggle("flipped"));
    $("#fcPrev").addEventListener("click",()=>{i=(i-1+cards.length)%cards.length;render();});
    $("#fcNext").addEventListener("click",()=>{i=(i+1)%cards.length;render();});
    
    $("#fcKnow").addEventListener("click",()=>{
        knew++;
        addPoints(2);
        nextOrFinish();
    });
    
    $("#fcReview").addEventListener("click",()=>{
        reviewedWords.add(cards[i].w); 
        nextOrFinish();
    });

    function nextOrFinish(){
        if(seen.size>=cards.length){
            finishFlash();
        }else{
            do{ i=(i+1)%cards.length; }while(seen.has(i));
            render();
        }
    }
    
    function finishFlash(){
        state.flashKnew=knew; 
        state.flashTotal=cards.length;
        state.flashIncorrect = Array.from(reviewedWords);
        
        markDone("flashcards");
        stage.innerHTML=`<div class="complete-banner">
            <div class="big">Nice work!</div>
            <p>You reviewed all <strong>${cards.length}</strong> cards and knew <strong>${knew}</strong> of them.</p>
            <button type="button" class="stage-done-btn" onclick="backToHub()">Back to menu</button>
        </div>`;
        burst();
    }
    render();
}

/* =====================================================================
   MODE 2 — MATCH IT
===================================================================== */
function buildMatch(stage){
    const set=shuffle(MATCH_SETS[Math.floor(Math.random()*MATCH_SETS.length)]);
    const words=shuffle(set.map(x=>x.w));
    let correctCount=0;

    stage.innerHTML=`
        <p class="instructions">Drag each <strong>word</strong> on the left onto its correct <strong>meaning</strong> on the right.</p>
        <div class="match-grid">
            <div class="match-col">
                <h3>Words</h3>
                <div id="wordPool">
                    ${words.map(w=>`<div class="chip" draggable="true" data-w="${w}">${w}</div>`).join("")}
                </div>
            </div>
            <div class="match-col">
                <h3>Meanings</h3>
                ${set.map(x=>`
                    <div class="drop" data-answer="${x.w}">
                        <span class="slot">?</span>
                        <span class="def-text">${x.d}</span>
                    </div>`).join("")}
            </div>
        </div>`;

    let dragged=null;
    $$(".chip").forEach(chip=>{
        chip.addEventListener("dragstart",e=>{dragged=chip;chip.classList.add("dragging");});
        chip.addEventListener("dragend",()=>{chip.classList.remove("dragging");});
        chip.addEventListener("click",()=>{
            $$(".chip").forEach(c=>c.style.outline="");
            if(dragged===chip){dragged=null;chip.style.outline="";}
            else{dragged=chip;chip.style.outline="3px solid var(--teal)";}
        });
    });
    $$(".drop").forEach(drop=>{
        drop.addEventListener("dragover",e=>{e.preventDefault();drop.classList.add("over");});
        drop.addEventListener("dragleave",()=>drop.classList.remove("over"));
        drop.addEventListener("drop",e=>{e.preventDefault();drop.classList.remove("over");place(drop);});
        drop.addEventListener("click",()=>{if(dragged)place(drop);});
    });

    function place(drop){
        if(!dragged || drop.classList.contains("correct")) return;
        const word=dragged.dataset.w;
        const slot=drop.querySelector(".slot");
        if(word===drop.dataset.answer){
            slot.textContent=word;
            drop.classList.remove("wrong");drop.classList.add("correct");
            dragged.classList.add("placed");
            dragged.style.outline="";dragged=null;
            correctCount++;addPoints(3);
            if(correctCount===set.length) finishMatch();
        }else{
            drop.classList.add("wrong");
            setTimeout(()=>drop.classList.remove("wrong"),450);
            dragged.style.outline="";dragged=null;
        }
    }
    function finishMatch(){
        markDone("match");
        setTimeout(()=>{
            stage.innerHTML=`<div class="complete-banner">
                <div class="big">All matched!</div>
                <p>Perfect — you connected all ${set.length} words to their meanings.</p>
                <button type="button" class="stage-done-btn" onclick="backToHub()">Back to menu</button>
            </div>`;
            burst();
        },500);
    }
}

/* =====================================================================
   MODE 3 — OPPOSITES
===================================================================== */
function buildOpposites(stage){
    const qs=shuffle(OPPOSITES).slice(0,8);
    let idx=0, correct=0;

    stage.innerHTML=`<p class="instructions">Tap the word that is the <strong>OPPOSITE</strong>.</p>
        <div class="score-line" id="oScore"></div>
        <div id="oHolder"></div>`;

    function render(){
        const q=qs[idx];
        $("#oScore").textContent=`Question ${idx+1} of ${qs.length}`;
        $("#oHolder").innerHTML=`
            <div class="q-card">
                <div class="q-prompt">Opposite of:</div>
                <div class="q-word">${q.w}</div>
                <div class="opt-row">
                    ${shuffle(q.opts).map(o=>`<button type="button" class="opt" data-o="${o}">${o}</button>`).join("")}
                </div>
            </div>`;
        $$("#oHolder .opt").forEach(btn=>{
            btn.addEventListener("click",()=>{
                $$("#oHolder .opt").forEach(b=>b.classList.add("disabled"));
                if(btn.dataset.o===q.correct){btn.classList.add("correct");correct++;addPoints(3);}
                else{
                    btn.classList.add("wrong");
                    $$("#oHolder .opt").forEach(b=>{if(b.dataset.o===q.correct)b.classList.add("correct");});
                }
                setTimeout(()=>{
                    idx++;
                    if(idx<qs.length) render(); else finishOpp();
                },900);
            });
        });
    }
    function finishOpp(){
        markDone("opposites");
        stage.innerHTML=`<div class="complete-banner">
            <div class="big">Done!</div>
            <p>You got <strong>${correct} / ${qs.length}</strong> opposites right.</p>
            <button type="button" class="stage-done-btn" onclick="backToHub()">Back to menu</button>
        </div>`;
        if(correct>=qs.length-1) burst();
    }
    render();
}

/* =====================================================================
   MODE 4 — WORD FORMS (With inline feedback)
===================================================================== */
function buildForms(stage){
    stage.innerHTML=`<p class="instructions">Type the correct <strong>form of the word</strong> in each blank. Use the hint!</p>
        <div id="formsHolder">
            ${FORMS.map((f,k)=>`
                <div class="form-card">
                    <div class="form-sentence">
                        ${f.parts[0]}<input class="form-input" id="fi${k}" autocomplete="off">${f.parts[1]||""}
                        <span class="form-hint">Hint: ${f.hint}</span>
                        <div class="form-fb-inline" id="ffb${k}"></div>
                    </div>
                </div>`).join("")}
        </div>
        <button type="button" class="check-forms-btn" id="checkForms">Check my answers</button>
        <div class="form-feedback" id="formFb"></div>`;

    $("#checkForms").addEventListener("click",()=>{
        let correct=0;
        let formsData = [];

        FORMS.forEach((f,k)=>{
            const inp=$("#fi"+k);
            const val=inp.value.trim().toLowerCase();
            const fbInline=$("#ffb"+k);
            
            inp.classList.remove("correct","wrong");
            let isCorrect = f.answers.includes(val);

            if(isCorrect){
                inp.classList.add("correct");
                correct++;
                fbInline.textContent = "Correct!";
                fbInline.className = "form-fb-inline good";
            } else {
                inp.classList.add("wrong");
                fbInline.textContent = `Incorrect. The correct answer is: ${f.answers[0]}`;
                fbInline.className = "form-fb-inline bad";
            }

            // Save data for Google Sheets
            formsData.push({
                word: f.answers[0],
                typed: val || "(left blank)",
                correct: isCorrect
            });
        });

        state.formsResults = formsData; 
        addPoints(correct*3);
        
        const fb=$("#formFb");
        fb.textContent=`You got ${correct} / ${FORMS.length} correct.`;
        fb.style.color = correct===FORMS.length ? "var(--good)" : "#c77700";
        
        if(correct===FORMS.length){
            burst();
            $("#checkForms").outerHTML=`<button type="button" class="stage-done-btn" onclick="backToHub()">Back to menu</button>`;
        } else {
            $("#checkForms").textContent = "Finish and go to menu";
            $("#checkForms").onclick = backToHub;
        }
        markDone("forms");
    });
}

function backToHub(){ document.querySelectorAll(".screen").forEach(s=>s.hidden=true); document.querySelector("#hubScreen").hidden=false; window.scrollTo(0,0); }

/* =====================================================================
   FINISH — send participation to Google Sheets
===================================================================== */
$("#finishBtn").addEventListener("click",()=>{
    const msg=$("#finishMsg");
    const acts=Object.keys(state.completed).filter(k=>state.completed[k]).join(", ");
    
    // Create detailed feedback for Sheets
    const flashDetails = (state.flashKnew!=null) 
        ? `Flashcards: knew ${state.flashKnew}/${state.flashTotal}. Failed words: ${state.flashIncorrect.length ? state.flashIncorrect.join(", ") : "None"}` 
        : "Flashcards: Incomplete";
        
    const formsDetails = state.formsResults.length > 0 
        ? `\nWord Forms Data: ` + state.formsResults.map(r => `[${r.word}] Typed: '${r.typed}' -> ${r.correct ? 'OK' : 'FAIL'}`).join(" | ")
        : "\nWord Forms: Incomplete";

    const selfCheckData = flashDetails + formsDetails;

    msg.className="finish-msg"; msg.textContent="Sending...";

    if(!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes("PASTE_YOUR")){
        msg.className="finish-msg err";
        msg.textContent="The teacher still needs to add the Apps Script link.";
        return;
    }

    fetch(APPS_SCRIPT_URL,{
        method:"POST",
        headers:{"Content-Type":"text/plain;charset=utf-8"},
        body:JSON.stringify({
            type:"practice",
            nombre:state.name,
            actividades:acts,
            autoevaluacion:selfCheckData,
            notas:`Total points: ${state.points}`
        })
    })
    .then(r=>r.json())
    .then(res=>{
        if(res.success){
            msg.className="finish-msg ok";
            msg.innerHTML=`Great job, <strong>${state.name}</strong>! Your participation was saved. (${state.points} points)`;
            $("#finishBtn").disabled=true;
            bigBurst();
        }else{throw new Error();}
    })
    .catch(()=>{
        msg.className="finish-msg err";
        msg.textContent="Could not save. Please check your internet and try again.";
    });
});

/* =====================================================================
   CONFETTI
===================================================================== */
function makeConfetti(count){
    const canvas=$("#confetti"),ctx=canvas.getContext("2d");
    canvas.width=innerWidth;canvas.height=innerHeight;
    const colors=["#ff5d73","#15bdb0","#ffb340","#7b6cf6","#1faa59"];
    const parts=[];
    for(let i=0;i<count;i++)parts.push({x:Math.random()*canvas.width,y:-20,vx:(Math.random()-.5)*6,vy:Math.random()*4+2,s:Math.random()*8+4,c:colors[i%colors.length],r:Math.random()*360,rs:(Math.random()-.5)*12});
    let f=0;
    (function loop(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.r+=p.rs;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r*Math.PI/180);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s);ctx.restore();});
        if(f++<160)requestAnimationFrame(loop);else ctx.clearRect(0,0,canvas.width,canvas.height);
    })();
}
function burst(){makeConfetti(90);}
function bigBurst(){makeConfetti(180);}
