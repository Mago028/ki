    var currentImageIndex = 1;
    var totalImages = 17; // 전체 이미지 개수

    function changeImage() {
        currentImageIndex = (currentImageIndex % totalImages) + 1;
        var imageUrl = './ktx_img/' + currentImageIndex + '.jpg';
        document.getElementById('schermo').style.backgroundImage = 'url(' + imageUrl + ')';
    }
    

    function adjustOverlayPosition() {
        var schermo = document.getElementById('schermo');
        var overlay = document.getElementById('overlay');
        var overchecklay = document.getElementById('overchecklay');
        if (currentImageIndex === 2) { //2.jpg일때 크기와 위치조정
            overlay.style.width = '44%'; // 원하는 너비 값으로 변경
            overlay.style.height = '4.5%'; // 원하는 높이 값으로 변경
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-105%, 20%)'; //원하는 위치로 조정하기
                        //(값이 작아지면 왼쪽 , 커지면 오른쪽 //// 값이 작아지면 위로 ,커지면 아래로 )

        }
        else if(currentImageIndex === 3){
            overlay.style.width = '25%'; 
            overlay.style.height = '7%';
            overlay.style.transform = 'translate(51%, -346%)';
                } 
        else if(currentImageIndex === 4){
            overlay.style.width = '40%'; // 40%가 170px
            overlay.style.height = '4.5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(0%, 376%)';
        }
        else if(currentImageIndex === 5){
            overlay.style.width = '90%'; 
            overlay.style.height = '12%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-50%, -90%)';
        }
        else if(currentImageIndex === 6){
            overlay.style.width = '90%';
            overlay.style.height = '5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-50%, -320%)';
        }
        else if(currentImageIndex === 7){
            overlay.style.width = '9%';
            overlay.style.height = '5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-250%, 190%)';
        }
        else if(currentImageIndex === 8){
            overlay.style.width = '44%'; 
            overlay.style.height = '7%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(0%, 280%)';
        }
        else if(currentImageIndex === 9){
            overlay.style.width = '5%'; 
            overlay.style.height = '35%';
            overlay.style.transform = 'translate(555%, -47%)';

            overchecklay.style.width = '5%'; 
            overchecklay.style.height = '35%';
            overchecklay.style.top = '50%';
            overchecklay.style.left = '50%';
            overchecklay.style.right = 'auto';
            overchecklay.style.bottom = 'auto';
            overchecklay.style.border = '4px solid rgb(204, 40, 40)';
            overchecklay.style.transform = 'translate(335%, -47%)';            
        }
        else if(currentImageIndex === 10){
            overlay.style.width = '48%'; 
            overlay.style.height = '6.5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(0%, 430%)';
            overchecklay.style.border = 'none';
            overchecklay.style.cursor = 'none';
        }
        else if(currentImageIndex === 11){
            overlay.style.width = '90%'; 
            overlay.style.height = '6.5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-50%, 120%)';
        }
        else if(currentImageIndex === 12){
            overlay.style.width = '97%'; 
            overlay.style.height = '9%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-50%, 220%)';

        }
        else if(currentImageIndex === 13){
            overlay.style.width = '97%'; 
            overlay.style.height = '7%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-50%, 400%)';
        }
        else if (currentImageIndex === 14 || currentImageIndex === 15) {
            overlay.style.width = '48%';
            overlay.style.height = '7.5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(0%, 470%)';
        }
        else if(currentImageIndex == 16)
        {
            overlay.style.width = '45%';
            overlay.style.height = '5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-103%, -670%)';
        }
        else if(currentImageIndex == 17)
        {
            //큰 박스
            overchecklay.style.width = '95%'; //너비
            overchecklay.style.height = '57%'; //높이
            overchecklay.style.top = '50%';
            overchecklay.style.left = '50%';
            overchecklay.style.right = 'auto';
            overchecklay.style.bottom = 'auto';
            overchecklay.style.border = '4px solid rgba(0, 0, 0, 0.3)'; //테두리 
            overchecklay.style.transform = 'translate(-50%, -57%)'; //위치
            
            //빨강이 박스 
            overlay.style.width = '95%';
            overlay.style.height = '5.5%';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.transform = 'translate(-50%, 640%)';
            //(값이 작아지면 왼쪽 , 커지면 오른쪽 //// 값이 작아지면 위로 ,커지면 아래로 )
        }
        else {
            // 시뮬레이션 끝난 뒤 흰 배경으로 변경
            overchecklay.style.border = 'none';
            overchecklay.style.cursor = 'none';
            overlay.style.border = 'none';
            overlay.style.cursor = 'none';
            schermo.style.background = 'none';
            schermo.style.backgroundColor = 'white';
        
            // 환한 미소 이모티콘 생성
            const emoticon = document.createElement('div');
            emoticon.innerHTML = '&#x1F604;'; // 웃는 이모티콘 유니코드
            emoticon.style.fontSize = '48px';
            emoticon.style.position = 'absolute';
            emoticon.style.top = '40%';
            emoticon.style.left = '50%';
            emoticon.style.transform = 'translate(-50%, -50%)';
            schermo.appendChild(emoticon);
        
            // "수고하셨습니다" 문구 생성
            const message = document.createElement('div');
            message.innerText = '수고하셨습니다 !';
            message.style.fontSize = '24px';
            message.style.fontWeight = 'bold';
            message.style.position = 'absolute';
            message.style.top = '50%';
            message.style.left = '50%';
            message.style.transform = 'translate(-50%, -50%)';
            message.style.fontFamily = "'NanumSquareNeo-Variable', sans-serif"; // NanumSquareNeo-Variable font

            schermo.appendChild(message);
        
             // 다시 하기 버튼 생성
            const retryButton = document.createElement('button');
            retryButton.innerText = '다시 하기';
            retryButton.style.position = 'absolute';
            retryButton.style.top = '60%';
            retryButton.style.left = '32%'; // 여백을 주기 위해 좌표 조정
            retryButton.style.transform = 'translate(-50%, -50%)';
            retryButton.style.padding = '10px 20px'; // 버튼 내용과 테두리 사이의 여백 설정
            retryButton.style.fontSize = '18px';
            retryButton.style.backgroundColor = 'lightblue';
            retryButton.style.border = 'none';
            retryButton.style.borderRadius = '5px';
            retryButton.style.fontFamily = "'NanumSquareNeo-Variable', sans-serif"; // NanumSquareNeo-Variable font
            retryButton.style.cursor = 'pointer'; // Adding cursor: pointer
            retryButton.style.fontWeight = 'bold';

            schermo.appendChild(retryButton);

            // 종료하기 버튼 생성
            const exitButton = document.createElement('button');
            exitButton.innerText = '종료하기';
            exitButton.style.position = 'absolute';
            exitButton.style.top = '60%';
            exitButton.style.left = '65%'; // 여백을 주기 위해 좌표 조정
            exitButton.style.transform = 'translate(-50%, -50%)';
            exitButton.style.padding = '10px 20px'; // 버튼 내용과 테두리 사이의 여백 설정
            exitButton.style.fontSize = '18px';
            exitButton.style.backgroundColor = 'lightpink';
            exitButton.style.border = 'none';
            exitButton.style.borderRadius = '5px';
            exitButton.style.fontFamily = "'NanumSquareNeo-Variable', sans-serif"; // NanumSquareNeo-Variable font
            exitButton.style.cursor = 'pointer'; // Adding cursor: pointer
            exitButton.style.fontWeight = 'bold';

            schermo.appendChild(exitButton);

            // 다시 하기 버튼 클릭 이벤트 처리
            retryButton.addEventListener('click', () => {
                // ktx.html로 돌아가기
                window.location.href = 'ktx.html';
            });
        
            // 종료하기 버튼 클릭 이벤트 처리
            exitButton.addEventListener('click', () => {
                // 창 닫기
                window.close();
            });
        }
        
    }