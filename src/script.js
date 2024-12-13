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

    const datapacksContainer = document.createElement('div');
    datapacksContainer.id = 'datapacks-container';
    document.body.appendChild(datapacksContainer);

    const resourcepacksContainer = document.createElement('div');
    resourcepacksContainer.id = 'resourcepacks-container';
    document.body.appendChild(resourcepacksContainer);

    const mcVersions = [
        "1.21.4", "1.21.2 - 1.21.3", "1.21 - 1.21.1", 
        "1.20.5 - 1.20.6", "1.20.3 - 1.20.4", "1.20.2", "1.20 - 1.20.1", 
        "1.19.4", "1.19 - 1.19.3", 
        "1.18.2", "1.18 - 1.18.1", 
        "1.17 - 1.17.1", 
        "1.16.2 - 1.16.5", "1.16 - 1.16.1", 
        "1.15 - 1.15.2", 
        "1.14 - 1.14.4", 
        "1.13 - 1.13.2"
    ];

    const versionTexts = {
        "1.13 - 1.13.2": "The first version supporting Datapacks.",
        "1.14 - 1.14.4": "Many big changes to Datapacks.",
        "1.15 - 1.15.2": "Basically the same as 1.14",
        "1.16 - 1.16.1": "Pretty much no changes.",
        "1.16.2 - 1.16.5": "Experimental support for Worldgen.",
        "1.17 - 1.17.1": "Datapacks can now change the max build height.",
        "1.18 - 1.18.1": "Many parts of Worldgen got improved.",
        "1.18.2": "Datapacks can define Structures.",
        "1.19 - 1.19.3": "Structure System was rewritten.",
        "1.19.4": "Datapacks can now define Damage Types.",
        "1.20 - 1.20.1": "No big changes.",
        "1.20.2": "Datapacks can have multiple supported formats and can have overlays.",
        "1.20.3 - 1.20.4": "Nearly no changes.",
        "1.20.5 - 1.20.6": "New NBT data, new components...",
        "1.21 - 1.21.1": "Many dictionaries are singular and not plural anymore.",
        "1.21.2 - 1.21.3": "Removed generic. from Attributes.",
        "1.21.4": "No big changes"
    };

    mcVersions.forEach((optionText) => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });

    select.selectedIndex = 0; 
    const initialSelectedVersion = select.value; 
    description.textContent = versionTexts[initialSelectedVersion] || "No description available.";
    updateButtons(initialSelectedVersion);

    select.addEventListener('change', (event) => { 
        const selectedVersion = event.target.value; 
        description.textContent = versionTexts[selectedVersion] || "No description available."; 
        updateButtons(selectedVersion);
    });

    selectContainer.appendChild(select);

    function updateButtons(version) {
        datapacksContainer.innerHTML = '';
        resourcepacksContainer.innerHTML = '';
    
        const script = document.createElement('script');
        script.src = `src/versions/${version.replace(/\./g, '_').replace(/ - /g, '-')}.js`;
        script.onload = () => {
            const datapackButton = document.createElement('button');
            datapackButton.className = 'datapack-button';
            datapackButton.textContent = `Datapack for ${version}`;
            datapackButton.addEventListener('click', (event) => {
                loadDatapack();
            });
        
            const resourcepackButton = document.createElement('button');
            resourcepackButton.className = 'resourcepack-button';
            resourcepackButton.textContent = `Resourcepack for ${version}`;
            resourcepackButton.addEventListener('click', (event) => {
                loadDatapack();
            });
        
            datapacksContainer.appendChild(datapackButton);
            resourcepacksContainer.appendChild(resourcepackButton);
        };

        script.onerror = () => {
            console.error(`Failed to load script: ${script.src}`);
        };

        document.body.appendChild(script);
    }
});
