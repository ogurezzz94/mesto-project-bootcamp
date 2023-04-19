/*
// VERSION 1
const editBtn = document.querySelector('[data-btn="edit"]');  // Находим Edit Profile Button
// Вешаем обработчик для Edit Profile Button
editBtn.addEventListener('click', () => {
    editPopup.classList.add('popup_opened');
    console.log('className', editPopup.className);
})

const editPopup = document.querySelector('[data-popup="editProfile"]'); // Находим Edit Popup
// Вешаем обработчик для фона Edit Popup
editPopup.addEventListener('click', () => {
    editPopup.classList.remove('popup_opened');
    formPopup.reset();
});

const closeBtn = document.querySelector('[data-btn="closePopup"]'); // Находим Close Button
// Вешаем обработчик для Close Button
closeBtn.addEventListener('click', () => {
  editPopup.classList.remove('popup_opened');
})

// Находим EditProfile Form
const formPopup = document.forms['editProfile'];
// Вешаем обработчик для EditProfile Form (click)
formPopup.addEventListener('click', (e) => {
  e.stopPropagation();
});
// Вешаем обработчик для EditProfile Form (submit)
formPopup.addEventListener('submit', (e) => {
  e.preventDefault();
});
*/

// VERSION 2
//  определение массива по атрибуту датасет всем элементам,
//  это будут кнопка редактирования, крестик у попапа, фон у попапа,
//  которые отвечают за закрытие или открытие попапа через тогл
//  в html эти элементы с атрибутом data-btn="editPopupToggle"
const togglePopupBtns = document.querySelectorAll('[data-btn="editPopupToggle"]');
// определение формы с именем эдитПрофайл
// <form name="editProfile"></form>
const formPopup2 = document.forms["editProfile"];
// определение попап-элемента, он же фон, но под другим датасетом
// чтобы можно было повесить обработчик вызова всего попапа
const editPopup2 = document.querySelector('[data-popup="editProfile"]');
// определение элемента который отвечает за содержимое имени
const profileName = document.querySelector('[data-profile="name"]');
// определение элемента который отвечает за содержимое описания
const profileDescription = document.querySelector('[data-profile="description"]');

// установка слушателя событий по клику для всех элементов из выше определенного массива
// со всеми кнопками которые отвечают за вызов или закрытие попапа
togglePopupBtns.forEach((btn) => {
  // у каждой кнопки "слушать" клик и выполнять следующие действия
  btn.addEventListener("click", () => {
    // для всего попапа тоглится класс,
    // который либо добавляется либо убирается,
    // тем самым попап либо появляется, либо исчезает
    editPopup2.classList.toggle("popup_opened");
    // все содержимое удаляется, без условий, бесплатно, без регистрации и смс,
    // всегда когда был совершено нажатие на любую из кнопок для тогл
    formPopup2.reset();
  });
});

// установка слушателя событий по клику для всего попапа,
// чтобы предотвратить закрытие кликая по форме внутри попапа,
// функция закрытия была установлена ранее и распростронялась на все элементы,
// которые попадают в попап
formPopup2.addEventListener("click", (e) => {
  e.stopPropagation();
});

// установка слушателя событий по нажатию на кнопку сохранить
// <button type="submit">Сохранить</button>
formPopup2.addEventListener("submit", (e) => {
  // остановка стандартной отправки формы
  e.preventDefault();
  // обращаясь через форму
  // определяем значения атрибутов велью,
  // переданные в именованные инпуты
  // <input name="name">
  const name = formPopup2.name.value;
  // и <input name="description">
  const description = formPopup2.description.value;
  // передаем подученные значения в необходимую разметку html
  // с помощью метода текстКонтент
  profileName.textContent = name;
  profileDescription.textContent = description;
  // закрываем попап через событие отправки формы,
  // на всякий случай прописал через явное удаление класса,
  // чтоб показать что так я тоже умею, а не только тоглить
  editPopup2.classList.remove("popup_opened");
});

//спасибо за внимание!
