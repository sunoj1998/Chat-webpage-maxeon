async function  hitButton(){
   let firsChatBox = document.getElementById('first-chat-box-id');
   let secondChatBox = document.getElementById('second-chat-box-id');

   secondChatBox.style.display = 'block';
   firsChatBox.style.display = 'none'

   let url = 'https://api.adviceslip.com/advice';
   const response = await fetch(url);
   const data = await response.json();
   serverMessage = data.slip.advice;
   console.log(serverMessage);

   document.getElementById('server-id').innerHTML = serverMessage;

}

function displayChatBox(){
   let firsChatBox = document.getElementById('first-chat-box-id');
   let sparrowIcon = document.getElementById('sparrow-icon-id')
   let crossIcon = document.getElementById('cross-icon-id')

   firsChatBox.style.display = 'block'
   crossIcon.style.display = 'block'
   sparrowIcon.style.display = 'none'
}

function closeChatBox(){
   let firsChatBox = document.getElementById('first-chat-box-id');
   let secondChatBox = document.getElementById('second-chat-box-id');
   let sparrowIcon = document.getElementById('sparrow-icon-id');
   let crossIcon = document.getElementById('cross-icon-id');

   firsChatBox.style.display = 'none';
   secondChatBox.style.display = 'none';
   sparrowIcon.style.display = 'block'
   crossIcon.style.display = 'none'  
}


  


