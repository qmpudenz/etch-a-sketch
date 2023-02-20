
    for (let i=0; i < 256; i++) {
        let elementName = document.createElement('div');
    elementName.style.width = "36px";
    elementName.style.height = "36px";
    elementName.style.backgroundColor = "grey";
    elementName.style.margin = "1px";
    elementName.addEventListener('mouseover', function(){
        elementName.style.backgroundColor = "red";
    });
    document.body.appendChild(elementName);
    }

    