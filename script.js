function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
}

function showCategory(categoryId, title) {
    const hero = document.getElementById('hero');
    const mainTitle = document.getElementById('main-title');
    const mainCategories = document.getElementById('main-categories');

    // Ocultar todas las galerías
    document.querySelectorAll('.gallery').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la categoría seleccionada
    document.getElementById(categoryId).style.display = 'block';

    // Ocultar el título principal y las categorías
    mainTitle.style.display = 'none';
    mainCategories.style.display = 'none';

    // Cambiar el título de la sección y el fondo
    hero.style.backgroundColor = '#666';
    hero.style.backgroundImage = 'none';
    mainTitle.textContent = title;
    mainTitle.style.display = 'block';
}

function showSubcategory(subcategoryTitle, subcategoryId) {
    const hero = document.getElementById('hero');
    const mainTitle = document.getElementById('main-title');

    // Cambiar el título de la subcategoría en la parte superior
    mainTitle.textContent = subcategoryTitle;

    // Ocultar todas las galerías y subcategorías
    document.querySelectorAll('.gallery').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar solo la subcategoría seleccionada
    document.getElementById(subcategoryId).style.display = 'block';

    // Eliminar el título en la parte de los botones
    document.querySelector(`#${subcategoryId} #subcategory-title`).style.display = 'none';
}

function goBackToCategory(categoryId, title) {
    const hero = document.getElementById('hero');
    const mainTitle = document.getElementById('main-title');

    // Cambiar el título de vuelta a la categoría principal
    mainTitle.textContent = title;

    // Ocultar todas las subcategorías
    document.querySelectorAll('.gallery').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la categoría principal
    document.getElementById(categoryId).style.display = 'block';
}
