// 3. Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:

// Отменять действие по умолчанию для события submit
// Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
// Кнопка отправки должна быть неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
// Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму
// 4. Бонусное задание: реализуйте дополнительные обработчики событий focus и blur для каждого поля

let errors = [];
let checkValidity = (input) => {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push(`Заполните пустое поле ${input.placeholder}`);
  } 
  if (validity.patternMissmatch) {
    errors.push(`Неверный формат заполнения`);
  } 
  if (validity.rangeOwerflow) {
    let max = input.getAttributeValue(input, 'max');
    errors.push(`Максимальное значение не может быть больше чем ${max}`);
  }
  if (validity.rangeUnderflow) {
    let min = input.getAttributeValue(input, 'min');
    errors.push(`Минимальное значение не может быть больше чем ${min}`);
  }
}

let checkAll = () => {
  errors = [];
  let inputs = document.querySelectorAll('input, select');

  for (let input of inputs) {
    checkValidity(input);
  }

  document.querySelector('.errorsInfo').innerHTML = errors.join('.<br>');
}