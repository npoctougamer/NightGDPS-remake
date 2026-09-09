import { useState } from 'react';
import './review-form.css';

// Генерируем пример для капчи: два случайных числа от 1 до 9
function generateCaptcha() {
  return {
    a: Math.floor(Math.random() * 9) + 1,
    b: Math.floor(Math.random() * 9) + 1,
  };
}

export default function ReviewForm() {
  const [nick, setNick] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Проверки по порядку
    if (!nick.trim()) {
      setError('Введи свой ник');
      return;
    }
    if (!text.trim()) {
      setError('Напиши текст отзыва');
      return;
    }
    if (rating === 0) {
      setError('Поставь оценку серверу (звёзды)');
      return;
    }
    if (parseInt(captchaAnswer, 10) !== captcha.a + captcha.b) {
      setCaptcha(generateCaptcha());
      setCaptchaAnswer('');
      setError('Неверный ответ примера. Попробуй ещё раз');
      return;
    }

    // TODO: Фаза 2 — отправка отзыва в Firebase на модерацию
    alert('Отзыв отправлен! Он появится на сайте после проверки модератором.');

    // Очищаем форму и создаём новую капчу
    setNick('');
    setText('');
    setRating(0);
    setCaptcha(generateCaptcha());
    setCaptchaAnswer('');
    setError('');
  };

  return (
    <div className="review-form-card">
      <input
        className="review-input"
        placeholder="Твой ник"
        maxLength={24}
        value={nick}
        onChange={(e) => setNick(e.target.value)}
      />

      <textarea
        className="review-textarea"
        placeholder="Расскажи, что думаешь о сервере..."
        maxLength={400}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Звёзды оценки */}
      <div className="review-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`review-star ${star <= rating ? 'active' : ''}`}
            onClick={() => setRating(star)}
          >
            ★
          </button>
        ))}
      </div>

      {/* Капча: реши пример */}
      <div className="review-captcha">
        <span className="captcha-label">🛡 Реши пример:</span>
        <span className="captcha-question">
          {captcha.a} + {captcha.b} =
        </span>
        <input
          className="captcha-input"
          placeholder="Ответ"
          inputMode="numeric"
          value={captchaAnswer}
          onChange={(e) => setCaptchaAnswer(e.target.value)}
        />
      </div>

      {error && <div className="review-error">{error}</div>}

      <button className="review-submit" onClick={handleSubmit}>
        ➤ Отправить отзыв
      </button>

      <p className="review-form-note">
        Отзыв появится на сайте после проверки модератором
      </p>
    </div>
  );
}
