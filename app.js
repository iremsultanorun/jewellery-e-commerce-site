let container = document.querySelector('.container');

function createShapes(parentElement, shape, count, attribute, className) {
    for (let i = 0; i < count; i++) {
        let element = document.createElement(shape);
        if (shape === 'img') {
            element.src = attribute;
        }
        element.classList.add(className);
        parentElement.appendChild(element);

        element.style.top = Math.random() * -window.innerHeight + 'px';
        element.style.left = Math.random() * window.innerWidth + 'px';
    }

    setTimeout(() => {
        const snowflakeTypes = document.querySelectorAll('.' + className);
        snowflakeTypes.forEach(snowflakeType => {
            snowflakeType.style.transition = 'top 20s ease-out';
            snowflakeType.style.top = window.innerHeight + 'px';
        });

        setTimeout(() => {
            setTimeout(() => {
                snowflakeTypes.forEach(snowflakeType => {
                    snowflakeType.remove();
                });
            }, 20000)

            createShapes(parentElement, shape, count, attribute, className);
        }, 1000);
    }, 1);
}

createShapes(container, 'img', 10, 'snowflake.png', 'snowflake');
createShapes(container, 'div', 15, 'circleSnowflake', 'circleSnowflake');


let rightDiv = document.querySelector('.rightDiv')
for (let i = 0; i <= 35; i++) {
    let spans = document.createElement('span');
    rightDiv.appendChild(spans);
}









