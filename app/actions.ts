'use server';

export async function sendDataToTelegram(formData) {
  const botToken = process.env.TG_BOT_TOKEN; // Токен вашего бота
  const chatId = process.env.NVOZ_GROUP_ID; // ID получателя (пользователя)
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`; // URL для отправки сообщения
  const { name, telephone, description } = formData;

  // Формируем сообщение в формате HTML
  const message = `
📩 Вам новая заявка:
<b>Имя:</b> ${name}
<b>Телефон:</b> ${telephone}
${description ? `<b>Описание:</b> ${description}` : ''}
  `;

  // Параметры, которые будем отправлять
  const params = {
    chat_id: chatId, // ID чата
    text: message, // Текст сообщения
    parse_mode: 'HTML', // Режим парсинга HTML
  };

  // Отправляем данные с помощью fetch API
  return fetch(apiUrl, {
    method: 'POST', // Метод отправки
    headers: {
      'Content-Type': 'application/json', // Указываем тип содержимого
    },
    body: JSON.stringify(params), // Преобразуем параметры в JSON
  }).then((response) => response.json()); // Возвращаем ответ в формате JSON
}
