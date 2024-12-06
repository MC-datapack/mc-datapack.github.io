document.addEventListener('DOMContentLoaded', () => {
    const heading = document.createElement('h1');
    heading.textContent = 'This website is all about Minecraft Datapacks/Resourcepacks.';
    document.body.appendChild(heading);

    const selectContainer = document.createElement('div');
    selectContainer.id = 'select-container';
    document.body.appendChild(selectContainer);

    const select = document.createElement('select');
    const description = document.createElement('p');
    description.id = 'version-description';
    document.body.appendChild(description);

    const mcVersions = [
        "1.13 - 1.13.2", "1.14 - 1.14.4", "1.15 - 1.15.2", "1.16 - 1.16.1", "1.16.2 - 1.16.5",
        "1.17 - 1.17.1", "1.18 - 1.18.1", "1.18.2", "1.19 - 1.19.1", "1.19.2 - 1.19.4", 
        "1.20 - 1.20.1", "1.20.2", "1.20.3 - 1.20.4", "1.20.5 - 1.20.6", "1.21 - 1.21.1",
        "1.21.2 - 1.21.3", "1.21.4"
    ];

    const versionTexts = {
        "1.13 - 1.13.2": "Text for version 1.13 - 1.13.2",
        "1.14 - 1.14.4": "Text for version 1.14 - 1.14.4",
        "1.15 - 1.15.2": "Text for version 1.15 - 1.15.2",
        "1.16 - 1.16.1": "Text for version 1.16 - 1.16.1",
        "1.16.2 - 1.16.5": "Text for version 1.16.2 - 1.16.5",
        "1.17 - 1.17.1": "Text for version 1.17 - 1.17.1",
        "1.18 - 1.18.1": "Text for version 1.18 - 1.18.1",
        "1.18.2": "Text for version 1.18.2",
        "1.19 - 1.19.1": "Text for version 1.19 - 1.19.1",
        "1.19.2 - 1.19.4": "Text for version 1.19.2 - 1.19.4",
        "1.20 - 1.20.1": "Text for version 1.20 - 1.20.1",
        "1.20.2": "Text for version 1.20.2",
        "1.20.3 - 1.20.4": "Text for version 1.20.3 - 1.20.4",
        "1.20.5 - 1.20.6": "Text for version 1.20.5 - 1.20.6",
        "1.21 - 1.21.1": "Text for version 1.21 - 1.21.1",
        "1.21.2 - 1.21.3": "Text for version 1.21.2 - 1.21.3",
        "1.21.4": "Text for version 1.21.4"
    };

    mcVersions.forEach((optionText) => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });

    select.selectedIndex = 16;
    const initialSelectedVersion = select.value; 
    description.textContent = versionTexts[initialSelectedVersion] || "No description available.";

    select.addEventListener('change', (event) => { 
        const selectedVersion = event.target.value; 
        description.textContent = versionTexts[selectedVersion] || "No description available."; 
    });

    selectContainer.appendChild(select);
});
