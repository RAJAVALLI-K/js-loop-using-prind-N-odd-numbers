// 1-Program to print N odd numbers

let value = parseInt(prompt("Enter a number:"));
for (let i = 0; i < value; i++) {
    if (!(i % 2 == 0)) {
        console.log("odd numbers:" + i);
    }
}
