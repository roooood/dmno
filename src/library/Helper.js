export function clone(arr) {
    let newObj = (arr instanceof Array) ? [] : {};
    for (let i in arr) {
        if (arr[i] && typeof arr[i] == "object") {
            newObj[i] = this.clone(arr[i]);
        }
        else
            newObj[i] = arr[i]
    }
    return newObj;
}
export function sum(arr, prop) {
    let total = 0, i;
    for (i in arr) {
        total += arr[i][prop];
    }
    return total
}
export function toMoney(amount) {
    if (typeof amount == 'undefined' || amount == null)
        return '0';
    if (amount.length < 3)
        return amount + '';
    return ("" + amount).replace(/,/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}
export function numFa(num, dontTrim) {
    if (num == 'undefined' || typeof num == 'undefined')
        return '';
    var i = 0,
        dontTrim = dontTrim || false,
        num = dontTrim ? num + "" : (num + "").trim(),
        len = num.length,
        res = '',
        pos,
        persianNumbers = typeof persianNumber == 'undefined' ?
            ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] :
            persianNumbers;

    for (; i < len; i++)
        if ((pos = persianNumbers[num.charAt(i)]))
            res += pos;
        else
            res += num.charAt(i);

    return res;
}
export function vwTOpx(value) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

    var result = (x * value) / 100;
    return result;
}
export function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
export function move(el, x, y) {
    var xid = setInterval(xx, 5);

    function xx() {
        if (x[0] == x[1] && y[0] == y[1]) {
            clearInterval(xid);
        } else {
            if (x[0] != x[1])
                x[0] = x[0] < x[1] ? x[0] + 1 : x[0] - 1;
            if (y[0] != y[1])
                y[0] = y[0] < y[1] ? y[0] + 1 : y[0] - 1;
            el.style.transform = "translate(" + x[0] + "px," + y[0] + "px)";
        }
    }
}
export function getPositionAtCenter(element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top + height / 2
    };
}

export function posInParent(i) {
    let p = document.querySelector('.board-main');
    let c = p.querySelector('.list-dice' + i);
    let pp = p.getBoundingClientRect();
    let cp = c.getBoundingClientRect();

    return {
        left: cp.left - pp.left, top: cp.top - pp.top
    }
}

export function getDistance(a, b) {
    const aPosition = getPositionAtCenter(a);
    const bPosition = getPositionAtCenter(b);
    let distance = Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    return {
        distance: distance,
        x: aPosition.x - bPosition.x,
        y: aPosition.y - bPosition.y
    }
}