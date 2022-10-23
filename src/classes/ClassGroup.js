import getId from './../scripts/getId'
import getDateNow from './../scripts/getDateNow'

export default class ClassGroup {
  constructor(type = '', title = '') {
    this.id = getId()
    this.type = type
    this.title = title
    this.description = ''
    this.position = 0
    this.dateCreate = getDateNow()
    this.categories = []
  }
}