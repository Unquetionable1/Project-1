document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('tab').addEventListener('click',(e)=>{
        getImage();
    })
    
})

function getImage(){
    fetch('https://api.thecatapi.com/v1/images/search?',{
        headers:{
            'x-api-key':'live_NIMRpUfCcUpq1LBrO8QwGcYM5Zo55ydh0RkIpf4Cvkivt864j8BljpBLa2jPNahZ'
        }
    })
    .then(res=>{
        if(!res.ok){
            new Error('You have a request error')
        }
        return res.json();
    })
    .then(imagData=>{
        imagData.map(image=>{
            const div = document.getElementById('view');
            const img=document.createElement('img');
            img.src=`${image.url}`;
            div.appendChild(img);
        })
    })
    .catch(error=>console.log(error))
}