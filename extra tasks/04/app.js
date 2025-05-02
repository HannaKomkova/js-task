const num = +prompt ('Введите число');

if (Number.isInteger (num)) {
    console.log(` ${num} - это целое число`);
} else {
    console.log(` ${num} - это не целое число`);
}
