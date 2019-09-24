function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('users');

const url = 'https://randomuser.me/api/?results=20';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let users = data.results;

        return users.map(function (user) {

            let li = createNode('li');
            span = createNode('span');
            h3 = createNode('h3');
            p = createNode('p');

            append(li, span);
            append(ul, li);
            append(span, h3);
            append(span, p);

            h3.innerHTML = `${user.name.first}
            ${user.name.last}`

            p.innerHTML = `${user.dob.date}`

        })
    })

    .catch(function (error) {
        console.log(JSON.stringify(error));
    });

// Sort
class Sort {
    constructor() {}
    sort(value) {
        var list, i, switching, b, c, shouldSwitch;

        list = document.getElementById("users");
        switching = true;

        while (switching) {
            switching = false;
            b = list.getElementsByTagName("SPAN");
            c = list.getElementsByTagName(value);

            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (c[i].innerHTML.toLowerCase() > c[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }

            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
    }
}

let sortName = new Sort();
let sortDate = new Sort();