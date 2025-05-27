function fetchJson(url, callback, id)
{
    fetch(url)
        .then( res => res.json())
        .then( data => callback(data, id));

}

function xhrJson(url,callback,id){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (ev) => {
        if(xhr.readyState == 4 && xhr.status == 200){
            const response = JSON.parse(xhr.responseText);
            callback(response,id);
        }
    }

    xhr.open("GET", url);
    xhr.send();
}