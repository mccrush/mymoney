export default function getTotalSum(array) {
  let totalSum = 0

  array.forEach(el => {
    totalSum += +el.sum
  })

  return totalSum
}