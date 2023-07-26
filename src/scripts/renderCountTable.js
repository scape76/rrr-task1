import storage from './storage.js'
import { getCategoryIcon } from './renderItems.js'

const countTableBodyElem = document.querySelector('.count-body')

const getNumberOfAppropriateCategoryItems = (array, categoryName) =>  
    array.filter(({category}) => category === categoryName).length


const getCategoryRowIfExist = (active, archived, category) => {
    return active || archived  
    ? `<tr class="count__item">
        <td>
            <div class="count__item__category-icon">
                <i class="${getCategoryIcon(category)}"></i>
            </div>
            ${category}
        </td>
        <td>${active}</td>
        <td>${archived}</td>
    </tr>`
    : ``
}

const renderCountTable = () => {
    const tasksActiveQuantity = getNumberOfAppropriateCategoryItems([...storage.active], 'task')
    const tasksArchivedQuantity = getNumberOfAppropriateCategoryItems([...storage.archived], 'task')

    const thoughtsActiveQuantity = getNumberOfAppropriateCategoryItems([...storage.active], 'thought')
    const thoughtsArchivedQuantity = getNumberOfAppropriateCategoryItems([...storage.archived], 'thought')

    const ideasActiveQuantity = getNumberOfAppropriateCategoryItems([...storage.active], 'idea')
    const ideasArchivedQuantity = getNumberOfAppropriateCategoryItems([...storage.archived], 'idea')

    const tasksHtmlElem = getCategoryRowIfExist(tasksActiveQuantity, tasksArchivedQuantity, 'task') 
    const thoughtsHtmlElem = getCategoryRowIfExist(thoughtsActiveQuantity, thoughtsArchivedQuantity, 'thought') 
    const ideasHtmlElem = getCategoryRowIfExist(ideasActiveQuantity, ideasArchivedQuantity, 'idea') 


    countTableBodyElem.innerHTML = `${tasksHtmlElem}${thoughtsHtmlElem}${ideasHtmlElem}`
}

export default renderCountTable