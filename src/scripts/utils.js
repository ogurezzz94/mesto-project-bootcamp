export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`ошибка ответа сервера, статус: ${res.status}`);
  }
}

export function loader(form, text) {
  const button = form.querySelector('[type="submit"]');
  button.textContent = text;
  console.log(text)
}

