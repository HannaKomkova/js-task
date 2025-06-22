let prompStr = prompt('enter string');

const makeNewStr = (str) => {
    try {
        if(!isNaN(str)) throw new Error('вы ввели число');
        if (str.length === 0) throw new Error('строка пустая');
        return str.replaceAll(/[aeiouy]/g, '');
        
    } catch (error) {
        return error;
    }
}

let res = makeNewStr(prompStr);

console.log(res);






