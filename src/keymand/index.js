#!/bin/env node

global.CurrentKeyboardAction = null

const env = process.env;

const fs = require('fs');
const iohook = require('iohook');
const exec = require('shelljs').exec;

const keymap = require('./src/keymap.js');
const userHotkeysRaw = JSON.parse(fs.readFileSync(`/home/${env.USER}/.config/hotkeys.json`, 'utf8')).shortcuts;

const simpleUserHotkeys = [];
const doubleUserHotkeys = [];

// Organiza os atalhos em simples e duplos
Object.keys(userHotkeysRaw).forEach((hotkey) => {
    if (hotkey.includes('+')) {  
        doubleUserHotkeys.push({
            tapKey: hotkey.split('+')[1],
            pressKey: hotkey.split('+')[0],
            action: userHotkeysRaw[hotkey]
        });
    } else {
        simpleUserHotkeys.push({
            tapKey: hotkey,
            action: userHotkeysRaw[hotkey]
        });
    }
});

// console.debug('Simple user hotkeys:', simpleUserHotkeys);
// console.debug('Double user hotkeys:', doubleUserHotkeys);

var tappedKey = null;
var modifierKeys = {}
var pressedModifierKeys = [];
var unpressedModifierKeys = [];

iohook.on('keydown', (event) => {

    modifierKeys = {
        Alt: event.altKey,
        Control: event.ctrlKey,
        Shift: event.shiftKey,
        Meta: event.metaKey
    };

    tappedKey = keymap(event.keycode);
    pressedModifierKeys = Object.keys(modifierKeys).filter((key) => modifierKeys[key]);

    if (pressedModifierKeys.length > 0) {

        const foundHotkey = doubleUserHotkeys.find((hotkey) => {
            return hotkey.tapKey === tappedKey && pressedModifierKeys.includes(hotkey.pressKey);
        });

        if (foundHotkey) {
            exec(foundHotkey.action + ' &');
            global.CurrentKeyboardAction = foundHotkey.action.slice(0, 7);
        }

    } else {

        // console.warn('No modifier detected');
        const foundHotkey = simpleUserHotkeys.find((hotkey) => hotkey.tapKey === tappedKey);

        if (foundHotkey) {
            exec(foundHotkey.action + ' &');
            global.CurrentKeyboardAction = foundHotkey.action.slice(0, 7);
        }
    }

});

iohook.on('keyup', (event) => {

    modifierKeys = {
        Alt: event.altKey,
        Control: event.ctrlKey,
        Shift: event.shiftKey,
        Meta: event.metaKey
    };

    unpressedModifierKeys = Object.keys(modifierKeys).filter((key) => modifierKeys[key]);

    if (unpressedModifierKeys.length > 0) {
        if (global.CurrentKeyboardAction) {
            exec(`pkill ${global.CurrentKeyboardAction}`);
            global.CurrentKeyboardAction = null;
        }  
    }

    console.log('event: ', + event)
    console.log('unpressed modifier keys', unpressedModifierKeys);
});

iohook.start((error) => {
    if (error) {
        console.error('Error starting iohook:', error);
        iohook.start();
    } else {
        console.log('Listening for hotkeys...');
    }
});
