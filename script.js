
        // Выбор элементов для уведомления
        const messageButton = document.getElementById('messageButton');
        const topNotification = document.getElementById('topNotification');
        const mainContainer = document.getElementById('mainContainer');

        // Функция показа уведомления
        function showNotification(e) {
            // Если уведомление ещё не показано, показываем его
            if (!topNotification.classList.contains('show')) {
                topNotification.classList.add('show');
                mainContainer.classList.add('blurBackground');
                // Предотвращаем всплытие, чтобы документный клик не закрыл уведомление сразу
                e.stopPropagation();
            }
        }

        // Обработчик для кнопки "Отправить сообщение"
        messageButton.addEventListener('click', showNotification);

        // Если уведомление уже показано, и пользователь кликает на любое место (кроме уведомления), закрываем его
        document.addEventListener('click', function(e) {
            if (topNotification.classList.contains('show') && !topNotification.contains(e.target)) {
                topNotification.classList.remove('show');
                mainContainer.classList.remove('blurBackground');
            }
        });

        // Предотвращаем закрытие уведомления, если клик произошёл на самом уведомлении
        topNotification.addEventListener('click', function(e) {
            e.stopPropagation();
        });


        // ----- Код для системы комментариев -----
        const commentsContainer = document.getElementById('commentsContainer');
        const commentInput = document.getElementById('commentInput');
        const commentButton = document.getElementById('commentButton');

        // При нажатии "Отправить" создаём новый блок .comment
        // временно отключил комменты 
         commentButt2on.addEventListener('click', () => {
            const text = commentInput.value.trim();
            if (text !== '') {
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `
                    <div class="comment-header">
                        <img class="comment-avatar" src="https://i.postimg.cc/Bb8DvSmD/f0b98676f3f77f4a0fd744a26903882f.jpg" alt="avatar">
                        <span class="comment-author">You</span>
                        <span class="comment-date">только что</span>
                        <button class="complaint-button">Жалоба</button>
                    </div>
                    <p>${text}</p>
                `;
                commentsContainer.appendChild(newComment);
                commentInput.value = '';
            }
        });