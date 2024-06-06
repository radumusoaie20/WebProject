export class htmlLoader{
    loadHtml(fetchFrom, LoadTo){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', fetchFrom, true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    LoadTo.innerHTML = xhr.responseText;
                }
            }
        }
        xhr.send();
    }
}