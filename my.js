let a=parseInt(prompt('Nhap vao a'));
let b=parseInt(prompt('Nhap vao b'));

let n0=(-b)/a;

if(a=0){
    if (b=0){
        alert('Phuong trinh vo so nghiem');
    }else {
        alert('Phuong trinh vo nghiem');
    }
}else {
    alert('Nghiem cua phuong trinh la '+n0);
}