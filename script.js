const listDiv = document.querySelector('.list');
const listul = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addtext'); //輸入框 
const addItemButton = document.querySelector('button.add'); //送出鈕 
const lis = listul.children;
const liNum = lis.length;

//待辦數量
document.getElementById('liNum').innerHTML = liNum;

//打字處focus
var text = document.getElementById('addtext');

text.onfocus = function() {
    text.placeholder = "";
}

text.onblur = function() {
    text.placeholder = "Write something here...";
}

//檢查打字處是否有內容
function checkItems() {
    items = document.getElementById('addtext').value;
    if (items.length == 0) {
        alert('請填寫事件');
    } else {
        //新增項目到list中
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        li.textContent = addItemInput.value;
        attachListItemButtons(li);
        ul.appendChild(li);
        addItemInput.value = '';
        document.getElementById('liNum').innerHTML = liNum;
    }
};


//為每個項目加上button鈕

function attachListItemButtons(li) {
    let remove = document.createElement('button');
    remove.className = 'ion-md-close';
    li.appendChild(remove); //增加元素
    let add = document.createElement('button');
    add.className = 'ion-md-checkmark';
    li.appendChild(add);
}

for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
}

//when touch the check or remove button

listul.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') { //BUTTON需為大寫
    	/*在XML (或者其他基於XML的語言,比如XHTML,xul)文檔中, tagName的值会保留原始的大小寫.
    	  在HTML文檔中, tagName會返回其大寫形式.對於元素節點來說, tagName属性的值和*/
        if (event.target.className == 'ion-md-close') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
            let liNum = lis.length;
            document.getElementById('liNum').innerHTML = liNum;
        }
        if (event.target.className == 'ion-md-checkmark') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
            let liNum = lis.length;
            alert('恭喜完成' + li.textContent + '，剩餘' + liNum +'件待辦事項');
            document.getElementById('liNum').innerHTML = liNum;
        }


    }
});

