
let arr = [1,2,3,4,5,6,7,8,9,10];

const result_arr = arr.filter((arr) => {
    return arr %2 ==0
  })

const result = result_arr.map((result_arr) => {
  return result_arr*1000
})
console.log(result)

