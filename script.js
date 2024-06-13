
let bulle = document.getElementById("bulle-chat");

bulle.onclick = function open_popup()
{
    let popup = document.getElementById("chat-popup");
    let bulle = document.getElementById("bulle-chat");
    let image = bulle.firstElementChild
    if (popup.style.display == "none" || !popup.style.display)
    {
        popup.style.display = "block";
        image.src = "icons/circle-x.svg";
        image.style.width = "48px";
        image.style.height = "48px";
    }
    else
    {
        popup.style.display = "none";
        image.src = "icons/chat-bulle-rounded.png";
        image.style.width = "64px";
        image.style.height = "64px";
    }
}