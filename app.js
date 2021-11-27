const text = document.querySelector(".input");

class Task{
    constructor(str){
        this.str = str;
        if(this.str.length != 0){
            var element = document.createElement("div");
            element.innerHTML = this.str;
            element.classList.add("task");
            document.querySelector(".list").append(element);
            text.value = "";
            element.onclick = () => element.remove();
        }
    }
}
document.querySelector(".submit").onclick = () => new Task(text.value);
