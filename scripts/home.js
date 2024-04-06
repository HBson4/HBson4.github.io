const url = './data/data.json';

async function getProjects() {
    const response = await fetch(url);
    const data = await response.json();
    displayProjects(data);
}

getProjects();

function displayProjects(data) {
    const grid = document.querySelector('#grid');

    data.forEach(project => {
        const card = `
            <a href="${project.link}" class="project-card" target="_blank">
                <div class="overlay">
                    <p>${project.title}</p>
                </div>
            </a>
        `;
        grid.insertAdjacentHTML('beforeend', card);
    });
};