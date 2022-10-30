Array.prototype.filtercCustom = function (cb) {
	var ary = this;
	var filteredArray = [];
	for(var i = 0; i < ary.length;i++) {
        if (ary[i] !== 0) {
            filteredArray.push(ary[i]);
        }

	}
}

Array.prototype.filtercCustom = function (cb) {
	var ary = this;
	var filteredArray = [];
	for(var i = 0; i < ary.length;i++) {
        if (ary[i] !== 1) {
            filteredArray.push(ary[i]);
        }

	}
}


Array.prototype.filtercCustom = function (cb) {
	var ary = this;
	var filteredArray = [];
	for(var i = 0; i < ary.length;i++) {
        if (ary[i].indexOf("pooja") > -1) {
            filteredArray.push(ary[i]);
        }

	}
}

Array.prototype.filter = function (cb) {
    // cb = function (el) {
    //     return el !== 1
    // }
	var ary = this;
	var filteredArray = [];
	for(var i = 0; i < ary.length;i++) {
        if (cb(ary[i])) {
            filteredArray.push(ary[i]);
        }
    }
    
    return filteredArray;
}



Array.prototype.push = function (val) {
    var el = this;
    el[el.length] = val;
    el.length = el.length + 1;
    return el.length;
}



[1,2,3,4,5,6,7].filter(  function (el) {
    return el !== 1
}  ) // [2,3,4,5,6,7]

