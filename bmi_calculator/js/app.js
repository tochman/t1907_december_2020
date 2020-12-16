const calculateBmi = () => {
  const weightInput = document.getElementById('weight-input')
  const heightInput = document.getElementById('height-input')
  const resultsDisplay = document.getElementById('results')
  const weight = parseInt(weightInput.value)
  const height = parseInt(heightInput.value)
  const result = BMICalculator.metric(weight, height)
  resultsDisplay.innerHTML= `You BMI value is ${result.numeric.toFixed(2)}, and you are considered ${result.message}`
  resultsDisplay.classList.add('results')
}