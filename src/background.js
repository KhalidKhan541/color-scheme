chrome.runtime.onMessage.addListener((msg, s, resp) => { if(msg.action === 'getScheme') { chrome.tabs.captureVisibleTab(null, {format: 'png'}, url => { resp({scheme: url}); }); return true; } });
