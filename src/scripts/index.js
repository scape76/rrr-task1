import {createNoteBtnElem, handleCreateBtnClick, exitNoteBtnElem, handleExitBtnClick} from './popup.js';
import renderListItems from './renderItems.js';
import renderCountTable from './renderCountTable.js';
import setListenersOnBtns from './buttonListeners.js';

document.addEventListener('DOMContentLoaded', () => {
    createNoteBtnElem.addEventListener('click', handleCreateBtnClick)
    exitNoteBtnElem.addEventListener('click', handleExitBtnClick)
    renderListItems()
    renderCountTable()
    setListenersOnBtns()
})