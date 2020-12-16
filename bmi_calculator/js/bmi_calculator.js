const BMICalculator = {
  metric(weight, height) {
    let numeric = weight / (height / 100 * height / 100)
    let result = {
      numeric: numeric,
      message: BMICalculator.message(numeric)
    }
    return result
  },
  message(bmiValue) {
    let message
    if (bmiValue < 18.5) {
      message = "Underweight"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.99) {
      message = "Normal weight"
    } else if (bmiValue >= 25 && bmiValue <= 39.99) {
      message = "Overweight"
    } else {
      message = "Extreme Obesity"
    }
    return message
  }
}