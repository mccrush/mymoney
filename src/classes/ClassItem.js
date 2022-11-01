import getId from './../scripts/getId'
import getDateNow from './../scripts/getDateNow'

export default class ClassCategory {
  constructor(groupId = '', categoryId = '', title = '', dateCreate = getDateNow(), sum = null) {
    this.id = getId()
    this.type = 'items'
    this.groupId = groupId
    this.categoryId = categoryId
    this.title = title
    this.description = ''
    this.position = 0
    this.dateCreate = dateCreate
    this.sum = sum
  }
}

