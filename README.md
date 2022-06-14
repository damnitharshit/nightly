<p align="center">
<img src="logo.svg" width="200"/>
</p>

A minimal and configurable start page for the web browser of your choice.

## Installation

### For Chromium-based browsers
- Clone this repository with `git clone https://github.com/Harshit-T/nightly.git`.
- Download [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna).
- Go to Extension settings and add path to index.html as Redirect URL. for example, `file://path/to/file/index.html`

**OR**

- Download [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna).
- Go to extension settings and set `https://damnitharshit.github.io/nightly/` as Redirect URL.

### For Firefox-based browsers
- Download [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/).
- Go to Extension settings and set `https://damnitharshit.github.io/nightly/` as Redirect URL.

NOTE : The blur effect in this project is applied with [this CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) which isn't enabled by default in firefox. Follow the steps on [this guide](https://dev.to/snkds/how-to-enable-backdrop-filter-in-firefox-2n8e) to enable it manually and the blur should work fine. 

## Preview
<p align="center">
<img src="preview.png" width="600">
</p>
