// If you get stuck go to axiox documentations
// https://github.com/axios/axios

//function for get the data and put them in new li 

const urlb=`https://sei-relativity-ruh.herokuapp.com/developers`;

function printData() {
axios({
    method:'get',
    url:urlb

})
.then(function(res){
    let arraList=res.data
    for(let i=0;i<arraList.length;i++){
    console.log(res.data[i].name);
    let names=res.data[i].name;
    let place =document.querySelector('#main');
    var x = document.createElement("LI");
    var t = document.createTextNode(names);
     x.appendChild(t);
     place.appendChild(x);
    }
})
.catch(function(err){
    console.log(err);
})
}
//this function to add new one 

function add(){
    let inputValue=document.querySelector('#name').value;
axios({
    method:'post',
    url:urlb,
    data:{
        name:inputValue
    }

})
.then(function(res){
    console.log(res.data);
    
    // let arraList=res.data
    // for(let i=0;i<arraList.length;i++){
    // console.log(res.data[i].name);
    // let names=res.data[i].name;
    // let place =document.querySelector('#main');
    // var x = document.createElement("LI");
    // var t = document.createTextNode(names);
    //  x.appendChild(t);
    //  place.appendChild(x);
    // }
})
.catch(function(err){
    console.log(err);
})

}