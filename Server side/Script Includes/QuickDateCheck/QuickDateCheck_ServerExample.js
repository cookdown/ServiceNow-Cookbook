gs.debug("The current time is: " + (new GlideDateTime()))

quickCheckObject = new QuickDateCheck();
gs.debug('2019-08-31 is past: ' + quickCheckObject.isPastDate('2019-08-31'))
gs.debug('2019-08-31 is future: ' + quickCheckObject.isFutureDate('2019-08-31'))
gs.debug('2019-09-09 20:04:46 is past time: ' + quickCheckObject.isPastDateTime('2019-09-09 20:04:46'))
gs.debug('2019-09-09 20:04:46 is future time: ' + quickCheckObject.isFutureDateTime('2019-09-09 20:04:46'))