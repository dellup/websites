const burg = document.querySelector('.header__burg');
burg.addEventListener('click', () => {
    const blockMob = document.querySelector('.header__mobNav');
    blockMob.classList.toggle("header__mobNav-active");
})
const cross = document.querySelector('.header__crossImg');
cross.addEventListener('click', () => {
    const blockMob = document.querySelector('.header__mobNav');
    blockMob.classList.remove("header__mobNav-active");
})

function fixZoom() {
    const scale = window.devicePixelRatio; // Получаем текущий масштаб
    document.body.style.transform = `scale(${1 / scale})`;
    document.body.style.transformOrigin = "top left";
    document.body.style.width = `${100 * scale}vw`; // Корректируем ширину
}

// Применяем коррекцию при загрузке страницы и изменении масштаба
if (window.screen.width > 1200) {
    window.addEventListener("resize", fixZoom);
    window.addEventListener("load", fixZoom);
}
// Получаем радио-кнопки и SVG элементы
const radios = document.querySelectorAll('input[name="radio"]');
const radiosTypes = document.querySelectorAll('input[name="radioType"]');
const svgContainers = document.querySelectorAll('.main__infoAdd');
let type = 1;
// Функция для обновления отображения SVG

function updateSVG() {
    const selectedValue = document.querySelector('input[name="radio"]:checked').value;

    svgContainers.forEach(svg => {
        // Убираем активное состояние
        svg.classList.remove('preactive');
        svg.classList.remove('active');
    });

    // Показываем нужный SVG
    const activeSvg = document.getElementById(`svg-${selectedValue}`);

    // Небольшая задержка для запуска анимации opacity
    activeSvg.classList.add('preactive');
    setTimeout(() => {
        activeSvg.classList.add('active');
    }, 250);

}

// Добавляем обработчики событий на изменение радио-кнопок
radios.forEach(radio => {
    radio.addEventListener('change', updateSVG); // Передаем аргумент 1
});

radiosTypes.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        changeType(selectedValue);
    });
});
function changeType(value) {
    if (value == 11) {
        type = 0;
        removeRowEventListeners(); // Удаляем слушатели первого типа
        removeMapEventListeners();
        processingFirstType();
    }
    if (value == 12) {
        type = 0;
        removeRowEventListeners(); // Удаляем слушатели первого типа
        removeMapEventListeners();
        processingSecondType();
    }
    if (value == 13) {
        type = 0;
        removeRowEventListeners(); 
        removeMapEventListeners();
        processingThirdType();
    }
}

function setRadioChecked(pageId) {
    let radioId;

    console.log(pageId);
    if (pageId === "Page 1") {
        radioId = "radio-1";
    } else if (pageId === "Page 2") {
        radioId = "radio-2";
    } else if (pageId === "Page 3") {
        radioId = "radio-3";
    } else if (pageId === "Page 4") {
        radioId = "radio-4";
    } else if (pageId === "Page 5") {
        radioId = "radio-5";
    } else if (pageId === "Page 6") {
        radioId = "radio-6";
    } else if (pageId === "Page 7") {
        radioId = "radio-7";
    } else if (pageId === "Style 1") {
        radioId = "radio-11";
    } else if (pageId === "Style 2") {
        radioId = "radio-12";
    }else if (pageId === "Style 3") {
        radioId = "radio-13";
    }
    

    const radio = document.getElementById(radioId);
    if (radio) {
        radio.checked = true;
    }
}

// Вызываем функцию при загрузке страницы
updateSVG();

const frstPage = ["mod-17", "mod-19/1"];
const scndPage = ["mod-15", "mod-19/2", "mod-13", "mod-5", "mod-8/1",];
const thrdPage = ["mod-2", "mod-3", "mod-4", "mod-6", "mod-7/1", "mod-7/2", "mod-8/2", "mod-9/2", "mod-10/2", "mod-11/2", "mod-12", "mod-18/1"];
const frthPage = ["mod-21", "mod-10/1", "mod-9/1", "mod-8/0"];
const fifthPage = ["mod-20", "mod-16"];
const sxthPage = ["mod-14/2", "mod-14/1", "mod-18/2", "mod-11/1",];
const svnthPage = ["mod-22"];
let map = new Map([
    ["mod-2", "m2-v"],
    ["mod-3", "m3-v"],
    ["mod-4", "m4-v"],
    ["mod-5", "m5-v"],
    ["mod-6", "m6-v"],
    ["mod-7/1", "m7-1-v"],
    ["mod-7/2", "m7-2-v"],
    ["mod-8/0", "m8-0-v"],
    ["mod-8/1", "m8-1-v"],
    ["mod-8/2", "m8-2-v"],
    ["mod-9/1", "m9-1-v"],
    ["mod-9/2", "m9-2-v"],
    ["mod-10/1", "m10-1-v"],
    ["mod-10/2", "m10-2-v"],
    ["mod-11/1", "m11-1-v"],
    ["mod-11/2", "m11-2-v"],
    ["mod-12", "m12-v"],
    ["mod-13", "m13-v"],
    ["mod-14/1", "m14-1-v"],
    ["mod-14/2", "m14-2-v"],
    ["mod-15", "m15-v"],
    ["mod-16", "m16-v"],
    ["mod-17", "m17-v"],
    ["mod-18/1", "m18-1-v"],
    ["mod-18/2", "m18-2-v"],
    ["mod-19/1", "m19-1-v"],
    ["mod-19/2", "m19-2-v"],
    ["mod-20", "m20-v"],
    ["mod-21", "m21-v"],
    ["mod-22", "m22-v"]
]);

let activeRow = null;
let mapEventListeners = new Map();
if (type == 1) {
    processingFirstType();
}

function removeRowEventListeners() {
    document.querySelectorAll('tr').forEach(row => {
        row.removeEventListener('click', rowClickListener);
    });
}

function removeMapEventListeners() {
    mapEventListeners.forEach((listener, elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.removeEventListener('click', listener);
        }
    });
}


function rowClickListener(event) {
    const rowId = this.id;
    const addId = map.get(rowId);

    const add = document.getElementById(addId);

    if (activeRow && activeRow !== this) {
        activeRow.classList.remove("table__row-active");
    }

    document.querySelectorAll('.modul_button').forEach(item => {
        item.classList.remove("hideAdd");
    });
    add.classList.add("hideAdd");

    this.classList.add("table__row-active");
    activeRow = this;

    if (frstPage.includes(rowId) && document.querySelector('input[name="radio"]:checked').value != 1) {
        setRadioChecked("Page 1");
        updateSVG();
    } else if (scndPage.includes(rowId) && document.querySelector('input[name="radio"]:checked').value != 2) {
        setRadioChecked("Page 2");
        updateSVG();
    } else if (thrdPage.includes(rowId) && document.querySelector('input[name="radio"]:checked').value != 3) {
        setRadioChecked("Page 3");
        updateSVG();
    } else if (frthPage.includes(rowId) && document.querySelector('input[name="radio"]:checked').value != 4) {
        setRadioChecked("Page 4");
        updateSVG();
    } else if (fifthPage.includes(rowId) && document.querySelector('input[name="radio"]:checked').value != 5) {
        setRadioChecked("Page 5");
        updateSVG();
    } else if (sxthPage.includes(rowId) && document.querySelector('input[name="radio"]:checked').value != 6) {
        setRadioChecked("Page 6");
        updateSVG();
    } else if (svnthPage.includes(rowId) && document.querySelector('input[name="radio"]:checked').value != 7) {
        setRadioChecked("Page 7");
        updateSVG();
    }
}

function processingFirstType() {
    setRadioChecked("Style 1");
    console.log("123");
    console.log("first");
    document.querySelectorAll('.modul_button').forEach(item => {
        item.classList.remove("hideSecond");
    });
    document.querySelectorAll('tr').forEach(row => {
        row.addEventListener('click', rowClickListener); // Добавляем слушатель клика на строки
    });

    map.forEach((value, key) => {
        const rowId = key;
        let element = document.getElementById(value);
        const row = document.getElementById(rowId);

        if (element) {
            // Создаем обработчик для элемента
            const listener = function() {
                if (activeRow && activeRow !== row) {
                    activeRow.classList.remove("table__row-active");
                }
                row.classList.add("table__row-active");
                activeRow = row;
                const addId = map.get(rowId);

                const add = document.getElementById(addId);

                document.querySelectorAll('.modul_button').forEach(item => {
                    item.classList.remove("hideAdd");
                });
                add.classList.add("hideAdd");
            };

            // Сохраняем обработчик в mapEventListeners
            mapEventListeners.set(value, listener);

            // Добавляем слушатель на элемент
            element.addEventListener('click', listener);
        }
    });

    
}

function processingSecondType() {
    document.querySelectorAll('.modul_button').forEach(item => {
        item.classList.add("hideSecond");
    });
    document.querySelectorAll('tr').forEach(row => {
        row.classList.remove("table__row-active");
        row.addEventListener('click', processingFirstType);// Добавляем слушатель клика на строки
    });

}
function processingThirdType() {
    document.querySelectorAll('.modul_button').forEach(item => {
        item.classList.remove("hideSecond");
        item.classList.remove("hideAdd");
    });
    document.querySelectorAll('tr').forEach(row => {
        row.classList.remove("table__row-active");
        row.addEventListener('click', processingFirstType);// Добавляем слушатель клика на строки
    });
}

function findKeyByValue(map, valueToFind) {
    let foundKey = null;

    map.forEach((value, key) => {
        if (value === valueToFind) {
            foundKey = key;
        }
    });

    return foundKey;
}