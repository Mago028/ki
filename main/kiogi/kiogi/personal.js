document.addEventListener('DOMContentLoaded', function() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const main = document.getElementById('main');
    const head = document.getElementById('head'); 

    box1.addEventListener('click', function() {
        // box1이 클릭되면 화면을 바꿔주는 코드 작성

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

            <div class="button-container">
                <div class="button" id="button">✔ 확인</div>
            </div>
        `;

        const yesButton = document.getElementById('button');
        yesButton.addEventListener('click', function() {

            head.innerHTML = ` //타이틀 글 삭제해주고
            <div class="text">
                <h2 id="maintext"></h2>
                <p id="subtext"></p>
            </div>
        `;

            //button2는 지문
            main.innerHTML = `
                <div class="text">
                    <h2 id="maintext"><span style="color: white;">지문인식기에</span><br>오른손 엄지 손가락<span style="color: white;">을 올려주세요</span></h2>
                </div>

                <div class="button-container2"> 
                    <div class="button2" id="button2">✔ 확인</div>
                </div>

                <div class="image-container">
                    <img src="./finger.jpg" id="finger">
                </div>
        `;

        // margin-left 적용 // 왜그런지 모르겠음 걍 기울어지더라 ;;;;
        main.style.marginLeft = '-36%'; // 예시로 20%로 설정

        //button3는 세대구성원 선택
        const button2 = document.getElementById('button2');
        button2.addEventListener('click', function() {

        main.style.marginLeft = '0%'; // 예시로 20%로 설정

            head.innerHTML = `
                <div class="text">
                    <h2 id="maintext">세대구성원 선택</h2>
                    <p id="subtext">발급을 원하는 세대구성원을 선택해주세요</p>
                </div>
        `;

            main.innerHTML = `
            <div class="button-container3"> //지문
                <div class="button3" id="button3">✔ 확인</div>
            </div>

            <div class="select" id="select">
                <p id="name">성  명 : <span>박OO</span></p>
                <p id="relation">세대주와의 관계 : <span> 본인</span></p>
                <p id="person">주민등록번호 : <span>000101 - *******</span></p>
                <p>-----------------------------------------------</p>
            </div>
        `;

            const button3 = document.getElementById('button3');
            button3.addEventListener('click',function() {
                
                head.innerHTML = `
                <div class="text">
                    <h2 id="maintext">선택사항 안내</h2>
                </div>
            `;

                main.innerHTML = `
                <div class="content">

                    <div class="button-container4"> 
                        <div class="button4" id="button4">✔ 확인</div>
                    </div>

                    <div class="information">
                        <p>주민등록초본 발급 시 선택사항에 대해<br><span>법원(등기소), 교육기관, 공공기관, 금융기관, 개인확인용<br></span>
                        <span>5가지 선택사항</span>으로 발급을 도와 드리겠습니다. </p>
                    </div>

                    <div class="error">* 다른 용도로 발급을 원하시는 경우 <br><span>개별항목을 선택하여 발급 가능</span></div>
                        <img id="selectinfo" src="./selectinfo.jpg">
                    </div>
            `;

                const button4 = document.getElementById('button4');
                button4.addEventListener('click',function() {
                    
                    head.innerHTML = `
                    <div class="text">
                        <h2 id="maintext">주민등록표(초본) 선택사항</h2>
                        <p id="subtext">개인정보 보호를 위해 아래의 초본 사항 중<br>필요한 사항을 선택하신 후 확인 버튼을 눌러주세요.</p>
                    </div>
                `;

                    maintext.style.marginTop = '-1%';
                
                    main.innerHTML = `
                    <img id="result" src="./result.jpg">

                    <div class="button-container5"> 
                        <div class="button5" id="button5">✔ 확인</div>
                    </div>
                `;
                    const button5 = document.getElementById('button5');
                    button5.addEventListener('click',function() {
                        
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






















box2.addEventListener('click', function() {
    // box1이 클릭되면 화면을 바꿔주는 코드 작성

    head.innerHTML = `
        <div class="text">
            <h2 id="maintext">주민등록번호 입력</h2>
            <p id="subtext">주민등록번호를 입력하시고 [확인]을 눌려주세요.</p>
        </div>
    `;

    main.innerHTML = `
        <div class="box">
            <p><img src="./titleikon.png">주민등록표(등본)</p>
        </div>

        <div class="container">
            <div class="rectangle">
                <p>______-_______</p>    
            </div>
            <p id="numbertext">본인확인이 필요한 증명서입니다</p>
            <p id="numbertext"><span class="green">주민등록증을 발급 받으신 분에</span> 한하여 <br>발급 가능합니다</p>                
            <img src="./keypad.jpg" id="keypad">
        </div>

        <div class="button-container">
            <div class="button" id="button">✔ 확인</div>
        </div>
    `;

    const yesButton = document.getElementById('button');
    yesButton.addEventListener('click', function() {

        head.innerHTML = ` //타이틀 글 삭제해주고
        <div class="text">
            <h2 id="maintext"></h2>
            <p id="subtext"></p>
        </div>
    `;

        //button2는 지문
        main.innerHTML = `
            <div class="text">
                <h2 id="maintext"><span style="color: white;">지문인식기에</span><br>오른손 엄지 손가락<span style="color: white;">을 올려주세요</span></h2>
            </div>

            <div class="button-container2"> 
                <div class="button2" id="button2">✔ 확인</div>
            </div>

            <div class="image-container">
                <img src="./finger.jpg" id="finger">
            </div>
    `;

    // margin-left 적용 // 왜그런지 모르겠음 걍 기울어지더라 ;;;;
    main.style.marginLeft = '-36%'; // 예시로 20%로 설정

    //button3는 세대구성원 선택
    const button2 = document.getElementById('button2');
    button2.addEventListener('click', function() {

    main.style.marginLeft = '0%'; // 예시로 20%로 설정

        head.innerHTML = `
            <div class="text">
                <h2 id="maintext">세대구성원 선택</h2>
                <p id="subtext">발급을 원하는 세대구성원을 선택해주세요</p>
            </div>
    `;

        main.innerHTML = `
        <div class="button-container3"> //지문
            <div class="button3" id="button3">✔ 확인</div>
        </div>

        <div class="select" id="select">
            <p id="name">성  명 : <span>박OO</span></p>
            <p id="relation">세대주와의 관계 : <span> 본인</span></p>
            <p id="person">주민등록번호 : <span>000101 - *******</span></p>
            <p>-----------------------------------------------</p>
        </div>
    `;

        const button3 = document.getElementById('button3');
        button3.addEventListener('click',function() {
            
            head.innerHTML = `
            <div class="text">
                <h2 id="maintext">선택사항 안내</h2>
            </div>
        `;

            main.innerHTML = `
            <div class="content">

                <div class="button-container4"> 
                    <div class="button4" id="button4">✔ 확인</div>
                </div>

                <div class="information">
                    <p>주민등록등본 발급 시 선택사항에 대해<br><span>법원(등기소), 교육기관, 공공기관, 금융기관, 개인확인용<br></span>
                    <span>5가지 선택사항</span>으로 발급을 도와 드리겠습니다. </p>
                </div>

                <div class="error">* 다른 용도로 발급을 원하시는 경우 <br><span>개별항목을 선택하여 발급 가능</span></div>
                    <img id="selectinfo" src="./selectinfo.jpg">
                </div>
        `;

            const button4 = document.getElementById('button4');
            button4.addEventListener('click',function() {
                
                head.innerHTML = `
                <div class="text">
                    <h2 id="maintext">주민등록표(초본) 선택사항</h2>
                    <p id="subtext">개인정보 보호를 위해 아래의 초본 사항 중<br>필요한 사항을 선택하신 후 확인 버튼을 눌러주세요.</p>
                </div>
            `;

                maintext.style.marginTop = '-1%';
            
                main.innerHTML = `
                <img id="result" src="./result.jpg">

                <div class="button-container5"> 
                    <div class="button5" id="button5">✔ 확인</div>
                </div>
            `;
                const button5 = document.getElementById('button5');
                button5.addEventListener('click',function() {
                    
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
