var disp_items = document.getElementsByClassName('faq_list_item')
console.log(disp_items);

for(var i=0;i<disp_items.length;i++){
    disp_items[i].addEventListener('click',runEvent);
   
}

function runEvent(e){
    e.preventDefault();
    console.log(e.target);
    // var ans=qs.nextElementSibling;
    // ans.style.display="block";

    if(e.target.id === 'qs'){
        var x = e.target.parentNode;
        var ans = x.nextElementSibling;
        if(ans.className === 'noanswer'){
            ans.className='answer';
        }
        else{
            ans.className='noanswer'
        }

    }
    else{


    var ans = e.target.nextElementSibling;
    console.log(ans);
    if(ans.className === 'noanswer'){
        ans.className='answer';
    }
    else{
        ans.className='noanswer'
    }
  }

}