const con = document.getElementById('container');
const miniImg = document.getElementsByClassName('myimg')
console.log(miniImg)
    let img=['./Images/daredevil-born.jpg',"https://4kwallpapers.com/images/walls/thumbs_3t/21603.jpg","https://4kwallpapers.com/images/walls/thumbs_3t/21608.jpg","https://4kwallpapers.com/images/walls/thumbs_3t/19448.jpg "]


    let i=0;
function next(){
    miniImg[i].classList.remove('active');
    i++;
    if(i==img.length)
    {
        i=0;
    }
    miniImg[i].classList.add('active');
   con.style.backgroundImage ='url("'+img[i]+'")';
   con.style.transitionDuration="1s"
   
}
