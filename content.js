function runShortcut(shortcutName) {
    const url = 'shortcuts://run-shortcut?name=' + encodeURIComponent(shortcutName);

    window.location.href = url;
}

runShortcut('MoveMouse')
