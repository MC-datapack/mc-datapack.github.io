import versionTexts from './versionTexts';

document.addEventListener('DOMContentLoaded', () => {
    // Create and append the heading
    const heading = document.createElement('h1');
    heading.textContent = 'This website is all about Minecraft Datapacks/Resourcepacks.';
    document.body.appendChild(heading);

    // Create and append the select container
    const selectContainer = document.createElement('div');
    selectContainer.id = 'select-container';
    document.body.appendChild(selectContainer);

    const mcVersions: string[] = [
        "1.13 - 1.13.2", "1.14 - 1.14.4", "1.15 - 1.15.2", "1.16 - 1.16.1", "1.16.2 - 1.16.5",
        "1.17 - 1.17.1", "1.18 - 1.18.1", "1.18.2", "1.19 - 1.19.1", "1.19.2 - 1.19.4", 
        "1.20 - 1.20.1", "1.20.2", "1.20.3 - 1.20.4", "1.20.5 - 1.20.6", "1.21 - 1.21.1",
        "1.21.2 - 1.21.3", "1.21.4"
    ];

    const select = document.createElement('select');
    const description = document.createElement('p');
    description.id = 'version-description';
    document.body.appendChild(description);

    mcVersions.forEach((optionText: string) => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });

    select.addEventListener('change', (event) => {
        const selectedVersion = (event.target as HTMLSelectElement).value;
        description.textContent = versionTexts[selectedVersion] || "No description available.";
    });

    selectContainer.appendChild(select);
});