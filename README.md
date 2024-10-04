# week16-registration-form-with-validation
Работа №2 на шестнадцатой неделе обучения | Форма регистрации с валидацией всех полей

### Задание:
1. Создать HTML-страницу с формой для регистрации пользователя, содержащую следующие поля:

-- Поле ввода имени
-- Поле ввода электронной почты:
-- Поле ввода возраста
-- Поле выбора пола
-- Поле выбора профессии
-- Поле ввода пароля
-- Поле checkbox, показывающее согласие пользователя с обработкой данных. Должно иметь атрибут required.
-- Кнопка отправки формы

2. Добавьте стили для формы

3. Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:

-- Отменять действие по умолчанию для события submit
-- Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
-- Кнопка отправки должна быть неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
-- Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму

4. Бонусное задание: реализуйте дополнительные обработчики событий focus и blur для каждого поля
