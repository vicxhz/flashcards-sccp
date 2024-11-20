// Seleciona todos os flashcards
const flashcards = document.querySelectorAll('.flashcard');

// Adiciona um evento de clique a cada flashcard
flashcards.forEach(flashcard => {
    flashcard.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar a resposta
        flashcard.classList.toggle('active');
    });
});
