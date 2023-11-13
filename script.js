const questions = [
  {
    question: "1. 나는 평소에 음식을 많이 남기는 편이다.",
    options: ["아니다", "보통이다", "그렇다"]
  },
  {
    question: "2. 나는 평소에 고기를 많이 섭취하는 편이다.",
    options: ["아니다 (일주일에 3회 미만)", "보통이다 (일주일에 4-5회 미만)", "그렇다 (하루 1번 이상)"]
  },
  {
    question: "3. 나는 소시지, 햄 등 육가공식품을 자주 먹는 편이다.",
    options: ["아니다 (일주일에 3회 미만)", "보통이다 (일주일에 4-5회 미만)", "그렇다 (하루 1번 이상)"]
  },
  {
    question: "4. 나는 채소를 즐겨먹지 않는 편이다.",
    options: ["아니다 (하루 1번 이상)", "보통이다 (일주일에 4-5회 미만)", "그렇다 (일주일에 3회 미만)"]
  },
  {
    question: "5. 나는 과일을 자주 섭취하지 않는 편이다.",
    options: ["아니다 (하루 1번 이상)", "보통이다 (일주일에 4-5회 미만)", "그렇다 (일주일에 3회 미만)"]
  },
  {
    question: "6. 나는 현미나 잡곡밥보다 백미를 자주 섭취하는 편이다.",
    options: ["아니다 (일주일에 3회 미만)", "보통이다 (일주일에 4-5회 미만)", "그렇다 (하루 1번 이상)"]
  },
  {
    question: "7. 마트에 갔더니 국내산 고등어와 노르웨이산 고등어 중 <br> 노르웨이산 고등어를 세일하고 있다. 당신의 선택은?",
    options: ["푸드마일리지가 덜 나오는 국내산 제품을 사야지!", "국내산이 탄소 배출량이 더 적은 건 아는데.. <br> 가격이 싼 노르웨이산이 아른거려~", "세일이라니, 개이득인데? 노르웨이산 사자!"]
  },
  {
    question: "8. 친구와 대화하던 중, 친구가 푸드마일리지와 <br> 로컬푸드 운동에 참여하고 있다는 말을 듣게 된 당신, 당신의 반응은?",
    options: ["푸드마일리지도 줄이고 로컬푸드도 살리고! <br> 나도 열심히 참여하고 있어.", "푸드마일리지, 로컬푸드 뭔지 알지… <br> 근데 일상에서 실천하긴 쉽지 않아.", "푸드마일리지? 그게 뭐야?"]
  },
  {
    question: "9. 우연히 ‘못난이 농산물’과 관련된 기사를 접했다. 당신의 반응은?",
    options: ["못난이 농산물 잘 알고 있지, <br> 어디서 구매하는지도 알고 자주 사용하고 있다구!", "못난이 농산물? 들어는 봤는데 한 번도 구매해본 적은 없어.", "못난이 농산물? 그게 뭐야?"]
  },
  {
    question: "10. 장을 보고 나오는 길 당신의 손에 주로 들려 있는 것은?",
    options: ["오늘도 장바구니 가져왔지~", "아차차 오늘은 장바구니를 까먹었네, 다음엔 꼭 챙겨와야지", "장바구니 귀찮아~ 일회용 비닐이 편해"]
  },
  {
    question: "11. 저녁거리를 장보기 위해 마트에 방문했다, 당신의 선택은?",
    options: ["저탄소 식품 인증마크가 붙은 식품을 사야지 ~", "저탄소 식품 인증마크가 붙으면 좋겠지만, <br> 마크가 없어도 가격이 더 싼 제품을 지나치긴 어렵다", "저탄소 식품 인증마크? 그게 뭐야? 싸면 장땡이지~"]
  },
  {
    question: "12. 배가 고파서 집 앞 식당에서 밥을 먹으려고 한다. 당신의 선택은?",
    options: ["집 앞이니까 이 정도는 걸어가서 매장에서 먹어야지.", "집 앞이니까 일회용 용기에 포장해와서 먹어야겠다", "나가기 귀찮아, 배달시켜 먹자!"]
  },
  {
    question: "13. 오랜만에 집에서 밥을 차려 먹으려고 한다. 당신의 선택은?",
    options: ["채소, 생선, 고기 최대한 균형 있게 먹어야지~", "좋아하는 것만 먹기보단 채소도 조금.. 먹어본다", "고기 잔뜩! 내가 좋아하는 음식만 골라먹는다"]
  },
  {
    question: "14. 요리를 하고 나니 자투리 채소(버섯 끝부분, 양파 껍질 등)가 남았다. <br> 정리할 때 당신의 행동은?",
    options: ["자투리 채소는 모아뒀다가 육수 우릴 때 써야지. <br> 버리면 다 음식물 쓰레기라구", "그때 그때 쓸 일이 있으면 쓰고 아니면 버린다", "딱히 쓸 것 같지도 않고 귀찮으니까 그냥 버려야지 ~"]
  },
  // Add more questions here
];

let currentQuestionIndex = 0;
let totalScore = 0;

function startTest() {
  // Hide the start container
  const startContainer = document.querySelector('.start-container');
  startContainer.style.display = 'none';

  // Show the main container and test content
  const mainContainer = document.querySelector('.main-container');
  mainContainer.style.display = 'flex';

  // Display the first question
  displayCurrentQuestion();
}


function displayCurrentQuestion() {
  const questionSection = document.getElementById("questionSection");
  const currentQuestion = questions[currentQuestionIndex];
  let optionsHtml = "";

  currentQuestion.options.forEach((option, index) => {
    optionsHtml += `
      <button type="button" class="btn btn-secondary option-btn" onclick="selectOption(${index + 1})">${option}</button>
    `;
  });

  questionSection.innerHTML = `
    <p>${currentQuestion.question}</p>
    ${optionsHtml}
  `;
}

displayCurrentQuestion();

function selectOption(value) {
  // Handle the option selection and scoring logic
  totalScore += parseInt(value);

  // Rotate to the next question or show results
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayCurrentQuestion();
  } else {
    // Display the result
    displayResult();
  }
}

function displayResult() {
  // Calculate the final result based on the total score
  let resultText = "";
  if (totalScore < 21) {
    resultText = "어른 구용 – 당신은 훌륭한 저탄소 식단 실천인!";
  } else if (totalScore < 28) {
    resultText = "애기 구용 – 조금 더 노력이 필요한 저탄소 식단 실천인!";
  }	else if (totalScore < 35) {
    resultText = "미니 탄깨비 – 탄소 배출 옐로카드! 최악은 면했으나 노력이 필요해요";
  } else {
    resultText = "대왕 탄깨비 – 탄소 배출 빨간불! <br> 저탄소 식단 실천이 시급해요";
  }

  // Explanation for the result
  let explanation = "";
  switch (resultText) {
    case "어른 구용 – 당신은 훌륭한 저탄소 식단 실천인!":
      explanation = "어른 구용은?";
      break;
    case "애기 구용 – 조금 더 노력이 필요한 저탄소 식단 실천인!":
      explanation = "애기 구용은?";
      break;
    case "미니 탄깨비 – 탄소 배출 옐로카드! 최악은 면했으나 노력이 필요해요":
      explanation = "미니 탄깨비는?";
      break;
    default:
      explanation = "대왕 탄깨비는?";
  }

  let detail = "";
  switch (resultText) {
    case "어른 구용 – 당신은 훌륭한 저탄소 식단 실천인!":
      detail = "당신은 성숙하고 훌륭한 지구용사! 저탄소 식단을 통해 지구를 지키는데 동참하고 있군요. <br> 푸드마일리지나 못난이 농산물, 인증마크 등 저탄소 식생활에 관련된 지식을 잘 알고 있고 실천할 준비가 되어 있어요. <br> 육류 소비를 줄이고, 식물성 식품을 통해 건강과 환경 모두 챙길 줄 아는 당신, 지구 지키기에 앞장서 볼까요?";
      break;
    case "애기 구용 – 조금 더 노력이 필요한 저탄소 식단 실천인!":
      detail = "당신은 성장하고 있는 예비 지구용사! 저탄소 식생활에 관심이 있고 실천하려는 의지도 있군요! <br> 때로는 편리함과 환경 사이에서 갈등하기도 하지만, 탄소 배출량을 줄이기 위한 선택이 쌓인다면 어엿한 지구용사가 될 수 있을 거예요.";
      break;
    case "미니 탄깨비 – 탄소 배출 옐로카드! 최악은 면했으나 노력이 필요해요":
      detail = "당신은 탄소 배출로 지구를 아프게 하고 있는 탄깨비! 식생활 중의 탄소 배출을 통해 지구와 환경에 악영향을 주고 있군요. <br> 푸드 마일리지나 못난이 농산물, 인증 마크 등 저탄소 식생활과 관련된 지식에 대해 자세히 알지 못하고, 저탄소 식단 실천을 위해서는 공부가 필요해요. <br> 육류 소비를 줄이고, 식물성 식품 섭취를 통해 건강과 환경을 모두 챙길 수 있도록 구용이와 함께 공부해볼까요?";
      break;
    default:
      detail = "당신은 탄소를 내뿜으며 달리는 자동차와 같아요, 브레이크가 필요한 탄깨비! <br> 식생활 중의 탄소 배출을 줄여 지구와 환경을 보호하는 방법을 모르고 있군요.. <br> 푸드 마일리지나 못난이 농산물, 인증마크 등 저탄소 식생활과 관련된 지식의 공부와 저탄소 식단의 실천이 매우 시급해요! <br> 지금이라도 육류 소비를 줄이고, 식물성 식품 섭취를 통해 건강과 환경 모두 챙겨보아요. 막상 시작해보면 생각보다 어렵지 않을 거예요!";
  }
	
	
  // Hide the form and display the result and explanation
  const form = document.getElementById("mbti-form");
  form.style.display = "none";
	
  const containerMt5 = document.querySelector(".container.mt-5");
  containerMt5.style.display = "none";
	
  const pageTitle = document.getElementById("pageTitle");
  pageTitle.style.display = "none";
	
  document.body.classList.add("results-displayed");	

  
// Insert image dynamically
  let imgsrc;
  switch (resultText) {
    case "어른 구용 – 당신은 훌륭한 저탄소 식단 실천인!":
      imgsrc = "9yong.png";
      break;
    case "애기 구용 – 조금 더 노력이 필요한 저탄소 식단 실천인!":
      imgsrc = "baby9yong.png";
      break;
    case "미니 탄깨비 – 탄소 배출 옐로카드! 최악은 면했으나 노력이 필요해요":
      imgsrc = "minitan.png";
      break;
    default:
      imgsrc = "kingtan.png";
  }
  const resultImage = document.getElementById("resultImage");
  resultImage.src = imgsrc;
  resultImage.style.display = "block";
	
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
  	<div class="text-center">
		<h3>나의 탄소배출 유형은?</h3>
		<h2 class="result-text" >${resultText}</h2>
		<p class="explanation" >${explanation}</p>
		<p class="detail" >${detail}</p>
		<a href="www.instagram.com">구용이와 함께 저탄소 식생활 공부해보기 click→@i_am_9yong</a>
	</div>
	<img src="${imgsrc}" alt="Test Image" id="resultImage">
  `;
}
