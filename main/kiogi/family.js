document.addEventListener('DOMContentLoaded', function() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const main = document.getElementById('main');
    const head = document.getElementById('head'); 

    box1.addEventListener('click', function() {
        // box1이 클릭되면 화면을 바꿔주는 코드 작성

        head.innerHTML = `
            <div class="text">
                <h2 id="maintext">발급안내</h2>
                <p id="subtext">안내사항을 읽으시고 [확인]을 눌려주세요.</p>
            </div>
        `;

        main.innerHTML = `
            <div class="info">
                <div class="infobox1">
                    <p><span style="color: green;">✔</span> 가족관계증명서는 본인인 "나"를 기준으로<br>
                    <span>3대(부모님,배우자,자녀)</span>에 한해 가족구성원의<br>
                    인적사항으로 확인이 가능합니다.<br></p>
                </div>

                <div class="infobox1">
                    <p><span style="color: green;">✔</span> <span>형제, 자매</span>의 인적사항 확인이 필요한 경우<br>
                    민원창구에 문의하여 주시기 바랍니다.<br></p>
                </div>
            </div>

            <div class="button-container">
                <div class="button" id="button">✔ 확인</div>
            </div>
        `;

            const yesButton = document.getElementById('button');
            yesButton.addEventListener('click', function() {

                head.innerHTML = `
                <div class="text">
                    <h2 id="maintext">주민등록번호 입력</h2>
                    <p id="subtext">주민등록번호를 입력하시고 [확인]을 눌려주세요.</p>
                </div>
            `;
    
            main.innerHTML = `
                <div class="box">
                    <p><img src="./titleikon.png">주민등록표(초본)</p>
                </div>
    
                <div class="container">
                    <div class="rectangle">
                        <p>______-_______</p>    
                    </div>
                    <p id="numbertext">본인확인이 필요한 증명서입니다</p>
                    <p id="numbertext"><span class="green">주민등록증을 발급 받으신 분에</span> 한하여 <br>발급 가능합니다</p>                
                    <img src="./keypad.jpg" id="keypad">
                </div>
    
                <div class="button2-container">
                    <div class="button2" id="button2">✔ 확인</div>
                </div>
            `;

                const yesButton = document.getElementById('button2');
                yesButton.addEventListener('click', function() {

                    head.innerHTML = ` //타이틀 글 삭제해주고
                    <div class="text">
                        <h2 id="maintext"></h2>
                        <p id="subtext"></p>
                    </div>
                `;
                    main.innerHTML = `
                        <div class="text">
                            <h2 id="maintext"><span style="color: white;">지문인식기에</span><br>오른손 엄지 손가락<span style="color: white;">을 올려주세요</span></h2>
                        </div>

                        <div class="button-container3"> 
                            <div class="button3" id="button3">✔ 확인</div>
                        </div>

                        <div class="image-container">
                            <img src="./finger.jpg" id="finger">
                        </div>
                `;

                main.style.marginLeft = '-36%'; // 예시로 20%로 설정

                    const yesButton = document.getElementById('button3');
                    yesButton.addEventListener('click', function() {

                        main.style.marginLeft = '0%'; // 예시로 20%로 설정

                        head.innerHTML = ` //타이틀 글 삭제해주고
                        <div class="text">
                            <h2 id="maintext"></h2>
                            <p id="subtext"></p>
                        </div>
                    `;
                        head.innerHTML = `
                        <div class="text">
                            <h2 id="maintext">알림</h2>
                            <p id="subtext">안내사항을 읽으시고 [확인]을 눌려주세요.</p>
                        </div>
                    `;
                        main.innerHTML = `
                        <div class="info">
                            <div class="infobox1" id="infobox1">
                                <p><span style="color: green;">✔</span> 증명서를 제출용으로 발급받고자 하는 경우에는<br>
                                <span>증명서 제출 요구지(예: 관공서, 회사, 은행 등)</span>에게<br>
                                필요한 증명서의 종륲를 미리 확인한 후<br>
                                발급받으시기 바랍니다<br></p>
                            </div>
                        </div>

                        <div class="redbox">화면에 개인정보가 노출될 수 있으므로<br>
                            유의하여 주십시오.</div>
            
                        <div class="button-container4">
                            <div class="button4" id="button4">✔ 확인</div>
                        </div>
                    `;

                        const yesButton = document.getElementById('button4');
                        yesButton.addEventListener('click', function() {

                            head.innerHTML = `
                            <div class="text">
                                <h2 id="maintext">증명구분 선택</h2>
                                <p id="subtext">일반증명서, 상세증명서, 특정증명서 중 선택해 주세요.</p>
                            </div>
                        `;
                            main.innerHTML = `
                                <div class="category">
                                    <div class="gory1">
                                        <h2>일반증명서</h2>
                                        <p><span>부모, 배우자, 생존한 현재의 혼인 중의 자녀</span>에<br>
                                        관한 사항이 기재되는 증명서</p>
                                    </div>
                                    <div class="gory2">
                                        <h2>상세증명서</h2>
                                        <p><span>부모, 배우자, 모든자녀</span>에<br>
                                        관한 사항이 기재되는 증명서</p>
                                    </div>
                                    <div class="gory3">
                                        <h2>특정증명서</h2>
                                        <p><span>선택한 부/모, 배우자 및 자녀</span>에<br>
                                        관한 사항이 기재되는 증명서</p>
                                    </div>

                                    <p class="em">* 용도에 알맞은 증명서를 선택하여 발급하여 주시기 바랍니다.</p>
                                </div>

                                <div class="button-container5">
                                    <div class="button5" id="button5">✔ 확인</div>
                                </div>
                        `;

                        const yesButton = document.getElementById('button5');
                        yesButton.addEventListener('click', function() {
                        
                            head.innerHTML = `
                            <div class="text">
                                <h2 id="maintext">주민등록번호 공개 여부 선택</h2>
                                <p id="subtext">증명서와 주민등록번호 공개 여부를 선택해주세요.</p>
                            </div>
                        `;
                        
                            main.innerHTML = `
                            
                            <div class="moneybox">
                                <div class="moneybox1" id="moneybox1">
                                    <p><span class="none">전 체 공 개</span><br><br>
                                    <span class="greenchange">[주민등록번호<br>전체 공개]</span><br><br>
                                    예) 000000-000000</p>
                                </div>
    
                                <div class="moneybox2" id="moneybox2">
                                    <p><span class="none">뒷자리 비공개</span><br><br>
                                    <span class="greenchange">[주민등록번호<br>뒷자리 비공개]</span><br><br>
                                    예) 000000-000000</p>
                                    </div>
                            </div>
    
                            <div class="button-container6"> 
                                <div class="button6" id="button6">✔ 확인</div>
                            </div>
                        `;

                            const yesButton = document.getElementById('button6');
                            yesButton.addEventListener('click', function() {
                                head.innerHTML = `
                                    <div class="text">
                                        <h2 id="maintext">수수료 면제 신청</h2>
                                        <p id="subtext">수수료 면제 신청 여부를 선택해주세요.</p>
                                    </div>
                                `;
                    
                                main.innerHTML = `
                                <div class="moneybox">
                                    <div class="moneybox1" id="moneybox1">
                                        <p><span class="none">수수료 면제</span><br><br>
                                        <span class="greenchange">[면제대상자]</span><br>
                                        국민기초생활수급자<br>
                                        국가보훈대상자<br>
                                        한부모가족지원대상자<br></p>
                                    </div>

                                    <div class="moneybox2" id="moneybox2">
                                        <p><span class="none">일 반</span><br><br>
                                        <span class="greenchange">[면제대상자 아님]</span><br>
                                    </div>
                                </div>

                                <div class="button-container6"> 
                                    <div class="button6" id="button6">✔ 확인</div>
                                </div>
                            `;

                                const button6 = document.getElementById('button6');
                                button6.addEventListener('click',function() {
                                    
                                    head.innerHTML = `
                                    <div class="text">
                                        <h2 id="maintext">발급부수 선택</h2>
                                        <p id="subtext">발급할 부수를 선택하고 [확인]을 눌러 주세요.</p>
                                    </div>
                                `;
                                
                                    main.innerHTML = `
                                    
                                    <div class ="many" id ="many">
                                        <h3>발급부수</h3>
                                        <div class="manybox" id="manybox">?</div>
                                        <p>최대 9부까지 선택 가능합니다. </p>
                                    </div>
        
                                    <img id="minikeypad" src="./minikeypad.jpg">
                                    
                                    <div class="button-container7"> 
                                        <div class="button7" id="button7">✔ 확인</div>
                                    </div>
                                    `;

                                    const button7 = document.getElementById('button7');
                                    button7.addEventListener('click',function() {
                                    
                                    head.innerHTML = `
                                    <div class="text">
                                        <h2 id="maintext">증명서 일괄 발급 여부</h2>
                                        <p id="subtext">증명서를 추가하여 일괄 발급할지 여부를 선택해 주세요.</p>
                                    </div>
                                `;
                                
                                    main.innerHTML = `
                                    

                                    <div class="paper">
                                        <div class="paperbox">
                                            <div class="paperbox1" id="paperbox1">
                                                <p><span class="none">증명서 추가</span><br><br>
                                                <span class="greenchange">[선택한 문서 외<br> 추가 발급]</span></p>
                                            </div>

                                            <div class="paperbox2" id="paperbox2">
                                                <p><span class="none">선택 완료</span><br><br>
                                                <span class="greenchange">[선택한 문서만 발급]</span><br>
                                            </div>
                                        </div>

                                        <div class="addornoadd">
                                            <div class="add">
                                                <p><span>[추가 발급 가능한 증명서]</span><br></p>
                                                <p>주민등록, 차량, 보건복지, 가족관계등록부<br>제적부, 병적증명서, 지방세, 국세증명 등</p>
                                            </div>

                                            <div class="noadd">
                                                <p><span>[추가 발급 가능한 증명서]</span><br></p>
                                                <p>주민등록, 차량, 보건복지, 가족관계등록부<br>제적부, 병적증명서, 지방세, 국세증명 등</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div class="button-container8"> 
                                        <div class="button8" id="button8">✔ 확인</div>
                                    </div>
                                    `;

                                    const button8 = document.getElementById('button8');
                                    button8.addEventListener('click',function() {
                                    
                                    head.innerHTML = `
                                    <div class="text">
                                        <h2 id="maintext">민원 신청 내용 확인</h2>
                                        <p id="subtext">민원 신청 내용을 확인하시고 결제 방법을 선택해 주세요.</p>
                                    </div>
                                `;
                                
                                    main.innerHTML = `
                                    <div class="pay">
                                        <div class="cardpay">
                                        <img src="./card.jpg">                                            <h3>카  드</h3>
                                            <p>(신용카드, 체크카드 등)</p>
                                        </div>

                                        <div class="papermoneypay">
                                        <img src="./papermoney.jpg">                                            
                                            <h3>현   금</h3>
                                            <p>(동전, 천원권 지폐)</p>
                                        </div>
                                    </div>

                                    <div class="button-container9"> 
                                        <div class="button9" id="button9">✔ 종 료</div>
                                    </div>
                                        
                                    `;
                                    // 버튼 요소를 가져옵니다
                                    var closeButton = document.getElementById("button9");

                                    // 버튼을 클릭할 때 실행될 함수를 정의합니다
                                    closeButton.addEventListener("click", function() {
                                        // 창을 닫는 로직을 여기에 구현합니다.
                                        // 예를 들어, 현재 창을 닫는 방법은 다음과 같을 수 있습니다:
                                        window.close();
                                    });
                                });
                            });
                                });        
                            });
                        });
                    });
                });
            });
        });
    });
});

