const dataSet = { 
    activeMainChoose: 0,
    activeDay: 0,
    mainChoose: [
        {
            name: "1000",
            title: "Express fit",
            selected: "program0",
            description: "blabla123",
            prices: [ 
                {
                    price: "315",
                    name: "Тест-день"
                },
                {
                    price: "450",
                    name: "1 день"
                },
                {
                    price: "425",
                    name: "от 7 дней"
                },
                {
                    price: "400",
                    name: "от 14 дней"
                },
                {
                    price: "380",
                    name: "от 30 дней"
                }
            ]
        },
        {
            name:"1250",
            title: "Fitness",
            selected: "program1",
            description: "blabla321",
            prices: [ 
                {
                    price: "3213",
                    name: "Тест-день"
                },
                {
                    price: "450",
                    name: "1 день"
                },
                {
                    price: "425",
                    name: "от 7 дней"
                },
                {
                    price: "400",
                    name: "от 14 дней"
                },
                {
                    price: "380",
                    name: "от 30 дней"
                }
            ]
        },
        {
            name:"1400",
            title:"Balance",
            selected: "program3",
            description: "blabla",
            prices: [ 
                {
                    price: "315",
                    name: "Тест-день"
                },
                {
                    price: "450",
                    name: "1 день"
                },
                {
                    price: "425",
                    name: "от 7 дней"
                },
                {
                    price: "400",
                    name: "от 14 дней"
                },
                {
                    price: "380",
                    name: "от 30 дней"
                }
            ]
        },
        {
            name:"1750",
            title: "Strong",
            selected: "program4",
            description: "blabla",
            prices: [ 
                {
                    price: "315",
                    name: "Тест-день"
                },
                {
                    price: "450",
                    name: "1 день"
                },
                {
                    price: "425",
                    name: "от 7 дней"
                },
                {
                    price: "400",
                    name: "от 14 дней"
                },
                {
                    price: "380",
                    name: "от 30 дней"
                }
            ]
        },
        {
            name:"2000",
            title: "Maxi fit",
            selected: "program5",
            description: "blabla",
            prices: [ 
                {
                    price: "315",
                    name: "Тест-день"
                },
                {
                    price: "450",
                    name: "1 день"
                },
                {
                    price: "425",
                    name: "от 7 дней"
                },
                {
                    price: "400",
                    name: "от 14 дней"
                },
                {
                    price: "380",
                    name: "от 30 дней"
                }
            ]
        }
    ],
    days: [
        {
            day: "Пн",
            selected: "selected0"
        },
        {
            day: "Вт",
            selected: "selected1"
        }, 
        {
            day: "Ср",
            selected: "selected2"
        },
        {
            day:  "Чт",
            selected: "selected3"
        },
        {
            day: "Пт",
            selected: "selected4"
        },
        {
            day: "Сб",
            selected: "selected5"
        },
        {
            day: "Вс",
            selected: "selected6"
        }
    ],
    program0: {
        selected0: [
            {
                title: "Завтрак",
                content: "Гранола с персиком"
            },
            {
                title: "Обед",
                content: "Капелини с лососем"
            },
            {
                title: "Полдник",
                content: "Цитрусовый салат с креветкой"
            },
            {
                title: "Ужин",
                content: "Сайда су-вид на подушке с цветной капусты"
            }
        ],
        selected1: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected2: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected3: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected4: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected5: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected6: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ]
    },
    program1: {
        selected0: [
            {
                title: "Завтрак",
                content: "Гранола с персиком1"
            },
            {
                title: "Обед",
                content: "Капелини с лососем"
            },
            {
                title: "Полдник",
                content: "Цитрусовый салат с креветкой"
            },
            {
                title: "Ужин",
                content: "Сайда су-вид на подушке с цветной капусты"
            }
        ],
        selected1: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected2: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected3: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected4: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected5: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected6: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ]
    },
    program2: {
        selected0: [
            {
                title: "Завтрак",
                content: "Гранола с персиком"
            },
            {
                title: "Обед",
                content: "Капелини с лососем"
            },
            {
                title: "Полдник",
                content: "Цитрусовый салат с креветкой"
            },
            {
                title: "Ужин",
                content: "Сайда су-вид на подушке с цветной капусты"
            }
        ],
        selected1: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected2: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected3: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected4: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected5: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected6: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ]
    },
    program3: {
        selected0: [
            {
                title: "Завтрак",
                content: "Гранола с персиком"
            },
            {
                title: "Обед",
                content: "Капелини с лососем"
            },
            {
                title: "Полдник",
                content: "Цитрусовый салат с креветкой"
            },
            {
                title: "Ужин",
                content: "Сайда су-вид на подушке с цветной капусты"
            }
        ],
        selected1: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected2: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected3: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected4: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected5: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected6: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ]
    },
    program4: {
        selected0: [
            {
                title: "Завтрак",
                content: "Гранола с персиком"
            },
            {
                title: "Обед",
                content: "Капелини с лососем"
            },
            {
                title: "Полдник",
                content: "Цитрусовый салат с креветкой"
            },
            {
                title: "Ужин",
                content: "Сайда су-вид на подушке с цветной капусты"
            }
        ],
        selected1: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected2: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected3: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected4: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected5: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected6: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ]
    },
    program5: {
        selected0: [
            {
                title: "Завтрак",
                content: "Гранола с персиком"
            },
            {
                title: "Обед",
                content: "Капелини с лососем"
            },
            {
                title: "Полдник",
                content: "Цитрусовый салат с креветкой"
            },
            {
                title: "Ужин",
                content: "Сайда су-вид на подушке с цветной капусты"
            }
        ],
        selected1: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected2: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected3: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected4: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected5: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ],
        selected6: [
            {
                title: "Завтрак",
                content: "Творожная запеканка"
            },
            {
                title: "Обед",
                content: "Тыквенный пирог"
            },
            {
                title: "Полдник",
                content: "Гречневая каша с сайдой и овощами"
            },
            {
                title: "Ужин",
                content: "Цитрусовый салат со с/с лососем"
            }
        ]
    }
};






document.addEventListener('DOMContentLoaded', () => {

    function getProgramsData () {
        return document.getElementById('programsData');
    };

    function getProgramDescription () {
        return document.getElementById('programDescription');
    };

    function getProgramDays () {
        return document.getElementById('programDays');
    };

    function getFoodByDays () {
        return document.getElementById('programDayFoods');
    };

    function getPriceMenu () {
        return document.getElementById('programPrice');
    };

    function setMenuProgramsItem (idx ,kkal, name) {
        return `
            <div data-item="${idx}" class="itemMenuCustom program__options-list-item ${idx === dataSet.activeMainChoose ? "active" : ""}">
                <div class="program__options-list-item-number">${kkal} <span>кКал</span></div>
                <div class="program__options-list-item-name">${name}</div>     
            </div>
        `;
    };

    function setDescriptionItem (idx, text) {
        return `<div class="program__options-description-item ${idx === dataSet.activeMainChoose ? "active" : ""}">${text}</div>`;
    };

    function setProgramDayItme (day, isActive = false) {
        return `<div class="program__menu-info-days-item ${isActive ? "active" : ""}">${day}</div>`;
    };

    function setDayFoodItem (title, content) {
        return `
             <div class="program__menu-table-content">
                 <div class="program__menu-table-item">
                     <div class="program__menu-table-item-title">${title}</div>
                         <div class="program__menu-table-item-descr">
                             <span>${content}</span>
                         </div>
                 </div>
             </div>
        `;
    };

    function setProgramPriceItem (name, price) {
        return `
            <div class="program__menu-prices-info-item">
                <div class="program__menu-prices-info-item-title">${name}</div>
                <div class="program__menu-prices-info-value">${price}</div>
            </div>
            `;
    };

    function setMenuImtes () {
        dataSet.mainChoose.forEach((item, idx) => {
            if (dataSet.activeMainChoose === idx) {
                getProgramDescription().insertAdjacentHTML('beforeend' ,setDescriptionItem(idx, item.description));
                getProgramsData().insertAdjacentHTML('beforeend',setMenuProgramsItem(idx, item.name, item.title));
                return;
            }
            getProgramDescription().insertAdjacentHTML('beforeend' ,setDescriptionItem(idx, item.description));
            getProgramsData().insertAdjacentHTML('beforeend',setMenuProgramsItem(idx, item.name, item.title));
            return;
        });
    };

    function setDayProgram () {
        dataSet.days.forEach((item, idx) => {
            if (idx === dataSet.activeDay) {
                getProgramDays().insertAdjacentHTML('beforeend', setProgramDayItme(item.day, true));
                return;
            }
            getProgramDays().insertAdjacentHTML('beforeend', setProgramDayItme(item.day));
            return;
        });
    };

    function setDaysFood () {
       const active = dataSet.mainChoose[dataSet.activeMainChoose].selected; 
       const program = dataSet[active][`selected${dataSet.activeDay}`];
       
       const div = document.createElement('div');
       div.className = "program__menu-table";
       program.forEach((item, idx) => {  
            div.insertAdjacentHTML('beforeend', setDayFoodItem(item.title, item.content));
       });
       getFoodByDays().append(div);
    };

    function setPrice () {
        const prices = dataSet.mainChoose[dataSet.activeMainChoose].prices; 
        prices.forEach(item =>  getPriceMenu().insertAdjacentHTML('beforeend', setProgramPriceItem(item.name, item.price)));
    };

    function setContent() {
        setMenuImtes();
        setDayProgram(); 
        setDaysFood();
        setPrice();
        setChangeMenuItem();
        setChangeActiveDay();
    };

    function dropOff () {
        getProgramsData().innerHTML = '';
        getProgramDescription().innerHTML = '';
        getProgramDays().innerHTML = '';
        getFoodByDays().innerHTML = '';
        getPriceMenu().innerHTML = '';
    };

    function setChangeMenuItem () {
        document.querySelectorAll('.itemMenuCustom').forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                dropOff();
                dataSet.activeMainChoose = idx;
                dataSet.activeDay = 0;
                setContent();
            });
        });
    };

    function setChangeActiveDay () {
        document.querySelectorAll('.program__menu-info-days-item ').forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                dropOff();
                dataSet.activeDay = idx;
                setContent();
            });
        });
    };


    setContent();





    // const contactsBtn = document.querySelector('.contacts-link');
    // const contactsWindow = document.querySelector('.contacts-window');
    // const contactsCloseBtn = document.querySelector('.close-btn');
    // const contactsMobileBtn = document.querySelector('.contacts-btn');
    // const bodyContent = document.querySelector('.body');
    // const bodyOverlay = document.querySelector('.overlay');

    // contactsBtn.addEventListener('click', () => {
    //     contactsWindow.classList.add('active');
    //     bodyOverlay.classList.add('active');

    // });

    // contactsMobileBtn.addEventListener('click', () => {
    //     contactsWindow.classList.add('active');
    //     bodyContent.classList.add('overflow-hiden');
    //     bodyOverlay.classList.add('active');

    // });

    // contactsCloseBtn.addEventListener('click', () => {
    //     contactsWindow.classList.remove('active');
    //     bodyOverlay.classList.remove('active');
    //     if (!menuWindow.classList.contains('active')) {
    //         bodyContent.classList.remove('overflow-hiden');
    //     } 
    //     else {
    //         bodyContent.classList.add('overflow-hiden');
    //     }

    // });

    // bodyOverlay.addEventListener('click', () => {
    //     contactsWindow.classList.remove('active');
    //     bodyOverlay.classList.remove('active');
    //     if (!menuWindow.classList.contains('active')) {
    //         bodyContent.classList.remove('overflow-hiden');
    //     } 
    //     else {
    //         bodyContent.classList.add('overflow-hiden');
    //     }

    // });


    // const menuBtn = document.querySelector('.menu-btn');
    // const menuWindow = document.querySelector('.menu');

    // menuBtn.addEventListener('click', () => {
    //     menuBtn.classList.toggle('active');
    //     menuWindow.classList.toggle('active');
    //     bodyContent.classList.toggle('overflow-hiden');
    //     if (!menuBtn.classList.contains('active')) {
    //         menuBtn.classList.add('holder');
    //     } else {
    //         menuBtn.classList.remove('holder');
    //     }
    // });


    // const anchorsLink = document.querySelectorAll('.menu__list-item-link--anchor, .footer__content-logo-link, .order-btn, .contacts-window__btn');

    // anchorsLink.forEach((item) => {
    //     item.addEventListener('click', function (e) {
    //         e.preventDefault()
    //         const blockID = item.getAttribute('href')
    //         document.querySelector(blockID).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //         menuWindow.classList.remove('active');
    //         menuBtn.classList.remove('active');
    //         bodyContent.classList.remove('overflow-hiden');
    //         contactsWindow.classList.remove('active');
    //         bodyOverlay.classList.remove('active');
    //     })
    // });

    // const faqItems = document.querySelectorAll('.faq__accordion-item');

    // document.querySelectorAll('.faq__accordion-item-question').forEach((item) =>

    //     item.addEventListener('click', () => { 
    //         item.parentNode.classList.toggle('active');
    //     })
    // )


    // document.querySelectorAll('.faq__accordion-item').forEach((item) =>
    //     item.addEventListener('click', () => { 

    //         faqItems.forEach((other, idx) => {
    //             if (other !== item) {
    //                 other.classList.remove("active");
    //                 return
    //             }
    //             return;
    //         });

    //     })
    // )

    // function Menu() {

    //     const programOptions = document.querySelectorAll('.program__options-list-item');
    //     const programTables = document.querySelectorAll('.program__menu-table');
    //     const programDays = document.querySelectorAll('.program__menu-info-days-item');
    //     const programDayTables = document.querySelectorAll('.program__menu-table-content');
    //     const programDescr = document.querySelectorAll('.program__options-description-item');
    //     const programDayBtn = document.querySelectorAll('.program__menu-info-days');
    //     const programPrices = document.querySelectorAll('.program__menu-prices-info');

    //     function chooseMenu(optionitem, menutable, dayitem, daytable, description, daybtn, prices, activeElement) {

    //         optionitem.forEach((item, idx) => {

    //             item.addEventListener('click', () => { 

    //                 const first = document.querySelectorAll('.first');

    //                 optionitem.forEach((other, idx) => {
    //                     if (other !== item) {
    //                         other.classList.remove("active");
    //                         menutable[idx].classList.remove("active");
    //                         daybtn[idx].classList.remove("active");
    //                         description[idx].classList.remove("active");
    //                         prices[idx].classList.remove("active");
    //                         return
    //                     }
    //                     return;
    //                 });

    //                 daytable.forEach((item) => {
    //                     item.classList.remove('active');

    //                 });

    //                 item.classList.add('active');

    //                 menutable[idx].classList.add("active");

    //                 daybtn[idx].classList.add("active");

    //                 description[idx].classList.add("active");

    //                 prices[idx].classList.add("active");

    //                 first[idx].classList.add('active');

    //             });
                
    //         });
            
    //         dayitem.forEach((item, idx) => {

    //             item.addEventListener('click', () => { 

    //                 dayitem.forEach((other, idx) => {
    //                     if (other !== item) {
    //                         other.classList.remove("active");
    //                         daytable[idx].classList.remove("active");
    //                         return
    //                     }
    //                     return;
    //                 });

    //                 item.classList.add('active');

    //                 daytable[idx].classList.add("active");

    //             });

    //         });

    //         prices[activeElement].classList.add("active");
    //         daytable[activeElement].classList.add("active");
    //         dayitem[activeElement].classList.add("active");
    //         daybtn[activeElement].classList.add("active");
    //         dayitem[activeElement].classList.add("active");
    //         optionitem[activeElement].classList.add("active");
    //         menutable[activeElement].classList.add("active");
    //         description[activeElement].classList.add("active");
    //         daybtn[activeElement].classList.add("active");
            

    //     };

    //     chooseMenu(programOptions, programTables, programDays, programDayTables, programDescr, programDayBtn, programPrices, 0);

    // };

    // if (document.querySelector('#menu')) Menu();

});




