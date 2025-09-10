const questions = [
  {
    question: "เขาเอ่ยถามว่าคุณอยากทำตำแหน่งหน้าที่อะไรบนเรือลำนี้?",
    answers: [
      { text: "กัปตัน", value: 0 },
      { text: "พ่อครัว", value: 1 },
      { text: "พยาบาล", value: 2 },
      { text: "ลูกเรือธรรมดา", value: 1 }
    ]
  },
  {
    question: "คุณมองไปรอบๆก่อนจะพบกับลูกเรือคนอื่นๆมากมาย คุณจะทำยังไงต่อไป?",
    answers: [
      { text: "มองพวกเขาเงียบๆและพิจารณาว่าคนไหนคู่ควรที่คุณจะทำความรู้จักด้วย", value: 1 },
      { text: "กระตือรือร้นและรีบเข้าไปทำความรู้จักกับพวกเขา", value: 0 },
      { text: "ค่อยๆเข้าหาพวกเขาทีละนิด", value: 2 },
      { text: "รอให้พวกเขาเป็นคนเข้าหาคุณเอง", value: 1 }
    ]
  },
  {
    question: "“เฮ้! เจ้าเด็กใหม่! นายคิดจะมาทำอะไรกลางท้องทะเลแบบนี้เนี่ย?”",
    answers: [
      { text: "ฉันตามหาความฝันที่หายไปของฉัน", value: 1 },
      { text: "ฉันอยากหลีกหนีจากผู้คน", value: 0 },
      { text: "ฉันอยากท้าทายสิ่งใหม่ๆ", value: 1 },
      { text: "ฉันชอบทะเลเพราะทะเลเป็นสิ่งผ่อนคลายเดียวของฉัน", value: 2 }
    ]
  },
  {
    question: "“เจ้าเด็กใหม่นี่เจ๋งใช้ได้เลย ฮ่าๆ นายมีความมุ่งมั่นแบบนี้ช่วยทำความสะอาดท้ายเรือแทนพวกเราทีซิ”",
    answers: [
      { text: "ตอบรับและไปทำความสะอาดแทนพวกเขาอย่างกระตือรื้อรน", value: 2 },
      { text: "พยักหน้าแต่กลับไม่ทำตามที่พวกเขาร้องขอ", value: 0 },
      { text: "ตอบอย่างตรงไปตรงมาว่ามันเป็นหน้าที่ของพวกเขาไม่ใช่ของคุณ คุณไม่มีความจำเป็นต้องทำ", value: 1 },
      { text: "คุณไม่ตอบพวกเขาแต่คุณก็ทำตามคำขอของพวกเขาอย่างง่ายดาย", value: 2 }
    ]
  },
  {
    question: "“คุณใช้เวลาหลายชั่วโมงในการทำความรู้จักกับผู้คน ตอนนี้คุณรู้สึกอย่างไร?”",
    answers: [
      { text: "ตื่นเต้นที่ได้อยู่ท่ามกลางผู้คน", value: 0 },
      { text: "กระสับกระส่ายเล็กน้อยแต่คุณยังยืนอยู่ต่อได้", value: 1 },
      { text: "เริ่มรู้สึกแย่และอยากปลีกตัวออกไปอยู่คนเดียวสักพัก", value: 2 },
      { text: "คุณไม่รู้สึกอะไรเลย มันก็แค่การเข้าสังคม", value: 0 }
    ]
  },
  {
    question: "คุณจะทำอย่างไร?",
    answers: [
      { text: "ร่วมร้องเพลงขับร้องกับพวกเขาอย่างสนุกสุดเหวี่ยง", value: 0 },
      { text: "พยายามทำให้ตัวเองไม่เป็นจุดสนใจ", value: 2 },
      { text: "หนีเข้าไปในห้องพักตอนที่ไม่มีใครสนใจคุณ", value: 1 },
      { text: "อดทนอยู่จนจบงาน พูดคุยกับคนอื่นบ้างเป็นบางครั้ง", value: 2 }
    ]
  },
  {
    question: "คุณรู้สึกอย่างไรบ้าง?",
    answers: [
      { text: "สนุกและเต้นรำไปพร้อมพวกเขาท่ามกลางเสียงและแสงมากมาย", value: 0 },
      { text: "คุณอยู่ที่มุมเรือแต่ถ้าหากมีคนชวนคุณก็จะร่วมด้วย", value: 1 },
      { text: "พยายามหลีกเลี่ยงจากฝูงชนให้ได้มากที่สุด", value: 1 },
      { text: "คุณรู้สึกสนุกอยู่นิดๆแต่ไม่ได้มากจนบ้าระห่ำ", value: 2 }
    ]
  },
  {
    question: "คุณรู้สึกอย่างไรบ้างกับเหตุการณ์ในวันนี้?",
    answers: [
      { text: "ไม่อยากคิดอะไรแล้ว อยากจะนอนพักตอนนี้", value: 0 },
      { text: "สนุกสุดเหวี่ยงแบบที่ไม่เคยเป็นมาก่อน คุณอยากให้วันพรุ่งนี้มาถึงเร็วๆ", value: 0 },
      { text: "กระสับกระส่ายเล็กน้อยแต่การได้เผชิญอะไรใหม่ๆก็เป็นสิ่งที่ท้าทาย", value: 2 },
      { text: "อยากกลับไปยังที่ที่จากมา", value: 1 }
    ]
  },
  {
    question: "คุณตกใจกับคำพูดของกัปตันเป็นอย่างมาก เพราะ",
    answers: [
      { text: "เสียเวลาในการผจญภัยและทำความรู้จักคนอื่นๆ", value: 1 },
      { text: "ชีวิตทั้ง 2 วันถูกใช้ไปอย่างไร้ความหมาย", value: 1 },
      { text: "แปลกใจเพราะคุณไม่เคยตื่นมาแล้วรู้สึกสดชื่นขนาดนี้มาก่อน", value: 2 },
      { text: "แอบดีใจเล็กๆที่ไม่ได้ยินเสียงความวุ่นวายตลอดวันที่คุณหลับไป", value: 2 }
    ]
  },
  {
    question: "คุณรู้ได้ในทันทีว่านั้นเป็นคำพูดเหน็บแนม คุณจะทำยังไง?",
    answers: [
      { text: "คุณหลบตาพวกเขาพยายามเลี่ยงไม่สนทนา", value: 2 },
      { text: "คุณตอบพวกเขาอย่างตรงไปตรงมา ว่ามันไม่ใช่ความผิดของคุณเลยที่ทำให้พวกเขาต้องทำงานมากขึ้น", value: 0 },
      { text: "คุณเดินหนีออกมาจากพวกเขาโดยไม่หันหลังกลับไปมอง", value: 0 },
      { text: "คุณได้แต่ทนฟังและยอมทำความสะอาดแทนพวกเขา 2 วัน", value: 2 }
    ]
  },
  {
    question: "คุณจะทำยังไงเมื่อต้องเผชิญหน้ากับภัยที่คุณตั้งตารอมาโดยตลอด?",
    answers: [
      { text: "จับอาวุธให้มั่นคงและเผชิญหน้ากับมันโดยไม่ย่ำเกรง", value: 1 },
      { text: "พยายามหาที่ซ่อนหลบจากมัน", value: 0 },
      { text: "พยายามช่วยเหลือลูกเรือคนอื่นๆให้ไม่มีใครได้รับบาดเจ็บสาหัส", value: 2 },
      { text: "ยังคงยืนยันต่อสู้แม้จะสั่นกลัว", value: 2 }
    ]
  },
  {
    question: "คุณจะทำอย่างไร?",
    answers: [
      { text: "มองเขาและหันกลับไปต่อสู้", value: 0 },
      { text: "ตะโกนบอกว่าเขาสมควรแล้วที่โดนแบบนี้", value: 0 },
      { text: "รีบเข้าไปช่วยทันที", value: 2 },
      { text: "แม้จะไม่อยากช่วยแต่ก็ต้องจำใจ", value: 1 }
    ]
  },
  {
    question: "คุณที่กำลังตกลงสู่พื้นทะเลด้วยกำลังของชายที่รอดชีวิตมาได้เพราะ?",
    answers: [
      { text: "ตะโกนร้องอย่างสุดเสียงแม้จะรู้ว่าจะไม่มีใครได้ยิน", value: 1 },
      { text: "กัดฟันมองหน้าของชายคนนั้นอย่างโกรธแค้น", value: 0 },
      { text: "ร้องไห้พลางคิดว่าตัวเองไม่สมควรโดนตอบแทนแบบนี้", value: 1 },
      { text: "รู้สึกสิ้นหวังที่ไม่มีใครสามารถช่วยเหลือคุณได้เลย", value: 1 }
    ]
  },
  {
    question: "ตอนนี้คุณรู้สึกยังไงบ้างเมื่อความฝันไม่เป็นไปตามที่คุณหวัง?",
    answers: [
      { text: "เศร้า", value: 2 },
      { text: "น่าเบื่อ", value: 0 },
      { text: "โกรธ", value: 1 },
      { text: "ผิดหวัง", value: 1 }
    ]
  },
  {
    question: "หากสามารถเลือกเส้นทางอื่นที่ไม่ใช่ท้องทะเลแห่งนี้ คุณจะยังอยากเปลี่ยนเส้นทางไหม ?",
    answers: [
      { text: "เปลี่ยน", value: 1 },
      { text: "ไม่เปลี่ยน", value: 2 }
    ]
  }
];

// ==== element selection ====
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const clickSound = document.getElementById("click-sound");
const introScreen = document.getElementById("intro-screen");
const startButton = document.getElementById("start-btn");

// ==== story screens ====
const midStoryScreen = document.getElementById("mid-story");
const midNextButton = document.getElementById("mid-next-btn");
const secondStoryScreen = document.getElementById("second-story");
const secondNextButton = document.getElementById("second-next-btn");
const thirdStoryScreen = document.getElementById("third-story");
const thirdNextButton = document.getElementById("third-next-btn");
const fourthStoryScreen = document.getElementById("fourth-story");
const fourthNextButton = document.getElementById("fourth-next-btn");
const fifthStoryScreen = document.getElementById("fifth-story");
const fifthNextButton = document.getElementById("fifth-next-btn");
const sixthStoryScreen = document.getElementById("sixth-story");
const sixthNextButton = document.getElementById("sixth-next-btn");
const seventhStoryScreen = document.getElementById("seventh-story");
const seventhNextButton = document.getElementById("seventh-next-btn");
const eighthStoryScreen = document.getElementById("eighth-story");
const eighthNextButton = document.getElementById("eighth-next-btn");
const nineStoryScreen = document.getElementById("nine-story");
const nineNextButton = document.getElementById("nine-next-btn");
const story10 = document.getElementById("story-10");
const story10Next = document.getElementById("story-10-next");
const story11 = document.getElementById("story-11");
const story11Next = document.getElementById("story-11-next");
const story12 = document.getElementById("story-12");
const story12Next = document.getElementById("story-12-next");
const story13 = document.getElementById("story-13");
const story13Next = document.getElementById("story-13-next");
const story14 = document.getElementById("story-14");
const story14Next = document.getElementById("story-14-next");
const story15 = document.getElementById("story-15");
const story15Next = document.getElementById("story-15-next");

// ==== quiz variables ====
let currentQuestionIndex = 0;
let selectedValues = [];

// ==== start quiz ====
function startQuiz() {
    currentQuestionIndex = 0;
    selectedValues = [];
    nextButton.innerText = "ถัดไป";
    nextButton.style.display = "none";
    document.querySelector(".app").style.display = "block";
    showQuestion();
}

// ==== show question ====
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.value, button));
        answerButtons.appendChild(button);
    });
}

// ==== reset buttons ====
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
}

// ==== select answer ====
function selectAnswer(value, button) {
    clickSound.play();
    selectedValues[currentQuestionIndex] = value;
    Array.from(answerButtons.children).forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    nextButton.style.display = "block";
}

function showResult() {
    resetState();

    // 👉 ทำให้หน้าคำถาม/ผลลัพธ์แสดงอีกครั้ง
    document.querySelector(".app").style.display = "block";

    const total = selectedValues.reduce((acc, val) => acc + val, 0);

    const introText = `
    <p style="margin-bottom:1em;">
    สุดท้ายแล้วไม่ว่าคุณจะเลือกอะไร คุณก็ไม่สามารถย้อนกลับไปแก้ไขอดีตได้อีกแล้ว<br>
    ทุกอย่างล้วนหล่อหลอมให้กลายเป็นคุณในตอนนี้ ปัจจุบัน ที่นี้ และคุณยังคงหายใจอยู่<br>
    คุณเริ่มรู้สึกถึงสัมผัสอันบางเบากำลังโอบล้อมรอบตัวคุณไว้<br>
    อ่อนโยนและน่าคิดถึง.......
    </p>`;

    let resultText = "";

   if (total <= 11) {
        resultText = `
        <h2 style="color:#007BFF;">🔵 คุณคือ โจรสลัดผู้อ่อนไหว</h2>
        <p>คุณเป็นคนที่ใจดี อ่อนโยนและซื่อสัตย์ทำให้ผู้คนมากมายมักสบายใจที่จะได้อยู่กับคุณ คุณมักจะพบเห็นหลายสิ่งหลายอย่างที่ผู้คนไม่ทันสังเกตเห็นได้อย่างง่ายดาย คุณมีจิตใจที่โอบอ้อมอารีสามารถโอบกอดได้แม้กระทั่งผู้ที่จะแทงคุณจากข้างหลังในวันหน้า แต่ในบางครั้งความละเอียดอ่อนและความใจดีของคุณกลับทำร้ายตัวคุณเอง คุณมักจะทำหลายสิ่งหลายอย่างโดยไม่แสวงผลและละเลยความรู้สึกของตัวเอง คุณมักจะตกอยู่ในสถานการณ์บีบบังคับที่ตัวคุณเองไม่กล้าปฏิเสธแม้จะเป็นคำขอที่คุณไม่ได้ประโยชน์ใดตอบกลับมาเลย</p>
        <p>คุณควรใจดีกับตัวเองมากขึ้น ลองพูดคุยและเปิดใจยอมรับความคิดและความรู้สึกของตัวเอง คุณเป็นคนเก่งและมีความอดทนสูงไม่ว่าจะเหตุการณ์แบบไหนคุณจงเชื่อมั่นในตัวเอง และในสักวันคุณจะสามารถก้าวผ่านตัวตนเดิมที่คุณรู้สึกว่ายังไม่ดีพอไปได้</p>`;
    } else if (total <= 21) {
        resultText = `
        <h2 style="color:#FFC107;">🟡 คุณคือ โจรสลัดผู้เป็นกลาง</h2>
        <p>คุณเป็นคนที่มีความเป็นของตัวสูงแต่ไม่ได้หยาบกระด้างจนคุณไม่อาจเห็นสิ่งรอบตัวได้ คุณมีความคิดและความเชื่อมั่นของตนเองแต่คุณยังเปิดกว้างที่จะยอมรับแนวคิดอื่น ๆ ได้ คุณรับฟังเสียงกระซิบแต่ถ้าหากมันไม่ใช่สิ่งที่ดีต่อคุณ คุณก็จะปล่อยผ่านมันไปราวกับการเทน้ำลงทะเลสาบ</p>
        <p>คุณเป็นคนที่มีความยืดหยุ่นสูง แต่ในบางสถานการณ์คุณเองก็จำเป็นที่จะต้องยืนหยัดและเผชิญหน้ามากกว่าจะเก็บเงียบ และในบางสถานการณ์คุณควรจะผ่อนปรนเพื่อเข้าใจ ไม่ใช่แค่รับฟังเพียงอย่างเดียว</p>`;
    } else {
        resultText = `
        <h2 style="color:#DC3545;">🔴 คุณคือ โจรสลัดผู้ซื่อตรง</h2>
        <p>คุณเป็นคนที่มีความมั่นใจในตัวเองสูงและซื่อตรงต่อความคิดของตน คุณมักจะยืนหยัดได้โดยไม่มีสิ่งใดสามารถโค่นล้มคุณได้จนกว่าแผนการของคุณจะสำเร็จ และคุณยังเป็นผู้ที่น่ายกย่องและจัดการทุกอย่างได้อย่างง่ายดาย เหมาะสมในตำแหน่งที่จะเป็นผู้นำ</p>
        <p>แต่ในบางครั้งความมั่นใจของคุณอาจทำให้คุณลืมที่จะหันมองสิ่งรอบข้าง จนคนรอบข้างโดนผลกระทบจากการกระทำของคุณอยู่บ่อยครั้ง เพราะฉะนั้นคุณควรเปิดใจและรับฟังพวกเขาบ้างเพื่อให้การอยู่ร่วมกันเต็มไปด้วยความสุขไร้ซึ่งความกังวลใด ๆ</p>`;
    }

    const scoreText = `<p style="margin-top:1em; font-weight:bold;">คะแนนรวม: ${total} จาก ${questions.length * 2} คะแนน</p>`;

    // 👉 แสดงผลลัพธ์ใน questionElement
    questionElement.innerHTML = introText + resultText + scoreText;

    nextButton.innerText = "ทำแบบทดสอบอีกครั้ง";
    nextButton.style.display = "block";

    nextButton.onclick = () => {
    window.location.href = "index.html";  // โหลดหน้าแรกใหม่
    };
}


// ==== next button for quiz ====
nextButton.addEventListener("click", () => {
    if (selectedValues[currentQuestionIndex] === undefined) {
        alert("กรุณาเลือกคำตอบก่อนกดถัดไป");
        return;
    }

    currentQuestionIndex++;

    const storyMap = {
    1: midStoryScreen,     // หลังข้อ 1
    2: secondStoryScreen,  // หลังข้อ 2
    3: thirdStoryScreen,   // หลังข้อ 3
    4: fourthStoryScreen,  // หลังข้อ 4
    5: fifthStoryScreen ,   // หลังข้อ 5
    6: sixthStoryScreen ,
    7: seventhStoryScreen ,
    8: eighthStoryScreen ,
    9: nineStoryScreen ,
   10: story10 ,
   11: story11,
   12: story12,
   13: story13,
   14: story14,
   15: story15,
};

    if (storyMap[currentQuestionIndex]) {
        toggleStory(storyMap[currentQuestionIndex]);
        return;
    }

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// ==== toggle story ====
function toggleStory(storyScreen) {
    document.querySelector(".app").style.display = "none";
    storyScreen.style.display = "flex";
}

// ==== story next buttons binding ====
const storyNextButtons = [
    {btn: midNextButton, screen: midStoryScreen},
    {btn: secondNextButton, screen: secondStoryScreen},
    {btn: thirdNextButton, screen: thirdStoryScreen},
    {btn: fourthNextButton, screen: fourthStoryScreen},
    {btn: fifthNextButton, screen: fifthStoryScreen},
    {btn: sixthNextButton, screen: sixthStoryScreen},
    {btn: seventhNextButton, screen: seventhStoryScreen},
    {btn: eighthNextButton, screen: eighthStoryScreen},
    {btn: nineNextButton, screen: nineStoryScreen},
    {btn: story10Next, screen: story10},
    {btn: story11Next, screen: story11},
    {btn: story12Next, screen: story12},
    {btn: story13Next, screen: story13},
    {btn: story14Next, screen: story14},
    {btn: story15Next, screen: story15, isLast: true} // กำหนดเป็น story สุดท้าย
];

// binding ปุ่ม story
storyNextButtons.forEach(item => {
    if (!item.btn) return;
    item.btn.addEventListener("click", () => {
        item.screen.style.display = "none"; // ซ่อน story ปัจจุบัน
        if (item.isLast) {
            showResult(); // ถ้าเป็น story สุดท้าย ให้โชว์ผลลัพธ์
        } else {
            document.querySelector(".app").style.display = "block";
            showQuestion(); // ถ้าไม่ใช่ story สุดท้าย กลับไป quiz
        }
    });
});

// ==== start button ====
document.querySelector(".app").style.display = "none";
startButton.addEventListener("click", () => {
    introScreen.style.display = "none";
    startQuiz();
});

