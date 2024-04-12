document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('tab').addEventListener('click',(e)=>{
        
    })
    getImage()
})

function getImage(){
    fetch('https://api.thecatapi.com/v1/images/search?limit=1')
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
            img.height="300"
            img.width='300'
            div.appendChild(img);
        })
    })
    .catch(error=>console.log(error))
}