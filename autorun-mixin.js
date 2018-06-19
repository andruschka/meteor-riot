const autorunMixin = {
  init: function () {
    let computation = this
    let tag = this

    if (typeof tag.autorun !== 'function') {
      console.error('Riot autorun mixin: the tag doesn\'t have an autorun method', tag)
      return
    }

    computation = Tracker.autorun((comp) => {
      tag.autorun(comp)
      // no need to update the tag if we are in the tag constructor
      if (!comp.firstRun) {
        tag.update()
      }
    })

    tag.on('unmount', function () {
      computation && computation.stop()
      computation = null
      tag = null
    })
  }
}

Meteor.riotMixin = autorunMixin
