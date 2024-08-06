
        
        // now we needed to attached with slide number
        let imgs = document.querySelectorAll(".slider-container img");
        let allImage = Array.from(imgs);
    
        // slides numbers
        let slideNumber = document.querySelector("#slider-number");
        
        // slide counter
        let arrLength = allImage.length;

        let currentSlid = 1;

        let previous = document.querySelector(".pre");
        let next     = document.querySelector(".next");

        next.onclick = nextSlide;
        previous.onclick = previousSlide;

        // creating ul element
        let ulList = document.createElement("ul");

        // set id to the element to work attached with css att's
        ulList.setAttribute("id","ul-List");


        for(let i = 1 ; i <= arrLength ; i++){
            // create li per iteration
            let list = document.createElement("li");
            // set attribute to this li
            list.setAttribute('data-index',i);

            list.appendChild(document.createTextNode(i));
            ulList.appendChild(list);
        }

        document.querySelector("#indicators").appendChild(ulList);
        
        // get the created new ul
        let parentULList = document.querySelector("#ul-List");
        let childrenOFUList = document.querySelectorAll("#ul-List li");

        for(let k = 0 ; k < childrenOFUList.length ; k++){
            childrenOFUList[k].onclick = function(){
                currentSlid = parseInt(childrenOFUList[k].getAttribute("data-index"));
                checkSlide();
            }
        }

        checkSlide();

        function checkSlide(){
            slideNumber.textContent = 'slide # ' + (currentSlid) + ' of ' + (arrLength);
            resetActive();
            
            imgs[currentSlid-1].classList.add("active");
            parentULList.children[currentSlid - 1 ].classList.add("active");
            
            if(currentSlid == 1){
                previous.classList.add("disable");
            }else{
                previous.classList.remove("disable");
            }

            if(currentSlid == arrLength){
                next.classList.add("disable");
            }else{
                next.classList.remove("disable");
            }

        }
        
        function nextSlide(){
            if(next.classList.contains('disable')){
                return false;
            }else{
                currentSlid++;
                checkSlide();
            }
        }

        function previousSlide(){
            if(next.classList.contains('disable')){
                return false;
            }else{
                currentSlid--;
                checkSlide();//to enable transition to the next or previous slide
            }
        }

        function resetActive(){
            imgs.forEach(function(img){
                img.classList.remove("active");
            })
            
            childrenOFUList.forEach(function(bullet){
                bullet.classList.remove("active");
            })
        }