import getId from './../scripts/getId'
import getDateNow from './../scripts/getDateNow'

export default class ClassGroup {
  constructor(vid = '', title = '') {
    this.id = getId()
    this.type = 'groups'
    this.title = title
    this.description = ''
    this.vid = vid
    this.position = 0
    this.dateCreate = getDateNow()
  }
}