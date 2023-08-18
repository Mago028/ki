var currentImageIndex = 1;
    var totalImages = 10; // 전체 이미지 개수

    function changeImage() {
        currentImageIndex = (currentImageIndex % totalImages)+1;
        var imageUrl = './taxi_img/' + currentImageIndex + '.jpg';
        document.getElementById('schermo').style.backgroundImage = 'url(' + imageUrl + ')';
    }

    function adjustOverlayPosition() {
        var schermo = document.getElementById('schermo');
        var overlay = document.getElementById('overlay');
        var overchecklay = document.getElementById('overchecklay');
        if (currentImageIndex === 2) {
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '95%'; 
            overlay.style.height = '6%';
            overlay.style.transform = 'translate(-50%, 360%)'; 
        }
        else if(currentImageIndex === 3){
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '95%'; 
            overlay.style.height = '6%';
            overlay.style.transform = 'translate(-50%, -555%)'; 
        } 
        else if(currentImageIndex === 4){
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '95%'; 
            overlay.style.height = '8%';
            overlay.style.transform = 'translate(-50%, -50%)'; 
            //(값이 작아지면 왼쪽 , 커지면 오른쪽 //// 값이 작아지면 위로 ,커지면 아래로 )
        }
        else if(currentImageIndex === 5){
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '95%'; 
            overlay.style.height = '6%';
            overlay.style.transform = 'translate(-50%, -485%)'; 
        }
        else if(currentImageIndex === 6){
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '95%'; 
            overlay.style.height = '8%';
            overlay.style.transform = 'translate(-50%, -50%)'; 
            //(값이 작아지면 왼쪽 , 커지면 오른쪽 //// 값이 작아지면 위로 ,커지면 아래로 )
        }
        else if(currentImageIndex === 7){
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '95%'; 
            overlay.style.height = '7%';
            overlay.style.transform = 'translate(-50%, 350%)'; 
        }
        else if(currentImageIndex === 8){
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '88%'; 
            overlay.style.height = '6%';
            overlay.style.transform = 'translate(-50%, 570%)'; 
        }
        else if(currentImageIndex === 9){      
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.width = '43%'; 
            overlay.style.height = '6%';
            overlay.style.transform = 'translate(2%, 570%)';    
        }
        else {
            // 시뮬레이션 끝난 뒤 흰 배경으로 변경
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
                // taxi.html로 돌아가기
                window.location.href = 'taxi.html';
            });
        
            // 종료하기 버튼 클릭 이벤트 처리
            exitButton.addEventListener('click', () => {
                // 창 닫기
                window.close();
            });
        }
        
    }