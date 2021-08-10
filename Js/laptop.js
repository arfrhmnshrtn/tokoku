
const imgLaptop = document.querySelectorAll('.content .owl-carousel .card-feature .box .img img');
const imgMouse = document.querySelectorAll('.mouse .owl-carousel .card-feature .box .img img');
const imgKyboard = document.querySelectorAll('.kyboard .owl-carousel .card-feature .box .img img');
const imgHeadset = document.querySelectorAll('.headset .owl-carousel .card-feature .box .img img');
// console.log(imgLaptop);
for (let i = 0; i <= imgLaptop.length -1; i++){
    imgLaptop[i].setAttribute('src', `../img/img laptop/${i}.jpg`);
};

for (let i = 0; i <= imgMouse.length -1; i++){
    imgMouse[i].setAttribute('src', `../img/img mouse/${i}.jpg`);
};

for (let i = 0; i <= imgHeadset.length -1; i++){
    imgHeadset[i].setAttribute('src', `../img/img headset/${i}.jpg`);
};

for (let i = 0; i <= imgKyboard.length -1; i++){
    imgKyboard[i].setAttribute('src', `../img/img kyboard/${i}.jpg`);
};
