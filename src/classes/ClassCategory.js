import getId from './../scripts/getId'
import getDateNow from './../scripts/getDateNow'

export default class ClassCategory {
  constructor(groupId = '', title = '') {
    this.id = getId()
    this.type = 'categories'
    this.groupId = groupId
    this.title = title
    this.description = ''
    this.position = 0
    this.dateCreate = getDateNow()
    this.sum = 0
    this.items = []
  }
}