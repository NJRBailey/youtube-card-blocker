var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('youtubeCardBlocker.css');
(document.head||document.documentElement).appendChild(style);