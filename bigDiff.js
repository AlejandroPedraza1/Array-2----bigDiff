This is for JavaScript
function bigDiff(nums){
  let max = Math.max.apply(Math, nums)
  let min = Math.min.apply(Math, nums)
  return Math.abs(max - min);
}
