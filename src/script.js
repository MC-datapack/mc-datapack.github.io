const mcVersions = [
    "1.13 - 1.13.2", "1.14 - 1.14.4", "1.15 - 1.15.2", "1.16 - 1.16.1", "1.16.2 - 1.16.5",
    "1.17 - 1.17.1", "1.18 - 1.18.1", "1.18.2", "1.19 - 1.19.1", "1.19.2 - 1.19.4", 
    "1.20 - 1.20.1", "1.20.2", "1.20.3 - 1.20.4", "1.20.5 - 1.20.6", "1.21 - 1.21.1",
    "1.21.2 - 1.21.3", "1.21.4"
];

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'This website is all about Minecraft Datapacks/Resourcepacks.';

    const select = document.createElement('select');

    mcVersions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(/\s+/g, '');
        option.textContent = optionText;
        select.appendChild(option);
    });

    const selectContainer = document.getElementById('select-container');
    selectContainer.appendChild(select);
});