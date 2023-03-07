// event listener
function addGlobalEventListener(type, selector, callback, option = false) {
    document.addEventListener(
        type,
        (e) => {
            if (e.target.matches(selector)) callback(e)
        },
        option
    )
}

// toggles attribute
function toggleAtt(attribute, value, e) {
    e.target.hasAttribute(attribute, value) === false
        ? e.target.setAttribute(attribute, value)
        : e.target.removeAttribute(attribute)
    // e.stopPropagation();
}

// toggle drodpdwon
addGlobalEventListener('click', '[data-toggle]', (e) => {
    toggleAtt('data-state', 'active', e)
})

// toggle tooltip
addGlobalEventListener('click', '[data-tooltip]', (e) => {
    toggleAtt('data-state', 'active', e)
})
