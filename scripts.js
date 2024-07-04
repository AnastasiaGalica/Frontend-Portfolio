function openMenu() {
    right = document.getElementById("navbar-list").style.right;
    if (right === "") {
        right = "-110vw";
    }

    if (right == "-110vw"){
        document.getElementById("navbar-list").style.right = "0";
    }
    else{
        document.getElementById("navbar-list").style.right = "-110vw";
    }
}

function darkMode(){
    headerColor = document.getElementById("header");
    menuColor = document.getElementById("navbar-list");
    
    headerColor.classList.toggle('darkmode');
    menuColor.classList.toggle('darkmode');

}



const mq = window.matchMedia('(min-width: 992px)');

window.onscroll = function() {scrollAnimation1()};

function scrollAnimation1() {
    const shouldDisplace = (document.body.scrollTop > 500 || document.documentElement.scrollTop > 100);
    
    document.getElementById("welcome-title").style.marginLeft = shouldDisplace ? "-250vw" : "0vw";
    document.getElementById("welcome-paragraph").style.marginRight = shouldDisplace ? "-300vw" : "0vw";
    document.getElementById("welcome-btn").style.marginLeft = shouldDisplace ? "-250vw" : "0vw";
}


window.addEventListener('scroll', function() {
    const element = document.getElementById('welcome-img');
    const scroll = document.documentElement.scrollTop;
    
    if (!mq.matches){
        if(document.documentElement.scrollTop > 100){
            document.getElementById("welcome-img").classList.add("displace-down-mobile");
        }
        else{
            document.getElementById("welcome-img").classList.remove("displace-down-mobile");
        }
    }

    if(mq.matches){
        if(document.documentElement.scrollTop > 100){
            document.getElementById("welcome-img").classList.add("displace-down");
        }
        else{
            document.getElementById("welcome-img").classList.remove("displace-down");
        }
        
        
    }
});