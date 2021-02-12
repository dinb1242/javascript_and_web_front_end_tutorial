hr = document.createElement("hr");

// 가장 마지막 child에 추가
document.body.appendChild(hr);

// 특정 태그의 바로 전에 element 추가
document.body.insertBefore(hr, document.body.children[3]);

// element 복사

hr2 = hr.cloneNode(hr);
document.body.appendChild(hr2);

document.body.insertBefore(hr2, document.body.children[6]);

document.body.removeChild(hr2);

document.body.removeChild(document.body.children[3]);