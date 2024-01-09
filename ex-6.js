let height = undefined;
let result;

function test(height) {
    result = height ?? "Height is not defined";
    return result;
}

test(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
