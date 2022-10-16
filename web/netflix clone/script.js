// window.onload = function () {
//   const nav = document.getElementById("navbar");

//   window.addEventListener("scroll", () => {
//     let scroll_y = this.scrollY;

//     if (scroll_y == 0) {
//       nav.style.backgroundColor = "transparent";
//       nav.style.transition = "background-color 0.5";
//     } else {
//       nav.style.backgroundColor = "#141414";
//       nav.style.transition = "background-color 0.5";
//     }
//   });
// };



function number(){

  return "2";
}


function sum () {

  let arr = [];

  for (let i = 0; i < arguments.length; i++) {
     arr[i]=arguments[i];
     console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {



    console.log(typeof(arr[i]));



    if(typeof(arr[i]) == 'function')
    {
      arr[i] = arr[i]();
    }


    if(typeof(arr[i])== 'boolean')
    {
      if(arr[i]== true)
      {
        arr[i]==1;
      }
    }



    if(typeof(arr[i])== 'undefined')
    {
      arr[i]=0;
    }

    if(arr[i] == null)
    {
      arr[i]=0;
    }



    if(typeof(arr[i])== 'object')
    {

      let sum = 0;

      for (let key in arr[i]) {

        sum = sum + arr[i][key];

      }


      arr[i]= sum;
    }

    if (typeof(arr[i]) == 'string') {


      let idx = parseInt(arr[i]);

      if (isNaN(idx)) {
        arr[i] = 0;
      } else {
        arr[i] = idx;
      }
    }
  }

  let ans = 0;

  for(let i=0;i<arr.length;i++){

    
    ans = ans + arr[i];
  }

  return ans ;
}


let obj = {
  
}

let find = sum([[2]],4);

console.log(find);

