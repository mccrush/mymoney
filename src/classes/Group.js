import getId from './getId'
import getDateNow from './getDateNow'

export class Group {
  constructor(type = '', title = '') {
    this.id = getId()
    this.type = type
    this.title = title
    this.description = ''
    this.position = 0
    this.dateCreate = getDateNow()
    this.categoties = []
  }
}