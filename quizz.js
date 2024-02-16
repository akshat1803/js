const questions =["2+2*3","2+8*3","6+2*3","7+2*3","8+2*3",]
const ques=document.querySelector(".question")
const blank=[]



    // document.write(questions[reduce()])
    setInterval(RandomQuestion, 10000); 

    function RandomQuestion() {
        if (blank.length === questions.length) {
            
            return;
        }
        ques.textContent = questions[reduce()];
    }

function reduce(){
    let randomques=Math.floor(Math.random()*questions.length);
    if(blank.includes(randomques)){
        return reduce()
    }else{
        blank.push(randomques)
        return randomques
    }

}
