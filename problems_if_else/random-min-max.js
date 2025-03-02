const random_nums = [];

for(let i=0; i<5; i++){
    random_nums.push(Math.floor(Math.random() * 900) + 100)
}


let max_num = Number.MIN_SAFE_INTEGER
let min_num = Number.MAX_SAFE_INTEGER

console.log(max_num)

for(let num of random_nums){
    max_num = Math.max(max_num, num);
    min_num = Math.min(min_num, num);
}

console.log(`Max: ${max_num}, Min: ${min_num}`);
